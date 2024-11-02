import React from "react";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { classNames } from "../utils/classnames";
import footer from "../public/images/footer-cbn.svg";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="grid grid-rows-2 text-black border-t-2 border-gray-200 max-md:justify-start justify-center max-md:pl-5 pl-[10%] pr-[10%] ">
      <div className="flex gap-[70px] max-md:gap-[20px] mt-8 max-md:flex-col mb-8">
        <div className="flex flex-col">
          <span className="text-[20px] font-bold text-green-700">
            Connect with us
          </span>
          <div className="flex gap-4 mt-3">
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den">
              <TwitterLogoIcon
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"
                height={25}
                width={25}
                className="text-black"
              />
            </a>
            <a href="https://www.instagram.com/accounts/login/">
              <InstagramLogoIcon
                height={25}
                width={25}
                className="text-black"
              />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <LinkedInLogoIcon height={25} width={25} className="text-black" />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[20px] font-bold text-green-700">
            Head Office
          </span>
          <div className="flex flex-col">
            <span>5th Floor, 23, Oba Akinjobi Way</span>
            <span>GRA, Ikeja,</span>
            <span>Lagos Nigeria</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-[20px] font-bold text-green-700">
            Our Products
          </span>
          <div className="flex flex-col gap-2">
            <span>
              <Link className="text-black" href="/products/agency-banking">
                Agency banking
              </Link>
            </span>
            <span>
              <Link className="text-black" href="/products/digital-banking">
                Digital banking
              </Link>
            </span>
            <span>
              <Link className="text-black" href="/card-services">
                Card services
              </Link>
            </span>
            <span>
              <Link className="text-black" href="/merchant-business">
                Merchant business
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[20px] font-bold text-green-700">
            Resources
          </span>
          <div className="flex flex-col">
            <span>Cookies</span>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "border-t-2 border-gray-400 flex flex-row max-md:flex-col pt-5 justify-between max-md:justify-start max-md:gap-5"
        )}
      >
        <div className="bg-white rounded-xl h-[60px] w-[120px] max-md:hidden">
          <img src={"/images/logo.png"} alt="" className="object-fill" />
        </div>
        {/* Xpress MTS Limited is authorised and regulated by the Central Bank of
        Nigeria to offer banking services. Deposits are insured by the Nigerian
        Deposit Insurance Corporation (NDIC). */}
        <div className="w-[400px] max-md:w-full max-sm:text-[10px]">
          <img src={"/images/Cbn-license.svg"} alt="footer" />
          <span>
            Deposits are insured by the Nigerian Deposit Insurance Corporation
            (NDIC).
          </span>
          {/* <div className="flex items-center text-[10px]">
            <b className="flex items-center  flex-col lg:flex-row ">
              Xpress Payment Solutions Limited – Licensed by the
              <img
                className="w-[2rem] h-[2rem]"
                src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Central-Bank-of-Nigeria-CBN--900x0.png"
                alt=""
              />
            </b>
            <span className="font-bold">Central Bank of Nigeria</span>
          </div> */}
        </div>
        <div className="flex gap-4 items-start max-md:hidden">
          <GlobeIcon height={20} width={20} />
          <span>Nigeria</span>
        </div>
      </div>
    </footer>
  );
};
