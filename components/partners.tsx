"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";


interface Partner {
  id: number;
  logo: string;
}

const fetchData = async () => {
  const response = await fetch("/data/partners.json");
  const data = await response.json();
  return data;
};

export const Partners = () => {
  const { data } = useQuery<Partner[]>({
    queryKey: ["partners"],
    queryFn: fetchData,
  });

  if (!data) {
    return <div>Loading partners...</div>;
  }

  return (
    <>
      <div>
        <h1 className="text-center font-extrabold text-[26px] lg:text-[36px] text-green-800 mb-8 pt-8">
          Our Partners
        </h1>
      </div>
      {/* Mobile */}
      <div className="slider md:hidden">
        <div className="slide-track2 flex gap-[100px]">
          {data.map((x: Partner) => (
            <div className="slider2" key={x.id}>
              <img
                src={x.logo}
                height="100"
                width="250"
                alt=""
                className="h-[400px] w-[200px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* desktop */}
      <div className="max-md:hidden">
        <Marquee speed={50} direction="right" className="w-[auto] mx-auto ">
          <div className="image_wrapper">
            <img src={"/images/interswitch.jpeg"} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={"/images/fcmb.png"} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={"/images/sterling.png"} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={"/images/gtb.png"} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={"/images/up.jpeg"} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={"/images/nibss.jpeg"} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={"/images/xp-logo.png"} alt="" />
          </div>
        </Marquee>
      </div>
    </>
  );
};
