"use client";
import React from "react";
import { classNames } from "@/utils/classnames";
import Heading from "./Heading";
import { useQuery } from "@tanstack/react-query";
import Main from "./Main";
import { Testimonials } from "@/components/testimonials";
import { Partners } from "@/components/partners";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const fetchHeadingMonie = async () => {
  try {
    const response = await fetch("/data/xps-monie-data/heading.json");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong in heading");
  }
};
const fetchMainMonie = async () => {
  try {
    const resp = await fetch("/data/xps-monie-data/main.json");
    const data = await resp.json();
    console.log("first", data);
    return data;
  } catch (error) {
    throw new Error("Something went wrong in main");
  }
};

interface HeadingProps {
  title: string;
  text: string;
  img: string;
}
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const Page = () => {
  const { data } = useQuery<HeadingProps[]>({
    queryKey: ["headingMonie"],
    queryFn: fetchHeadingMonie,
  });

  const { data: mainMonie } = useQuery<any>({
    queryKey: ["mainMonie"],
    queryFn: fetchMainMonie,
  });
  console.log(data);

  // if (!data) {
  //   return <div>Loading heading...</div>;
  // }
  // if (!mainMonie) {
  //   return <div>Loading heading...</div>;
  // }

  if(!data || !mainMonie){
 return <div className="flex items-center justify-center w-full h-screen">
      <Spin className="text-green-600 " indicator={antIcon} />
      </div>
  
  }
  console.log(data, "this is header");

  return (
    <>
      <main className="flex flex-col gap-7 mb-5 max-w-[1440px] m-auto">
        {/* //! HEADING */}
        {data?.map((heading, index) => (
          <Heading
            key={index}
            title={heading.title}
            text={heading.text}
            img={heading.img}
          />
        ))}
        {/* //! MAIN body */}
        {mainMonie?.map((main: any, index: any) => (
          <Main
            key={index}
            title={main.title}
            text={main.text}
            data_aos1={main.data_aos1}
            data_aos2={main.data_aos2}
            img={main.img}
          />
        ))}
      </main>
      <Partners />
      <Testimonials />
    </>
  );
};
export default Page;
