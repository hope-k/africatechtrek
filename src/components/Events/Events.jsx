"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { Raleway } from "next/font/google";
const clashDisplay = localFont({
  src: "../../fonts/OTF/ClashDisplay-Variable.ttf",
  preload: true,
  display: "swap",
});
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Events = () => {
  const events = [
    {
      name: (
        <>
          {" "}
          <span className="font-[400]">rwanda</span> <br />{" "}
          <span className="font-[600]">edition</span>
        </>
      ),
      link: "/events/rwanda",
      content: {
        date: <span>july 2024</span>,
        text: "In the heart of KIGALI, find inspiration and relaxation while teaming up with global tech entrepreneurs.",
      },
    },
    {
      name: (
        <>
          <span className="font-[400]">nigeria</span> <br />
          <span className="font-[600]">edition</span>
        </>
      ),
      link: "/events/nigeria",
      content: {
        date: <span>coming soon</span>,
      },
    },
  ];
  return (
    <div className="pb-[15rem] w-full md:px-10  px-2  poppins-font">
      <div className="md:pt-[15rem] md:pb-[4rem] pt-[8rem] pb-[5rem]">
        <h1 className={`${clashDisplay.className} text-[32px] md:text-[48px] font-[400] uppercase`}>
            our <span className="font-[400] text-green-800">events</span>
        </h1>
      </div>

      <div className="text-black   pb-[15rem] md:mx-10 md:p-10 p-2 space-y-10">
        <div className="  flex justify-start  flex-col h-full   lg:flex-row gap-2 w-full sm:w-[clamp(0rem,60vw,60vw)] pb-[4rem] md:pb-[10rem] ">
          {events.map((event, idx) => (
            <Link
              href={event.link}
              className=" relative rounded-t-lg object-cover w-full sm:w-[361px] h-full "
              key={idx}
            >
              <div className="relative  w-full sm:w-[361px] h-[266px]">
                <div className="absolute rounded-[4px] inset-0 bg-gradient-to-b from-[#47c649] to-[#079643] opacity-75 z-[2]"></div>
                <div>
                  <Image
                    layout="fill"
                    alt="event"
                    src="/images/accomodation.jpg"
                    className="rounded-[4px] object-cover"
                  />
                </div>
                <div
                  className={`text-white z-[3] text-5xl absolute bottom-8 left-8 capitalize  ${clashDisplay.className}`}
                >
                  {event.name}
                </div>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: "150px", opacity: 1 }}
                transition={{ duration: 0.85, ease: "circOut" }}
                className="bg-white shadow-md text-black  p-10 rounded-b-lg "
              >
                <div className=" flex flex-row space-x-4">
                  <h1
                    className={`${raleway.className} text-[38px] leading-7 uppercase font-[500]`}
                  >
                    {event?.content?.date}
                  </h1>
                  <p className="text-sm">{event?.content?.text}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
