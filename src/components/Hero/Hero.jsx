"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { Lato, Raleway } from "next/font/google";
const clashDisplay = localFont({
  src: "../../fonts/OTF/ClashDisplay-Variable.ttf",
  preload: true,
  display: "swap",
});
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700", "800"] });

const Hero = () => {
  const bgImages = [
    "/images/bg1.jpg",
    "/images/bg2.jpg",
    "/images/bg3.jpg",
    "/images/bg4.jpg",
    "/images/bg5.jpeg",
    "/images/bg6.jpg",
  ];
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * bgImages.length);
    return bgImages[randomIndex];
  };
  const [currentImage, setCurrentImage] = useState(getRandomImage);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(getRandomImage);
    }, 6000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className=" w-full relative overflow-hidden h-[80vh] ">
      {/* new image system */}
      <AnimatePresence presenceAffectsLayout>
        <motion.div
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{
            scale: 1.5,
            opacity: 1,
          }} // You can adjust the scale value
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            opacity: { duration: 0.55 },
            filter: { duration: 5.55 },
          }}
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            overflow: "hidden",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            filter: "brightness(40%)",
            backgroundPosition: "center center",
            backgroundImage: `url(${currentImage})`,
          }}
          key={currentImage}
          exit={{
            transition: { duration: 1.5, ease: "easeIn" },
          }}
        ></motion.div>
      </AnimatePresence>

      {/* Hero Text */}
      <div className="flex flex-col w-full justify-center items-start h-full pl-[clamp(1rem,8vw,8rem)]  relative text-[#ccc] font-semibold uppercase ">
        <div className="text-[clamp(1rem,5vw+2rem,5rem)] leading-[clamp(3rem,4.5vw+2rem,4.5rem)]">
          <motion.h1
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .8, ease: "circOut" }}
            className={`${clashDisplay.className} `}
          >
            Africa <br />
          </motion.h1>
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "circInOut", delay: 0.4 }}
            className={`${clashDisplay.className} `}
          >
            tech trek
          </motion.h1>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .8, ease: "circOut" }}
            className={` flex flex-col md:flex-row  mt-1 md:mt-0  ${clashDisplay.className}`}
          >
            <span className="text-[clamp(2rem,3.625vw,3.625rem)] text-[#5092A7] font-[600]">
              rwanda edition
            </span>
            <h1 className="hidden sm:inline-block sm:ml-[clamp(2rem,2.5vw,2.5rem)] mt-[4rem] sm:mt-0 text-[#20141498] md:text-[#ccc] leading-5 relative md:top-[1rem] lg:top-[-1rem]">
              <span className={`${lato.className} font-[700] text-[58px]`}>
                july
              </span>
              <br />
              <span className={`${raleway.className} font-[800] text-[38px]`}>
                2024
              </span>
            </h1>
          </motion.div>
        </div>
        <button className="bg-[#128255] p-2 px-10 uppercase rounded-lg font-[400]">
          {" "}
          register now
        </button>
      </div>
    </div>
  );
};

export default Hero;
