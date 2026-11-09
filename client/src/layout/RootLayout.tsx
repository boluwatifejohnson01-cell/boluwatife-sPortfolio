import React, { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Put your routes in the order you want them to scroll through
const PAGES = ["/", "/aboutme", "/myskills", "/myprojects", "/contact"];

const variants = {
  initial: (dir: number) => ({ opacity: 0, y: dir * 80 }),
  animate: { opacity: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, y: dir * -80 }),
};

const RootLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [direction, setDirection] = useState(1); // 1 = next, -1 = previous
  const locked = useRef(false);

  useEffect(() => {
    const index = PAGES.indexOf(location.pathname);
    if (index === -1) return; // not a scrollable page, do nothing

    const go = (dir: number) => {
      if (locked.current) return;
      const next = index + dir;
      if (next < 0 || next >= PAGES.length) return;

      locked.current = true;
      setDirection(dir);
      navigate(PAGES[next]);
      setTimeout(() => (locked.current = false), 1000); // ignore extra scrolls during the transition
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30) return; // ignore tiny trackpad movements
      go(e.deltaY > 0 ? 1 : -1);
    };

    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = startY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      go(diff > 0 ? 1 : -1); // swipe up = next page
    };

    window.addEventListener("wheel", onWheel);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [location.pathname, navigate]);

  return (
    <div className="">
      <Navbar />

      <main className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default RootLayout;
