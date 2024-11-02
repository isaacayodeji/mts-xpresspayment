"use client";
import React from "react";
import { classNames } from "@/utils/classnames";
import Heading from "./Heading";
import Main from "./Main";
import { useQuery } from "@tanstack/react-query";
import { Testimonials } from "@/components/testimonials";
import { Partners } from "@/components/partners";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface HeadingProps {
  title: string;
  text: string;
  smallImg: string;
  bigImg: string;
}

interface MainProps {
  title: string;
  data_aos1: string;
  data_aos2: string;
  text: string;
  img: string;
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const fetchHeading = async () => {
  try {
    const response = await fetch("/data/xps-agent-data/heading.json");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong in heading");
  }
};

const fetchMain = async () => {
  try {
    const resp = await fetch("/data/xps-agent-data/main.json");
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong in main");
  }
};

const Page = () => {
  if (typeof window !== "undefined") {
    window.document.title = "XPS Agent | Xpress MTS";
  }

  const { data } = useQuery<HeadingProps[]>({
    queryKey: ["heading"],
    queryFn: fetchHeading,
  });

  const { data: mainData } = useQuery<MainProps[]>({
    queryKey: ["main"],
    queryFn: fetchMain,
  });

  // if (!data || !mainData) {
  //   return <div>Loading heading...</div>;
  // }

  if(!data || !mainData){
    return <div className="flex items-center justify-center w-full h-screen">
      <Spin className="text-green-600 " indicator={antIcon} />
      </div>
  }

  return (
    <>
      <main className="flex flex-col gap-7 mb-5 max-w-[1440px] m-auto ">
        {/* //! HEADING */}
        {data.map((heading, index) => (
          <Heading
            key={index}
            title={heading.title}
            text={heading.text}
            smallImg={heading.smallImg}
            bigImg={heading.bigImg}
          />
        ))}
        {/* //! Main */}
        {mainData?.map((main, index) => (
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
