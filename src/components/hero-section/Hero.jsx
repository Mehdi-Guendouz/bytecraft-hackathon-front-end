import "./hero.css";
import keyboard from "../../assets/keyboard.svg";
import LogoClr from "../../assets/LogoClr.svg";
import lines from "../../assets/lines.svg";
import pcMonitor from "../../assets/pcMonitor.svg";
import CountDown from "./CountDown";
import { useState } from "react";

const Hero = () => {
  const [transform, setTransform] = useState("translate(-50%, -50%)");
  const handleMoouseIn = () => {
    setTransform("translate(-40%, -50%)");
  };
  const handleMoouseOut = () => {
    setTransform("translate(-50%, -50%)");
  };
  return (
    <div className=" hero-bg-gradient h-[100dvh]  ">
      <div className=" container mx-auto px-10 h-full relative">
        <div className=" h-full px-10 flex flex-col lg:flex-row  items-center  justify-around gap-10 pt-[100px] lg:pt-0">
          <div data-aos="fade-right" className="title  w-full lg:w-[50%]  ">
            <h2>inobyte hackathon</h2>
            <h1>
              <span>byte</span> by <span>byte</span> we, <br />{" "}
              <span className="innovate">innovate</span> the future
            </h1>
            <p className=" font-poppins text-xl text-gray-100 font-light my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              aperiam!
            </p>
            <button className=" font-goodtimes-rg text-xl font-bold py-4 px-6 rounded-3xl  bg-gradient-to-r from-mainGreen to-mainBlue transition-all  duration-300 drop-shadow-green hover:bg-gradient-to-r hover:from-mainBlue hover:to-mainPurple hover:drop-shadow-blue">
              register now
            </button>
          </div>
          <div
            data-aos="fade-left"
            onMouseOver={() => {
              handleMoouseIn();
            }}
            onMouseLeave={() => {
              handleMoouseOut();
            }}
            className=" hero-img w-[500px] mx-auto h-[400px] lg:w-[550px] lg:h-[450px] relative transition-all duration-500 hover:h-[480px] hover:w-[580px] "
          >
            <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-mainGreen  drop-shadow-green h-[80%] w-[68%] rounded-full"></div>
            <div
              id="pc-monitor"
              style={{ transform: transform }}
              className=" w-[250px] h-[250px] md:w-[300px] md:h-[300px] absolute top-[50%] left-[50%] transition-all duration-500"
            >
              <img src={pcMonitor} alt="" className=" h-full w-full" />
            </div>
            <div
              id="keyboard"
              className=" w-[300px] h-[150px] absolute bottom-0 left-0 "
            >
              <img src={keyboard} alt="" className=" h-full w-full" />
            </div>
            <div
              id="logo-clr"
              className=" logo-bounce w-[140px] h-[140px] bg-gray-500/40 backdrop-blur-[1px]  rounded-[32px] border-t-4 border-r-4  border-t-mainBlue/60 border-r-mainBlue/60 shadow-[20px_10px_10px_rgba(0,0,0,0.35)] p-6 skew-y-[24deg] absolute top-[50%] left-[40%] translate-x-[-50%] translate-y-[-50%]"
            >
              <img src={LogoClr} alt="" className=" h-full w-full" />
            </div>
            <div className=" absolute top-6 right-[50%] translate-x-[50%]">
              <CountDown />
            </div>
          </div>
        </div>
      </div>
      <div
        className=" z-0  absolute top-20 right-0 w-[300px] h-[300px] blur-sm"
        data-aos="fade-left"
      >
        <img src={lines} alt="" className=" w-full h-full" />
      </div>
      <div
        className=" z-0  absolute bottom-[-20%] left-0 w-[300px] h-[300px] blur-sm"
        data-aos="fade-right"
      >
        <img src={lines} alt="" className="rotate-[180deg] w-full h-full" />
      </div>
    </div>
  );
};


export default Hero;
