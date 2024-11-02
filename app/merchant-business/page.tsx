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
import {
  FaBolt,
  FaShieldAlt,
  FaNetworkWired,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { Testimonials } from "@/components/testimonials";
import { Partners } from "@/components/partners";

// import Reasons from "./reasons";
export const metadata = {
  title: "Business | Xpress MTS",
  description:
    "Instant Settlement, Zero Chargeback, Efficient Network, Safe Payments and User-Friendly",
};
const Page = () => {
  return (
    <>
      <main className="flex flex-col gap-7 mb-5 max-w-[1440px] m-auto">
        {/* <div className="flex justify-center items-center mt-5 -mb-3">
      <h1 className="text-[3rem] font-extrabold text-green-900">
        Xpress Business
      </h1>
    </div> */}

        <section
          data-aos="fade-left"
          data-aos-duration="3000"
          className="business flex flex-col md:flex-row mt-10 md:px-10 mx-auto justify-start items-center gap-10 md:h-[600px] h-[500px]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            // height: "600px",
            width: "90%", // Increase the width
          }}
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="flex flex-col justify-start gap-5 w-[100%] md:w-[50%]"
          >
            <h1 className="text-[2.3rem] md:text-[3rem]  font-extrabold text-orange-500">
              <p>Experience a new era of payment collection.</p>
            </h1>
            <p className="text-black md:text-white text-[1rem] md:text-[1.2rem] w-[100%] flex">
              Your Ultimate Merchant Collection Solution!
              <br />
              Enjoy secure, instant transactions for optimized cash flow.
            </p>
            <a href="https://forms.office.com/r/sVZLA5HRQP" target="_blank">
              <button
                className={classNames(
                  "font-medium p-[10px] h-[50px] rounded-lg text-white bg-green-800 w-[200px] text-[15px] mb-2"
                )}
              >
                Get Started
              </button>
            </a>
          </div>
        </section>

        {/* //! Why CHOOSE XPRESS BUSINESS */}
        <div className="flex justify-center items-center flex-col mt-2">
          <h1
            data-aos="slide-left"
            data-aos-duration="3000"
            className="md:text-[1.5rem] text-[1.3rem] font-extrabold text-green-800 "
          >
            Why choose Xpress
            <span className="text-orange-700"> Business</span> ?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-center ml-[10%] mr-[10%] mt-[60px]">
            {/* START */}
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                <FaBolt className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Instant Settlement
              </div>
              <div className="text-green-900">
                No more waiting for funds. Lightning-fast transactions keep your
                cash flow optimized.
              </div>
            </div>
            {/* STOP */}
            {/* <Reasons FaBolt={FaBolt} /> */}

            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                <FaShieldAlt className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Zero Chargeback
              </div>
              <div className="text-green-900">
                Focus on growth without financial worries. Our secure processes
                eliminate chargeback risks.
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                <FaNetworkWired className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Efficient Network
              </div>
              <div className="text-green-900">
                Reliable processing without delays or downtime. Count on our
                robust network.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 text-center ml-[10%] mr-[10%] mt-[20px]">
            {/* START */}
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center mt-4"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                <FaLock className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                Safe Payments
              </div>
              <div className="text-green-900">
                Advanced security with encryption and authentication protocols
                protect your data.
              </div>
            </div>
            {/* STOP */}
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-green-800 p-4 rounded-2xl">
                <FaUser className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-green-900">
                User-Friendly
              </div>
              <div className="text-green-900">
                Intuitive POS system suits all merchants, from tech-savvy to
                newcomers.
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate">
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="flex flex-col gap-3 justify-center w-[100%] md:w-[50%]"
            >
              <h1 className="text-[2.2rem] md:text-[3rem] font-extrabold text-green-900">
                <p>Xpress Business nurtures growth</p>
              </h1>
              {/* <p className="text-[1rem] md:text-[1.2rem] w-[100%] flex">
                 Join us for fast, secure collections.
             </p> */}
            </div>
            <div className="flex">
              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                className="bg-[#89e993] h-[280px] w-[280px] md:h-[380px] md:w-[380px] rounded-[100%] p-5  m-auto md:m-0 flex items-center justify-center"
              >
                <img
                  className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-[100%] object-cover"
                  src={"/images/coinplant.jpg"}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate">
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="flex flex-col gap-3 justify-center w-[100%] md:w-[50%]"
      >
        <h1 className="text-[3rem] font-extrabold text-green-900">
          <p>Xpress Business nurtures growth</p>
        </h1>
        <p className="text-[1rem] md:text-[1.2rem] w-[100%] flex">
          Join us for fast, secure collections.
        </p>
      </div>
      <div className="flex">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="bg-[#89e993] h-[280px] w-[280px] md:h-[380px] md:w-[380px] rounded-[100%] p-5  m-auto md:m-0 flex items-center justify-center"
        >
          <img
            className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-[100%] object-cover"
            src={"/images/coinplant.jpg"}
            alt=""
          />
        </div>
      </div>
    </div> */}
        </div>
      </main>
      <Partners />
      <Testimonials />
    </>
  );
};

export default Page;
