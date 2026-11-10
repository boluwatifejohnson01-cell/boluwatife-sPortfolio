import React from "react";
import myPic from "../assets/myPic.png";
import js from "../assets/javascript-logo-javascript-icon-transparent-free-png.png";
import reactpic from "../assets/reactjs_logo_icon_170805(1).png";
import cloudinarylogo from "../assets/cloudinary-icon-hz05evx1htrghud89kpab4.png";
import vscodeLogo from "../assets/Visual_Studio_Code_1.png";
import mongodbLogo from "../assets/mongodb-logo-png_seeklogo-481256.png";
import expressLogo from "../assets/express-js1720895488.logowik.com.png";
import useTypewriter from "../Hooks/useTypewriter";
import LogoCarousel from "../Hooks/LogoCarousel";
import { Link } from "react-router-dom";

const roles = [
  "Full Stack Developer",
  "MERN Developer",
  "Solution Enthusiast",
  "Problem Solver",
];

const HeroSection: React.FC = () => {
  const typedText = useTypewriter(roles);

  return (
    <header className="mx-auto w-90 md:w-360 h-full md:h-150 pt-15 py-5 flex flex-col md:flex-row items-center gap-25 md:justify-between md:px-40">
      <div className="flex flex-col items-center gap-10 px-16 md:px-0 z-15 md:w-150">
        <div className="flex flex-col gap-7 items-center md:items-start">
          <p className="animate-typewriter overflow-hidden whitespace-nowrap text-[14px] md:text-[18px] text-[#eb7e14] font-medium inline-block md:text-start">
            Hello I'm....
          </p>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h1 className="text-[#67011c] md:text-[50px] font-black text-[34px] leading-8 md:leading-15 animate-bounce-slow text-center md:text-start">
              Johnson <br />
              <span className="text-[#0d0205] ">Boluwatife</span>
            </h1>
            <h2 className="text-[#000000] font-bold text-[18px] md:text-[20px] text-start inline-block whitespace-nowrap">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
          </div>
          <p className="text-[#eb7e14] text-[16px] md:text-[20px] font-normal md:pe-60 text-center md:text-start">
            I build Exceptional, Innovative Digital Experiences for Businesses
            and Brands all around the World..
          </p>

          <div className="flex gap-3">
            <Link
              to="/myprojects"
              className="w-35 md:w-40 h-10 md:h-12 border border-[#eb7e14] rounded-[10px] flex items-center justify-center text-[14px] md:text-[16px] text-[#0d0205] cursor-pointer px-1 hover:bg-[#eb7e14] hover:text-white font-medium hover:border-none"
            >
              View My Projects
            </Link>
            <Link
              to="/contact"
              className="w-25 md:w-35 h-10 md:h-12 border border-[#1f0000] rounded-[10px] flex items-center justify-center  text-[14px] md:text-[16px] text-[#0d0205] cursor-pointer hover:bg-[#67011c] hover:text-white font-medium hover:border-none"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        <LogoCarousel
          slides={[
            <img
              src={cloudinarylogo}
              alt="Cloudinary"
              className="w-10 md:w-20"
            />,
            <img src={vscodeLogo} alt="VS Code" className="w-12 md:w-20" />,
            <img src={reactpic} alt="React" className="w-20 md:w-35" />,
            <img src={js} alt="JavaScript" className="w-10 md:w-20" />,
            <img src={expressLogo} alt="Express" className="w-10 md:w-20" />,
            <img src={mongodbLogo} alt="MongoDB" className="w-10 md:w-20" />,
          ]}
        />
      </div>

      <div className="z-21 w-60 h-60 md:w-100 md:h-100 rounded-full overflow-hidden">
        <div className="">
          <img src={myPic} alt="" className="w-full md:w-full" />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
