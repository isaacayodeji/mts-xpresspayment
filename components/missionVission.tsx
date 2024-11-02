import { Carousel } from "antd";
import React from "react";
import AgencyApp from "../public/images/agencyApp.webp";

export const MissionVision = () => {
  const contentStyle: React.CSSProperties = {
    height: "400px",
    // color: "#2e2c2c",
    lineHeight: "160px",
    // textAlign: "left",
    // background: "#eff7f2",
    fontSize: "2.5rem",
    display: "flex",
    alignItems: 'center',
    
  };
  return (
    <>
      {/* VISION */}
      {/* <main className="flex flex-col-reverse md:flex-row mt-10 md:mx-10 mx-auto justify-center items-center gap-10  aos-animinate">
        <div
          id="vision"
          data-aos="fade-right"
          data-aos-duration="3000"
          className="bg-green-100  w-[90%] md:w-1/2 md:max-w-[500px] rounded-full p-5 md:m-15 flex items-center justify-center"
          style={{ aspectRatio: "1 / 1" }}
        >
          <img
            className="w-full max-w-[600px] h-auto"
            src={"/images/vision.svg"}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="flex flex-col gap-7 md:w-1/2 items-center justify-center "
        >
          <span className="text-[36px] font-extrabold text-green-800">
            Our Vision
          </span>
          <span className="text-[1rem] text-center w-[90%] items-center ">
            To be the digital alternative financial services provider for all.
          </span>
        </div>
      </main> */}

      {/*  //? MISSION  */}
      {/* <main className="flex flex-col-reverse md:flex-row-reverse mt-10 md:mx-10 mx-auto justify-center items-center gap-10  aos-animinate">
        <div
          id="mission"
          data-aos="fade-right"
          data-aos-duration="3000"
          className="bg-green-100  w-[90%] md:w-1/2 md:max-w-[500px]  rounded-full p-5 md:m-15 flex items-center justify-center"
          style={{ aspectRatio: "1 / 1" }}
        >
          <img
            className="w-full max-w-[600px] h-auto"
            src={"/images/mission4.svg"}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="flex flex-col gap-7 md:w-1/2 items-center justify-center "
        >
          <span className="text-[36px] font-extrabold text-green-800">
            Our Mission
          </span>
          <span className="text-[1rem] text-center w-[80%] items-center ">
            To create value for our customers through unmatched reliability,
            innovation and transparency
          </span>
        </div>
      </main> */}

      {/* Vision & mission */}
      <main className="flex flex-col-reverse md:flex-row-reverse mt-10 md:mx-10 mx-auto justify-center items-center gap-10  aos-animinate">
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-around items-center gap-4">
          <div data-aos="fade-left" data-aos-duration="3000">
            <h2 className=" text-[30px] md:text-[36px] font-extrabold text-green-800 text-center">
              Our Vision
            </h2>
            <p className="text-[1rem] text-center w-[60%] items-center mx-auto ">
              To be the digital alternative financial services provider for all.
            </p>
          </div>

          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-full max-w-[600px] h-auto"
            src={"/images/vision.png"}
          />

          <div data-aos="fade-left" data-aos-duration="3000">
            <h2 className="text-[30px] md:text-[36px] font-extrabold text-green-800 text-center">
              Our Mission
            </h2>
            <p className="text-[1rem] text-center w-[60%] items-center mx-auto">
              To create value for our customers through unmatched Reliability,
              Innovation, Transparency and Empathy <br />
              <span className="font-semibold"> (R. I. T. E)</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
