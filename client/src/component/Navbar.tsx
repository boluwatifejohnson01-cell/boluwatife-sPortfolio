import React, { useEffect, useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/aboutme", label: "About" },
  { to: "/myskills", label: "My Skills" },
  { to: "/myprojects", label: "My Projects" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return; // only listen while the menu is open

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => setIsopen(false);

  return (
    <nav className="mt-2 relative w-90 md:w-360 rounded-[20px] mx-auto bg-white flex justify-between px-3 py-2 z-21 md:px-8 items-center shadow-xl">
      <div className="flex flex-col items-start gap-none">
        <p className="text-[#67011c] font-bold text-[14px] md:text-[20px] flex gap-1">
          Johnson <span className="text-[#0d0205]">Boluwatife</span>
        </p>
        <p className="text-[#0d0205] font-normal text-[12px] md:text-[16px] tracking-tight">
          Fullstack Developer
        </p>
      </div>

      <div ref={menuRef}>
        <div
          onClick={() => setIsopen((prev) => !prev)}
          className="flex flex-col justify-start items-start gap-1 group cursor-pointer md:hidden z-22"
        >
          {isOpen ? (
            <MdCancel className="text-[#0d0205] text-[30px]" />
          ) : (
            <GiHamburgerMenu className="text-[#0d0205] text-[30px]" />
          )}
        </div>

        <div
          className={`w-50 h-80 bg-[#0d0205]/80 rounded-[15px] md:bg-transparent md:w-150 md:justify-between md:items-baseline z-40 md:h-full flex flex-col md:flex-row gap-9 items-start origin-top-right absolute top-14 md:-top-2 right-0 px-2 pt-3 md:relative md:scale-x-100 ${
            isOpen ? "scale-x-100" : "scale-x-0"
          }`}
        >
          <div className="flex flex-col items-start gap-7 pt-4 md:flex-row md:gap-10 z-40">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-[14px] md:text-[16px] font-bold uppercase cursor-pointer group hover:text-[#eb7e14] relative ${
                    isActive
                      ? "text-[#eb7e14] md:text-[#eb7e14]"
                      : "text-white md:text-[#0d0205]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`hidden md:block w-full h-1 absolute left-0 -bottom-2 transition-transform origin-left ${
                        isActive
                          ? "bg-[#eb7e14] scale-x-100"
                          : "bg-white scale-x-0 group-hover:bg-[#eb7e14] group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `border rounded-[5px] px-2 py-2 md:px-4 md:py-2 cursor-pointer hover:bg-[#eb7e14] hover:border-[#eb7e14] ${
                isActive
                  ? "bg-[#eb7e14] border-[#eb7e14]"
                  : "border-white md:border-[#0d0205]"
              }`
            }
          >
            <p className="text-[14px] text-white md:text-[#0d0205] uppercase font-bold hover:text-black">
              Let's Talk
            </p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
