import React, { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const PAGES = ["/", "/aboutme", "/myskills", "/myprojects", "/contact"];

const TRANSITION_MS = 400;
const LOCK_MS = TRANSITION_MS * 2 + 200;
const SCROLL_THRESHOLD = 150;
const EDGE_TOLERANCE = 2; // px of slack for "at the edge"
const SETTLE_MS = 150; // ignore route changes right after real scrolling

const variants = {
  initial: (dir: number) => ({ opacity: 0, y: dir * 80 }),
  animate: { opacity: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, y: dir * -80 }),
};

const atTop = () => window.scrollY <= EDGE_TOLERANCE;
const atBottom = () =>
  window.innerHeight + window.scrollY >=
  document.documentElement.scrollHeight - EDGE_TOLERANCE;

const RootLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [direction, setDirection] = useState(1);
  const locked = useRef(false);
  const lockTimer = useRef<ReturnType<typeof setTimeout>>();
  const lastScrollAt = useRef(0);

  useEffect(() => {
    const index = PAGES.indexOf(location.pathname);
    if (index === -1) return;

    let delta = 0;
    let resetTimer: ReturnType<typeof setTimeout>;

    const go = (dir: number) => {
      if (locked.current) return;
      const next = index + dir;
      if (next < 0 || next >= PAGES.length) return;

      locked.current = true;
      setDirection(dir);
      navigate(PAGES[next]);

      clearTimeout(lockTimer.current);
      lockTimer.current = setTimeout(() => {
        locked.current = false;
        delta = 0;
      }, LOCK_MS);
    };

    // Track real page scrolling so momentum that carries the user to the
    // edge doesn't instantly flip to the next page.
    const onScroll = () => {
      lastScrollAt.current = Date.now();
      delta = 0;
    };

    const onWheel = (e: WheelEvent) => {
      if (locked.current) return;

      const dir = e.deltaY > 0 ? 1 : -1;
      const canChange = dir === 1 ? atBottom() : atTop();

      // Not at the edge: let the browser scroll normally
      if (!canChange || Date.now() - lastScrollAt.current < SETTLE_MS) {
        delta = 0;
        return;
      }

      delta += e.deltaY;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => (delta = 0), 150);

      if (Math.abs(delta) < SCROLL_THRESHOLD) return;
      delta = 0;
      go(dir);
    };

    let startY = 0;
    let startedAtTop = false;
    let startedAtBottom = false;

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startedAtTop = atTop();
      startedAtBottom = atBottom();
    };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = startY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 80) return;
      const dir = diff > 0 ? 1 : -1;
      // Only change pages if the gesture began at the relevant edge
      if (dir === 1 && !startedAtBottom) return;
      if (dir === -1 && !startedAtTop) return;
      go(dir);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      clearTimeout(resetTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [location.pathname, navigate]);

  useEffect(() => () => clearTimeout(lockTimer.current), []);

  // After the old page has finished exiting, position the new one:
  // top when going forward, bottom when going back.
  const handleExitComplete = () => {
    if (direction === 1) {
      window.scrollTo(0, 0);
    } else {
      requestAnimationFrame(() =>
        window.scrollTo(0, document.documentElement.scrollHeight),
      );
    }
  };

  return (
    <div>
      <Navbar />
      <main className="overflow-hidden">
        <AnimatePresence
          mode="wait"
          custom={direction}
          onExitComplete={handleExitComplete}
        >
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: TRANSITION_MS / 1000, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default RootLayout;
