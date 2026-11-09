import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import javaLogo from "../assets/javascript-logo-javascript-icon-transparent-free-png.png";
import reactLogo from "../assets/reactjs_logo_icon_170805(1).png";
import nextLogo from "../assets/next.png";
import tailwindcssLogo from "../assets/tailwind logo.png";
import nodeJsLogo from "../assets/node js.png";
import gitLogo from "../assets/git-logo.png";

const MySkillsPage: React.FC = () => {
  return (
    <div className="mx-auto w-90 md:w-360 my-15 gap-15  md:mt-10 flex flex-col md:px-5 md:items-center md:pb-20">
      <div className="flex flex-col gap-0.5">
        <p className="text-[#1f0000] font-meduim text-[14px] md:text-[16px] tracking-tight uppercase">
          My Skills
        </p>
        <div className="relative">
          <h3 className="text-[#eb7e14] font-bold text-[20px] md:text-[24px]">
            Technologies I Master
          </h3>
          <span className="w-10 bg-[#1f0000] h-0.5 absolute -bottom-1.5 left-40 md:left-25" />
        </div>
      </div>

      <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-12">
        <div className="flex gap-2 md:gap-1 items-center">
          <img src={htmlLogo} alt="" className="w-12 md:w-22" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex w-full justify-between">
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                HTML
              </h4>
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                95%
              </h4>
            </div>
            <div className="w-70 h-1.5 md:h-2.5 bg-black rounded-2xl relative">
              <span className="bg-[#eb7e14] w-68 md:w-65 h-1.5 md:h-2.5 rounded-2xl left-0 absolute" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img src={cssLogo} alt="" className="w-12 md:w-22" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex w-full justify-between">
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                CSS
              </h4>
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                90%
              </h4>
            </div>
            <div className="w-70 h-1.5 md:h-2.5 bg-black rounded-2xl relative">
              <span className="bg-[#eb7e14] w-65 h-1.5 md:h-2.5 rounded-2xl left-0 absolute" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img src={javaLogo} alt="" className="w-12 md:w-22" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex w-full justify-between">
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                JavaScript
              </h4>
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                85%
              </h4>
            </div>
            <div className="w-70 h-1.5 md:h-2.5 bg-black rounded-2xl relative">
              <span className="bg-[#eb7e14] w-62 h-1.5 md:h-2.5 rounded-2xl left-0 absolute" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img src={reactLogo} alt="" className="w-12 md:w-22" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex w-full justify-between">
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                React
              </h4>
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                80%
              </h4>
            </div>
            <div className="w-70 h-1.5 md:h-2.5 bg-black rounded-2xl relative">
              <span className="bg-[#eb7e14] w-62 h-1.5 md:h-2.5 rounded-2xl left-0 absolute" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img src={nextLogo} alt="" className="w-12 md:w-22" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex w-full justify-between">
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                Next JS
              </h4>
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                80%
              </h4>
            </div>
            <div className="w-70 h-1.5 md:h-2.5 bg-black rounded-2xl relative">
              <span className="bg-[#eb7e14] w-62 h-1.5 md:h-2.5 rounded-2xl left-0 absolute" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img src={tailwindcssLogo} alt="" className="w-12 md:w-22" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex w-full justify-between">
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                Tailwind CSS
              </h4>
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                90%
              </h4>
            </div>
            <div className="w-70 h-1.5 md:h-2.5 bg-black rounded-2xl relative">
              <span className="bg-[#eb7e14] w-65 h-1.5 md:h-2.5 rounded-2xl left-0 absolute" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img src={nodeJsLogo} alt="" className="w-12 md:w-22" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex w-full justify-between">
              <h4 className="text-[#1f0000] text-[13px] font-bold">Node JS</h4>
              <h4 className="text-[#1f0000] text-[13px] font-bold">80%</h4>
            </div>
            <div className="w-70 h-1.5 md:h-2.5 bg-black rounded-2xl relative">
              <span className="bg-[#eb7e14] w-60 h-1.5 md:h-2.5 rounded-2xl left-0 absolute" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img src={gitLogo} alt="" className="w-12 md:w-22" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex w-full justify-between">
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                Git
              </h4>
              <h4 className="text-[#1f0000] text-[13px] md:text-[16px] font-bold">
                80%
              </h4>
            </div>
            <div className="w-70 h-1.5 md:h-2.5 bg-black rounded-2xl relative">
              <span className="bg-[#eb7e14] w-60 h-1.5 md:h-2.5 rounded-2xl left-0 absolute" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkillsPage;
