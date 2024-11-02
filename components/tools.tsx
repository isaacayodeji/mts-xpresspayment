import React from "react";
import { IoColorFilterOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { GiEnlightenment } from "react-icons/gi";
import { GoVerified } from "react-icons/go";
import {FaMapPin} from 'react-icons/fa'

export const Tools = () => {
  return (
    <>
      <div className="h-[auto] aos-animinate">
        <div className=" mt-10">
          {/* CORE VALUES HEADER */}
          <div data-aos="fade-up" data-aos-duration="3000">
            <h1 className="text-center font-extrabold text-[30px] md:text-[36px] text-green-800">
              Core Values
            </h1>
            <h1 className="text-center text-[1rem] ">
              We're passionate about our values and a{" "}
              <span className="font-semibold">R. I. T. E</span> culture.
            </h1>
          </div>
          {/* CORE VALUES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center max-md:grid-cols-1 mt-12 md:px-20 gap-5 justify-around">
            <div data-aos="fade-right" data-aos-duration="3000">
              <div className="bg-green-100 m-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
                <div className="flex justify-center items-center mt-8">
                  <GoVerified className="w-[10rem] h-[5rem] text-slate-600" />
                </div>

                <span className="text-[24px] font-extrabold text-center text-green-800">
                  Reliability
                </span>
                <span className="text-center mx-auto">
                  We build trust in every step by delivering excellence.
                </span>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="3000">
              <div className="bg-green-100 mx-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
                <div className="flex justify-center items-center mt-8">
                  <FaRegLightbulb className="w-[10rem] h-[5rem] text-slate-600" />
                </div>
                <span className="text-[24px] font-extrabold text-green-800 text-center">
                  Innovation
                </span>
                <span className="text-center mx-auto ">
                  We create possibilities by leading the way with innovation and
                  vision
                </span>
              </div>
            </div>
            <div data-aos="zoom-out" data-aos-duration="4000">
              <div className="bg-green-100 mx-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
                <div className="flex justify-center items-center mt-8 ">
                  <IoColorFilterOutline className="w-[10rem] h-[5rem] text-slate-600" />
                </div>
                <span className="text-[24px] font-extrabold text-green-800 text-center">
                  Transparency
                </span>
                <span className="text-center mx-auto ">
                  We build trust, inspire confidence and fostering
                  accountability.
                </span>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="3000">
              <div className="bg-green-100 mx-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
                <div className="flex justify-center items-center mt-8">
                  <GiEnlightenment className="w-[10rem] h-[5rem] text-slate-600" />
                </div>
                <span className="text-[24px] font-extrabold text-green-800 text-center">
                  Empathy
                </span>
                <span className="text-center mx-auto">
                  We connect hearts, change lives, inspire understanding, and
                  ignite Change.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[auto] aos-animinate">
        <div className=" mt-10">
          {/* Branches HEADER */}
          <div data-aos="fade-up" data-aos-duration="3000">
            <h1 className="text-center  font-extrabold text-[36px] text-green-800">
              Our Branches
            </h1>
          </div>
          {/* Branches */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center max-md:grid-cols-1 mt-12 md:px-20 gap-5 justify-around">
            <div data-aos="fade-right" data-aos-duration="3000">
              <div className="bg-orange-400 m-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
                <div className="flex justify-center items-center mt-8">
                  <FaMapPin className="w-[6rem] h-[4rem] text-white" />
                </div>

                <span className="text-[24px] font-extrabold text-center text-green-800">
                  Abuja
                </span>
                <span className="text-center text-white mx-auto">
                  Plot 785, Herbert Macaulay Way, Central Business District
                  Abuja
                </span>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="3000">
              <div className="bg-orange-400 mx-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
                <div className="flex justify-center items-center mt-8">
                  <FaMapPin className="w-[6rem] h-[4rem] text-white" />
                </div>
                <span className="text-[24px] font-extrabold text-green-800 text-center">
                  River state
                </span>
                <span className="text-center text-white mx-auto">
                  AKC Plaza, 59, Market Road, Rumuomasi, PH, Rivers state.
                </span>
              </div>
            </div>
            <div data-aos="zoom-out" data-aos-duration="4000">
              <div className="bg-orange-400 mx-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
                <div className="flex justify-center items-center mt-8 ">
                  <FaMapPin className="w-[6rem] h-[4rem] text-white" />
                </div>
                <span className="text-[24px] font-extrabold text-green-800 text-center">
                  Ogun State
                </span>
                <span className="text-center text-white mx-auto">
                  11B ,Lafenwa Road, Opposite Precious Pharmacy, Lafenwa,
                  Abeokuta ,Ogun State.
                </span>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="3000">
              <div className="bg-orange-400 mx-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
                <div className="flex justify-center items-center mt-8">
                  <FaMapPin className="w-[6rem] h-[4rem] text-white" />
                </div>
                <span className="text-[24px] font-extrabold text-green-800 text-center">
                  Kano State
                </span>
                <span className="text-center text-white mx-auto">
                  Binta Danbappa Plaza, Suite No 5, No 20 Audu Bako Way, ,
                  Opposite Nation Plaza. Kano
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
