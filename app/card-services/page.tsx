import { classNames } from "@/utils/classnames";
import {
  ImDatabase,
  ImKey,
  ImEqualizer,
  ImCalendar,
  ImAddressBook,
  ImStatsDots,
  ImTerminal,
  ImShrink,
} from "react-icons/im";

import React from "react";
import { Partners } from "@/components/partners";
import { Testimonials } from "@/components/testimonials";
export const metadata = {
  title: "Services | Xpress MTS",
  description: "We offer Debit Cards and Bulk Disbursement",
};
const Page = () => {
  return (
    <>
      <main className="flex flex-col gap-7 mb-5 max-w-[1440px] m-auto ">
        {/* <div className="flex flex-col md:flex-row mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate">
      <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-green-900">
        Our Services
      </h1>
    </div> */}

        <section
          // data-aos="fade-left"
          // data-aos-duration="3000"
          className="mtsservices flex flex-col md:flex-row mt-10 md:px-10 mx-auto justify-start items-center gap-10 md:h-[600px] h-[400px]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            // height: "600px",
            width: "80%", // Increase the width
          }}
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="flex flex-col justify-start gap-5 w-[100%] md:w-[50%]"
          >
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-green-900">
              <p>Cards</p>
              <p className="text-orange-700">
                Empowering Seamless Transactions Across Platforms
              </p>
            </h1>
            <p className="text-[1rem] md:text-[1.2rem] ">
              Join our digital banking revolution today and experience the
              convenience and security of our debit cards for all your purchase
              and payment needs.
            </p>
            <button
              className={classNames(
                "font-medium p-[10px] h-[50px] rounded-lg text-white bg-green-800 w-[200px] text-[15px]"
              )}
            >
              Get Started
            </button>
          </div>
        </section>
        {/* //! DEBIT CARDS */}
        <div className="flex flex-col md:flex-row-reverse mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate ">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="flex flex-col gap-3 justify-center w-[100%] md:w-[50%]"
          >
            <span className="text-[2.25rem]  font-extrabold text-green-800">
              Debit Cards
            </span>
            <span className="text-[1rem] md:text-[1.2rem] w-[100%] flex">
              Embracing the digital banking revolution, our advanced banking
              platform provides versatile and feature-packed debit cards,
              crafted to elevate convenience and ensure secure transactions
              across multiple platforms. Offering both virtual and physical
              debit card choices, our banking customers can relish a smooth and
              secure purchasing and payment journey.
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="bg-[#89e993] h-[280px] w-[280px] md:h-[380px] md:w-[380px] rounded-[100%] p-5  m-auto md:m-0 flex items-center justify-center"
          >
            <img
              className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-[100%] object-cover"
              src={"/images/cards.jpg"}
              alt=""
            />
          </div>
        </div>
        {/* //! BULK AND STREAMING PAYMENTS */}
        <div className="flex flex-col md:flex-row mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate">
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="flex flex-col gap-5 w-[100%] md:w-[50%] m-auto"
          >
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-green-900">
              <p>Bulk Disbursement</p>

              <p className="text-orange-700 text-[2.5rem]">
                Streamlining Payments
              </p>
            </h1>
            <p className="text-[1.215rem]">
              Our innovative Bulk Disbursement platform is designed to
              revolutionize the way organizations handle large-scale payments,
              such as payroll activities and social intervention disbursements.
              With this cutting-edge solution, users can effortlessly make
              payments into multiple accounts on the go, ensuring convenience,
              efficiency, and accuracy.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="bg-[#89e993] h-[280px] w-[280px] md:h-[380px] md:w-[380px] rounded-[100%] p-5  m-auto md:m-0 flex items-center justify-center"
          >
            <img
              className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-[100%] object-cover"
              src={"/images/disbursment.png"}
              alt=""
            />
          </div>
        </div>

        {/* //! BULK DISPURSEMENT FEATURES */}

        <div className="flex justify-center items-center flex-col mt-2">
          <h1
            data-aos="slide-left"
            data-aos-duration="3000"
            className="text-[1.5rem] font-extrabold text-green-800 "
          >
            Our Bulk Disbursement
            <span className="text-orange-700"> features</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-center ml-[10%] mr-[10%] mt-[60px]">
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                <ImDatabase className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Seamless Account Management
              </div>
              <div className="text-green-900">
                Our platform provides a user-friendly interface that allows
                users to manage and organize beneficiary accounts efficiently.
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                {" "}
                <ImKey className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Swift and Secure Payments
              </div>
              <div className="text-green-900">
                Our platform enables users to initiate payments swiftly,
                eliminating the need for manual transactions or multiple
                transfers.{" "}
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center mt-4"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                {" "}
                <ImEqualizer className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Flexible Payment Options
              </div>
              <div className="text-green-900">
                Our platform supports various payment methods, including direct
                bank transfers, mobile money, and digital wallets, catering to
                the diverse needs and preferences of beneficiaries.{" "}
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                {" "}
                <ImCalendar className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Automated Payroll Activities
              </div>
              <div className="text-green-900">
                For organizations managing payroll activities, the Bulk
                Disbursement platform automates the payment process, simplifying
                salary disbursements to employees.{" "}
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center -mt-6"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                {" "}
                <ImAddressBook className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Social Intervention Disbursements
              </div>
              <div className="text-green-900">
                Our platform is well-suited for organizations involved in social
                intervention programs.{" "}
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center mt-4"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                {" "}
                <ImStatsDots className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Reporting and Analytics
              </div>
              <div className="text-green-900">
                Our platform offers comprehensive reporting and analytics tools,
                providing users with real-time insights into payment activities,
                transaction histories, and reconciliation reports.{" "}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 text-center ml-[10%] mr-[10%] mt-[20px]">
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                <ImTerminal className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Scalability and Customization
              </div>
              <div className="text-green-900">
                Our platform is built to accommodate organizations of all sizes,
                from small businesses to large enterprises.{" "}
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center mt-4"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                {" "}
                <ImShrink className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Integration Capabilities
              </div>
              <div className="text-green-900">
                Our seamlessly integrates with existing payroll systems,
                financial management software, and other relevant platforms,
                facilitating smooth data synchronization and eliminating the
                need for manual data entry.{" "}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Partners />
      <Testimonials />
    </>
  );
};

export default Page;
