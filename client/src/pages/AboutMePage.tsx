import React from "react";
import { FaCalendar } from "react-icons/fa";
import { VscSmiley } from "react-icons/vsc";
import { IoIosTrophy } from "react-icons/io";

const AboutMePage: React.FC = () => {
  return (
    <div className="mx-auto w-90 md:w-360 mt-15 md:mt-30 flex flex-col gap-10 md:flex-row md:justify-between md:px-10 md:items-center md:pb-20">
      <div className="w-90 md:w-150 flex flex-col gap-5 md:gap-8 md:items-start">
        <div className="bg-[#1f0000] w-30 rounded-lg py-2">
          <p className="text-white uppercase font-bold text-[15px]">About me</p>
        </div>
        <h3 className="text-[20px] md:text-[24px] leading-6 md:leading-8 font-bold text-[#1f0000] px-4 md:ps-0 md:text-start md:pr-20">
          I'm Boluwatife Johnson, A Solution Enthusiast passionate about problem
          solving.
        </h3>
        <h5 className="text-[16px] leading-6 font-normal md:text-start md:pr-30">
          I’m a Biology Education graduate and a Full-Stack Developer with one
          year of hands-on experience. I’m passionate about technology,
          problem-solving, and building meaningful digital solutions. I’m
          enjoying every step of my journey into software development,
          continuously learning and improving my skills. I’m open to new
          opportunities, collaborations, and experiences that will help me grow
          while contributing value to a team and its projects.
        </h5>
      </div>

      <div className="flex flex-col gap-2 md:w-150 md:grid md:grid-cols-2 md:gap-15 relative">
        <div className="flex items-center gap-2">
          <div className="bg-[#1f0000] w-10 h-10 flex justify-center items-center">
            <FaCalendar className="text-white text-[18px]" />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[20px] font-semibold">4+</p>
            <p className="text-[14px] font-normal">Years Experience</p>
          </div>
        </div>

        <hr className="border border-[#1f0000]/80 w-130 hidden md:block absolute top-20" />
        <hr className="border border-[#1f0000]/80 w-80 hidden md:block absolute bottom-20 left-20 rotate-90" />

        <hr className="border border-[#1f0000]/80 w-50% md:hidden" />

        <div className="flex items-center gap-2">
          <div className="bg-[#1f0000] w-10 h-10 flex justify-center items-center">
            <p className="text-white text-[18px]">{"</>"}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[20px] font-semibold">6+</p>
            <p className="text-[14px] font-normal">Projects Completed</p>
          </div>
        </div>

        <hr className="border border-[#1f0000]/80 w-50% md:hidden" />

        <div className="flex items-center gap-2">
          <div className="bg-[#1f0000] w-10 h-10 flex justify-center items-center">
            <VscSmiley className="text-white text-[22px]" />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[20px] font-semibold">4+</p>
            <p className="text-[14px] font-normal">Happy Clients</p>
          </div>
        </div>

        <hr className="border border-[#1f0000]/80 w-50% md:hidden" />

        <div className="flex items-center gap-2">
          <div className="bg-[#1f0000] w-10 h-10 flex justify-center items-center">
            <IoIosTrophy className="text-white text-[22px]" />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[20px] font-semibold">100%</p>
            <p className="text-[14px] font-normal">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
