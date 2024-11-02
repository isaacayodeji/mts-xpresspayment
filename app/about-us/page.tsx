"use client";
import React from "react";
import { classNames } from "@/utils/classnames";
import { Testimonials } from "@/components/testimonials";
import { Partners } from "@/components/partners";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";

interface Directors {
  id: number;
  animation: string;
  image: string;
  name: string;
  title: string;
}

const fetchData = async () => {
  const response = await fetch("/data/directors.json");
  const data = await response.json();
  return data;
};

const Page = () => {
  const { data } = useQuery<Directors[]>({
    queryKey: ["directors"],
    queryFn: fetchData,
  });
  if (!data) {
    return <div>Loading testimonies...</div>;
  }
  if (typeof window !== 'undefined') {
    window.document.title = "About us | Xpress MTS";
  }
  return (
    <>
      <Head>
        <title>About us | Xpress MTS</title>
        <meta
          name="description"
          content="Committed to building an ecosystem to enablepeople to digitally send and receive money with ease, whilst creating simple financial access for everyone"
        />
      </Head>
      <main className="flex flex-col gap-7 mb-5 ">
        <section
          data-aos="fade-left"
          data-aos-duration="3000"
          className="aboutus flex flex-col md:flex-row mt-10 md:px-10 mx-auto justify-start items-center gap-10"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px", // Increase the height
            width: "90%", // Increase the width
          }}
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="flex flex-col items-center justify-start gap-5 w-[100%] md:w-[50%]"
          >
            <h1 className="text-[3rem] font-extrabold text-black">
              About Us
            </h1>
            <p className="text-[1.25rem] max-w-[450px] break-words ">
              Committed to building an ecosystem to enablepeople to digitally
              send and receive money with ease, whilst creating simple financial
              access for everyone
            </p>
            <button
              className={classNames(
                "font-medium p-[10px] h-[50px] rounded-lg text-white bg-green-800 w-[200px] text-[15px]"
              )}
            >
              Join Xpress MTS
            </button>
          </div>
        </section>
        <div className="flex flex-col justify-center items-center gap-3  mr-[10%] ml-[10%]">
          <span className="text-green-900 font-extrabold text-[35px]">
            We’re here because of you.
          </span>
          <p className="text-[1.1rem] w-[100%] lg:w-[60%] text-justify">
            XpressMTS is a mobile payment company transforming Africa’s payment
            landscape. We are deconstructing all the complexities and myths in
            Africa’s payment systems and making it simple for Africans to send,
            access and use money even as they connect to other parts of the
            world.
          </p>
          <p className="text-[1.1rem] w-[100%] lg:w-[60%] text-justify ">
            Incorporated on 5th March 2021 as a subsidiary of Xpress Holdings
            Limited (of which Xpress Payment Solutions Limited, Africa’s leading
            fintech company, is also a subsidiary), XpressMTS is growing a
            network of small businesses as mobile money agents. We are creating
            tools for small businesses to manage money, sales and payments with
            ease.{" "}
          </p>
          <p className="text-[1.1rem] w-[100%] lg:w-[60%] text-justify ">
            Through the valuable service we render to society in our unwavering
            commitment to the Central Bank of Nigeria’s financial inclusion
            drive, we are increasing people’s ability to access funds anywhere
            and everywhere, thereby saving time, improving security, providing
            alternative means of saving money, expanding opportunities in
            financial services and broadening economic growth at the grassroots.{" "}
          </p>
          <p className="text-[1.1rem] w-[100%] lg:w-[60%] text-justify ">
            We are providing an enabling environment to facilitate mobile
            financial services to the underserved and the unbanked populace
            while redefining the payments experience for the banked through:
            Peer to Peer mobile payments solutions (P2P), Merchant Services and
            Retail Payments, Disbursement Services, among others.{" "}
          </p>
          <p className="text-[1.1rem] w-[100%] lg:w-[60%] text-justify ">
            We are providing an enabling environment to facilitate mobile
            financial services to the underserved and the unbanked populace
            while redefining the payments experience for the banked through:
            Peer to Peer mobile payments solutions (P2P), Merchant Services and
            Retail Payments, Disbursement Services, among others.{" "}
          </p>
          <p className="text-[1.1rem] w-[100%] lg:w-[60%] text-justify ">
            With a primary operational site and a functional disaster recovery
            site, we are able to ensure efficient system uptime and business
            continuity.
          </p>
        </div>
      </main>
      <Testimonials />
      <Partners />
      <div className="mt-7"></div>
    </>
  );
};
export default Page;
