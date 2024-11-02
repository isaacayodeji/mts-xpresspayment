import React from "react";

interface MainProps {
  title: string;
  data_aos1: string;
  data_aos2: string;
  text: string;
  img: string;
}

const Main: React.FC<MainProps> = ({
  data_aos1,
  data_aos2,
  title,
  text,
  img,
}) => {
  return (
    <div className="flex flex-col md:flex-row-reverse mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate">
      <div
        data-aos={data_aos1}
        data-aos-duration="3000"
        className="flex flex-col gap-3 justify-center w-[100%] md:w-[50%]"
      >
        <span className="text-[1.9rem] md:text-[2.25rem]  font-extrabold text-green-800">
          {title}
        </span>
        <span className="text-[1rem] md:text-[1.2rem] w-[100%] flex">
          {text}
        </span>
      </div>
      <div
        data-aos={data_aos2}
        data-aos-duration="3000"
        className="bg-[#89e993] h-[280px] w-[280px] md:h-[380px] md:w-[380px] rounded-[100%] p-5  m-auto md:m-0 flex items-center justify-center"
      >
        <img
          className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-[100%] object-cover"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Main;
