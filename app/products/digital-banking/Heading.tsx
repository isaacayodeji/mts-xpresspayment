import React from "react";
import { classNames } from "@/utils/classnames";

interface HeadingProps {
  title: string;
  text: string;
  img: string;
}

const Heading: React.FC<HeadingProps> = ({ title, text, img }) => {
  return (
    <section
      data-aos="fade-left"
      data-aos-duration="3000"
      className="xpsmonie flex flex-col md:flex-row mt-10 md:px-10 mx-auto justify-start items-center gap-10 md:h-[600px] h-[400px]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "600px", // Increase the height
        width: "90%", // Increase the width
      }}
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="flex flex-col justify-start gap-5 w-[100%] md:w-[50%]"
      >
        <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-green-900">
          {title}
        </h1>
        <p className="text-[1rem] md:text-[1.2rem] ">{text}</p>
        <button
          className={classNames(
            "font-medium p-[10px] h-[50px] rounded-lg text-white bg-green-800 w-[200px] text-[15px]"
          )}
        >
          Get Started
        </button>
      </div>
    </section>
    // <div className="flex flex-col md:flex-row mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate">
    //   <div
    //     data-aos="zoom-in"
    //     data-aos-duration="3000"
    //     className="flex flex-col gap-5 w-[100%] md:w-[50%] m-auto"
    //   >
    //     <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-green-900">
    //       {title}
    //     </h1>
    //     <p className="text-[1rem] md:text-[1.2rem] ">{text}</p>
    //     <button
    //       className={classNames(
    //         "font-medium p-[10px] h-[50px] rounded-lg text-white bg-green-800 w-[200px] text-[15px]"
    //       )}
    //     >
    //       Get Started
    //     </button>
    //   </div>
    //   <div
    //     data-aos="fade-left"
    //     data-aos-duration="3000"
    //     className="bg-[#89e993] h-[280px] w-[280px] md:h-[380px] md:w-[380px] rounded-[100%] p-5  m-auto md:m-0 flex items-center justify-center"
    //   >
    //     <img
    //       className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-[100%] object-cover"
    //       src={img}
    //       alt=""
    //     />
    //   </div>
    // </div>
  );
};

export default Heading;
