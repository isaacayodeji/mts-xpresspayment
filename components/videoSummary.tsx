import React from "react";
import { ImCreditCard, ImCompass, ImFileText, ImOffice } from "react-icons/im";


export const VideoSummary = () => {
  return (
    // <section className="videoContainer relative xl:h-[780px] lg:h-[680px] md:h-[580px] sm:h-[480px] ">
    <section className="videoContainer max-xl:h-[530px] max-lg:h-[440px] max-md:h-[270px] max-sm:h-[190px] pb-[12rem] md:pb-[26rem] lg:pb-[20rem] xl:pb-[16rem] 2xl:pb-[18rem]">
      <video
        loop
        muted
        className="absolute"
        autoPlay
        src={"/assets/agentVideo.mp4"}
      ></video>
      {/* <div className="overlay 2xl:h-[100%] xl:h-[93%] lg:h-[89%]  md:h-[80%] sm:h-[50%]"></div> */}
      <div
        // data-aos="fade-left"
        // data-aos-duration="3000"
        className=" content xl:justify-center items-start flex flex-col gap-4 w-full px-6 absolute "
      >
        <h1 className=" text-[0.8rem] sm:text-[2.1rem] md:text-[2.3rem]  lg:text-[3.131rem] xl:text-[3.3rem]  text-white font-extrabold md:w-[60%]">
          Creating Simple Financial Access For Everyone
        </h1>
        <div className="flex flex-col md:gap-2">
          <div className="flex gap-2 items-center">
            <ImCreditCard color="white" />{" "}
            <span className="font-bold md:text-lg sm:text-[0.8] text-[0.6rem]  text-orange-500">
              Card Withdrawals
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <ImCompass color="white" />{" "}
            <span className="font-bold md:text-lg sm:text-[0.8] text-[0.6rem] text-orange-500">
              Transfers
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <ImFileText color="white" />{" "}
            <span className="font-bold md:text-lg sm:text-[0.8] text-[0.6rem] text-orange-500">
              Bill Payments
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <ImOffice color="white" />{" "}
            <span className="font-bold md:text-lg sm:text-[0.8] text-[0.6rem] text-orange-500">
              Digital Banking
            </span>
          </div>
        </div>
        <div className=" bottom-0 ">
          <a href="https://forms.office.com/r/MGhMWkaUmC" target="_blank">
            <button className="bg-green-800 my-2 md:my-5 rounded-lg w-fit p-2 px-2 text-[0.6rem] md:text-lg text-white font-bold">
              Join our Agent network
            </button>
          </a>
          <h2 className="text-white text-[0.6rem] sm:text-[0.8rem] md:text-lg ">
            Be The Bank In Your Neigbourhood ...
          </h2>
        </div>
      </div>
    </section>
  );
};
