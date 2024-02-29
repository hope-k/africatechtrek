"use client";

import React, { useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { motion } from "framer-motion";
const clashDisplay = localFont({
  src: "../../fonts/OTF/ClashDisplay-Variable.ttf",
  preload: true,
  display: "swap",
});
const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then(async (res) => {
        setLoading(false);
        const data = await res.json();
        if (data.message) {
          setSubmitted(true);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  return (
    <div className="w-full mt-[3rem] md:gap-[3rem] md:justify-around md:flex md:flex-row md:h-[50vh] h-[80vh] bg-[#000000] pt-[5rem] md:p-[4rem]  text-[#ccc] ">
      <div className="flex flex-row items-end md:items-start">
        <h1 className={`${clashDisplay.className} relative whitespace-nowrap block tracking-wide leading-6 text-[20px] uppercase  md:leading-7  lg:text-[30px]  pl-4 sm:pl-12 z-50` }>
          Africa <br />
          Tech Trek
        </h1>
        {/* line */}
        <div className="w-full ml-[20px] h-[1px] bg-white mt-4"></div>
      </div>

      <div className="w-full  md:gap-[3rem] md:justify-around md:flex md:flex-row  md:border-t ">
        {/* address and email */}
        <div className="flex flex-col sm:flex-row justify-between mt-8 px-4 ">
          <div className="flex flex-col space-y-4 mb-4 ">
            <p className=" text-[16px] font-[400] uppercase">
              Accra, Ghana <br /> JASMINE STREET <br />
              NORTH LEGON{" "}
            </p>
            <p className=" text-[16px] font-[400] ">
              <a
                className="hover:text-[#FFFFFFB3] lowercase"
                href="mailto:info@akorigroup.com"
              >
                info@akorigroup.com
              </a>
            </p>
          </div>
        </div>

        {/* links */}
        <div className="flex flex-col sm:flex-row justify-between mt-8 px-4 ">
          <div className="flex flex-col mb-4 uppercase">
            <Link href="/" className=" text-[16px] font-[400] ">
              Events
            </Link>
            <Link href="/services" className=" text-[16px] font-[400] ">
              Rsvp
            </Link>
          </div>
        </div>

        {/* newsletter */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-1 md:mt-2 px-4 pb-[2rem] poppins-font"
        >
          {submitted ? (
            <div className="flex flex-col space-y-4">
              <h1 className=" text-[14px] mt-6 mb-6 font-[400]  montserrat-font">
                Thank you! Your submission has been received!
              </h1>
            </div>
          ) : (
            <div className="flex flex-col space-y-4 mt-4 lg:mt-[2rem]">
              <h1 className=" text-[16px] font-[400] ">
                Subscribe to our newsletter
              </h1>
              <div
                className={
                  " space-x-4 mt-4 border-b border-white   flex flex-row items-center w-full"
                }
              >
                <input
                  disabled={loading}
                  onChange={handleChange}
                  className=" bg-transparent h-[3rem] pr-[6rem] outline-none w-full"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <button type="submit" disabled={!email || loading}>
                  {loading ? (
                    <span>...</span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* socials */}
          {/* <ul className='flex flex-row space-x-4 mt-5 '>
                        <li className='cursor-pointer'>
                            <img className='w-6 h-6' loading='eager' src="https://uploads-ssl.webflow.com/63ff35589070572b10295446/63ff41c5e9d8463980ab4e52_in.svg" alt="" />
                        </li>
                        <li className='cursor-pointer'>
                            <img className='w-6 h-6' loading='eager' src="/images/facebook.png" alt="" />
                        </li>

                    </ul> */}
        </form>
      </div>
    </div>
  );
};

export default Footer;
