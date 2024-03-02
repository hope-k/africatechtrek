"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import { Lato, Raleway } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700", "800"] });
import Marquee from "react-fast-marquee";
import PaystackSvg from "../../../public/assets/speakers/paystack.svg";
import IremboSvg from "../../../public/assets/speakers/irembo.svg";
import ZiplineSvg from "../../../public/assets/speakers/zipline.svg";

const clashDisplay = localFont({
  src: "../../fonts/OTF/ClashDisplay-Variable.ttf",
  preload: true,
  display: "swap",
});
const RwandaEvent = () => {
  const itineraries = [
    {
      name: " day 1",
      title: "CEO Office Hours",
      description:
        "Meet CEOs and executives of Africa's leading technology companies, including Irembo, Zipline, SPENN, Kasha and more.",
    },
    {
      name: " day 2",
      title: "Zipline Deep-dive",
      description:
        "Visit the Zipline Distribution Centre where it all began. Learn how blood delivery is automated with drones at scale in Rwanda, Nigeria, Ghana, and Kenya. ",
    },
    {
      name: " day 3",
      title: "Paystack Deep-dive ",
      description: "Visit the Paystack Kigali HQ, and learn about the tech ",
    },
    {
      name: " day 4",
      title: "Gorilla Trek ",
      description:
        "See the famous Rwandan Mountain Gorillas, and enjoy the beautiful sites of Volcanoes National Park ",
    },
  ];

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/assets/AFRICA-TECH-TREK.pdf";
    link.download = "AFRICA-TECH-TREK.pdf";
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.18, // Adjust the stagger timing as needed
      },
    },
  };

  // Define the child variants for opacity
  const childVariants = {
    hidden: { opacity: 0, scale: 0.04 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "circOut",

        duration: 0.8,
      },
    },
  };

  return (
    <section className="pb-[20rem] w-full">
      <div className="w-full h-[67vh] sm:h-[80vh] relative ">
        <div className="w-full h-full ">
          <Image
            alt="Rwanda Event"
            className=" w-full h-full aspect-square brightness-[40%] object-cover  object-bottom"
            src="/images/rwandahero.jpg"
            layout="fill"
          />
        </div>
        <div className="absolute bottom-[10rem] left-[clamp(.2rem,5vw,5rem)]">
          <div
            className={`${clashDisplay.className} text-[clamp(1rem,7vw+2rem,7.256rem)] text-[#ccc]  leading-[clamp(0.8rem,3vw+1rem,3rem)] font-bold mt-10`}
          >
            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: "circOut" }}
              className="font-[400]"
            >
              Rwanda
            </motion.h1>
            <br />
            <motion.h1
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: "circOut" }}
            >
              Edition
            </motion.h1>
          </div>
        </div>
      </div>
      {/* itenery */}
      <div className="grid grid-cols-1 md:grid-cols-6 justify-items-center my-[2rem] w-full sm:w-[90%] mx-auto gap-[5rem] ">
        {/* first column */}
        <div className="  col-span-3">
          <div className=" leading-7 space-y-5 mx-[1rem] md:mx-0">
            <h1 className={`${lato.className}   uppercase font-semibold `}>
              <span className="text-[1.625rem] ">This</span> <br />{" "}
              <span className="text-[3rem] ] ">
                july <br />{" "}
                <span className={`${raleway.className} `}>2024</span>
              </span>
            </h1>

            <motion.div
              viewport={{ once: true }}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circInOut" }}
              className="space-y-3"
            >
              <h1
                className={`${raleway.className} font-[700] relative  text-xl`}
              >
                Network with Founders and CEOs of Africa&apos;s Leading
                Technology Companies
                <span className="bg-green-600 h-1 absolute bottom-[-5px] left-0 w-[5rem] rounded-full"></span>
              </h1>
              <p className={`${lato.className} font-[400]`}>
                Participants will be provided with a comprehensive view of
                Africa&apos;s tech and business ecosystem. This includes
                fostering connections, gaining industry insights, and
                appreciating Rwanda&apos;s natural wonders, all of which
                contribute to a unique and enriching experience.
              </p>
              <button
                onClick={downloadPDF}
                className="uppercase bg-[#128255] p-3 rounded-lg text-sm font-semibold text-white"
              >
                download brochure
              </button>
            </motion.div>
          </div>
        </div>
        {/* second column */}
        <div className="w-full col-span-3 ">
          <div className="grid w-full h-full grid-cols-2 grid-rows-2 gap-[2px] sm:gap-2 justify-items-center items-baseline">
            {itineraries.map((itinerary, index) => (
              <div
                key={index}
                className="max-w-[300px]  h-full p-4   flex flex-col justify-center"
              >
                <div
                  className={`${raleway.className} text-[#f4f3f3] font-[700] p-6 inset-0 bg-gradient-to-r from-[#3e863f] to-[#2ca45e] rounded-t-xl`}
                >
                  <h1 className="font-semibold uppercase">{itinerary.name}</h1>
                  <h2 className={` font-[400]`}>{itinerary.title}</h2>
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "200px", opacity: 1 }}
                  transition={{ duration: 0.75, ease: "circInOut" }}
                  className="bg-[#f2f2f2ad] p-[clamp(0rem,2vw,2rem)] rounded-b-xl max-h-[200px]"
                >
                  <p
                    className={`${lato.className} text-black font-[400] text-sm p-2 leading-5 md:text-[1rem] sm:p-0`}
                  >
                    {itinerary.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* who should attend */}
      <div className="grid grid-cols-1 md:grid-cols-6 justify-items-center mb-[5rem]  md:ml-[clamp(1rem,5vw,5rem)]  gap-[5rem] overflow-hidden">
        {/* first column */}
        <div className="   col-span-3">
          <div className=" leading-7 space-y-5 mx-[1rem]">
            <motion.div
              viewport={{ once: true }}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circInOut" }}
              className="space-y-3"
            >
              <h1
                className={`${raleway.className} font-[700] relative mb-2  text-xl capitalize`}
              >
                who should attend africa tech trek
                <span className="bg-green-600 h-1 absolute bottom-[-5px] left-0 w-[5rem] rounded-full"></span>
              </h1>
              <p className={`${lato.className} font-[400]`}>
                Africa Tech Trek is tailored for entrepreneurs seeking market
                insights, companies aiming to expand their reach, and investors
                exploring promising opportunities. Our diverse participants
                include startup founders, corporate executives, and venture
                capitalists, ensuring a dynamic mix of perspectives throughout
                the journey. Expressions of interest are required prior to 22
                May 2024.
              </p>
              <div className={`text-[#128255] font-[700] ${lato.className}`}>
                *Note that we have limited the size to between 10 and 20 people.
              </div>
            </motion.div>
          </div>
        </div>
        {/* second column */}
        <div className="w-full col-span-3 ">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "circInOut" }}
            className="relative  h-[200px] mb-2 mx-1 md:mx-0"
          >
            <Image
              alt="Rwanda Event"
              className="  h-full  aspect-square origin-right rounded-xl md:rounded-none    brightness-[80%] object-cover md:rounded-l-xl  object-left "
              src="/images/whoshouldattend.png"
              layout="fill"
            />
          </motion.div>
          <div className="flex flex-col mx-[1rem] sm:mx-0 sm:flex-row  min-h-[20rem] sm:w-full">
            <div
              className={`${raleway.className} bg-[#5092A7] rounded-t-xl rounded-b sm:rounded-none  md:rounded-l-xl md:px-[3rem] p-4 flex flex-row md:flex-col justify-between md:justify-center  text-white`}
            >
              <h1 className="uppercase text-lg font-normal whitespace-nowrap">
                total cost
              </h1>
              <h1 className={` font-[700] text-xl`}>$15,000</h1>
              <h1 className="capitalize font-light">(tax exclusive)</h1>
            </div>

            <div
              className={`${lato.className} flex flex-col justify-center  mx-4 pt-2 `}
            >
              <p>
                The participation fee for Africa Tech Trek - Rwanda Edition
                includes accommodation and all meals. The cost does not include
                flights or travel insurance. 
              </p>
              <br />
              <p className="text-[#118255]">
                60% of the fee will be retained by the Akori Group in the event
                of cancellation by a participant within two weeks of the start
                of the program.100% of the fee will be retained if cancellation
                takes place less than one week before the start date.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* accommodation */}
      <motion.div
        viewport={{ once: true }}
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 md:ml-[clamp(1rem,5vw,5rem)] gap-[4rem]  "
      >
        <div className="space-y-3  mx-[1rem] ">
          <div
            className={`${raleway.className} font-[700]  capitalize space-y-3`}
          >
            <h1 className="relative text-xl">
              your accommodation
              <span className="bg-green-600 h-1 absolute bottom-[-5px] left-0 w-[5rem] rounded-full"></span>
            </h1>
            <h2 className="font-[800]">
              Radission Blu Hotel & Convention Centre, Kigali
            </h2>
            <h3 className="text-[#AAAAAA]">
              #1 Highest Rated of 1,182 places in Rwanda
            </h3>
          </div>
          <p className={`${lato.className} font-[400]`}>
            Nestled in the heart of Rwanda, the Radisson Blu hotel in Kigali
            offers a luxurious escape surrounded by lush landscapes. Enjoy the
            perfect blend of modern comfort and captivating views. Savour
            upscale dining experiences and immerse yourself in the scenic charm
            that defines Rwanda&apos;s beauty. Radisson Blu invites you to
            unwind and explore the best of both luxury and nature in this
            African gem.
          </p>
        </div>
        <div>
          <Image
            alt="Rwanda Event"
            className=" w-full h-full rounded-xl sm:rounded-none aspect-auto brightness-[80%] object-cover md:rounded-l-xl  object-bottom"
            src="/images/accomodation.jpg"
            layout="fill"
          />
        </div>
      </motion.div>

      {/* Speakers */}

      <div className="bg-gray-800 w-full pt-10 pb-20 flex flex-col items-center my-3">
        <h1
          className={`mb-10 text-white uppercase ${clashDisplay.className} font-[500] relative`}
        >
          Speakers
          <span className="bg-green-600 h-[2px] absolute bottom-[-5px] left-0 w-[5rem] rounded-full"></span>
        </h1>

        <Marquee>
          <div className=" flex items-center w-full justify-around space-x-[clamp(4rem,5vw,5rem)] flex-row">
            <div className="relative w-[clamp(10rem,15vw,15rem)] h-24">
              <Image
                src={"/assets/speakers/zipline.svg"}
                alt="Zipline"
                layout="fill"
              />
            </div>{" "}
            <div className="relative w-[clamp(10rem,15vw,15rem)] h-24">
              <Image
                src={"/assets/speakers/paystack.svg"}
                alt="Paystack"
                layout="fill"
              />
            </div>{" "}
            <div className="relative w-[clamp(10rem,15vw,15rem)] h-24">
              <Image
                src={"/assets/speakers/irembo.svg"}
                alt="Irembo"
                layout="fill"
              />
            </div>{" "}
            <div className="relative w-[clamp(10rem,15vw,15rem)] h-24">
              <Image
                src={"/assets/speakers/kasha.png"}
                alt="Kasha"
                layout="fill"
              />
            </div>{" "}
            <div className="relative w-[clamp(10rem,15vw,15rem)] h-24">
              <Image
                src={"/assets/speakers/spenn.png"}
                alt="Spenn"
                layout="fill"
              />
            </div>{" "}
          </div>
        </Marquee>
      </div>

      {/* WHATS INCLUDDED */}
      <div className=" grid grid-cols-1 md:grid-cols-6 justify-items-center my-[2rem] w-full sm:w-[90%] mx-auto gap-[5rem]">
        <div className="space-y-3 col-span-3 mx-[1rem] ">
          <div
            className={`${raleway.className} font-[700]  capitalize space-y-3`}
          >
            <h1 className="relative text-xl text-green-600 capitalize">
              what is included?
              <span className="bg-green-600 h-1 absolute bottom-[-5px] left-0 w-[5rem] rounded-full"></span>
            </h1>
          </div>
          <p className={`${lato.className} font-[400]`}>
            Then don&apos;t miss this opportunity to join Africa Tech Trek -
            Rwanda Edition, a 4-day tour that will take you to the most
            innovative and inspiring places in the country. You will meet the
            entrepreneurs, investors and leaders who are shaping the future of
            Africa, learn about the latest technologies and solutions that are
            solving real-world problems, and experience the beauty and diversity
            of Rwanda&apo;s wildlife and landscapes. This is a
            once-in-a-lifetime chance to connect, learn and have fun with
            like-minded people who share your passion for technology and social
            impact.
          </p>
        </div>
        <div className="col-span-3 w-full h-full ">
          {/* whats included container */}

          <motion.div
            className="grid mx-2 sm:mx-0 h-full grid-cols-2 grid-rows-2 gap-[2px] justify-items-center items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
          >
            {/* whats included item */}
            <motion.div
              className="px-2 flex flex-col items-center  py-4 text-center bg-[#f2f2f2ad] rounded-xl"
              variants={childVariants}
            >
              <div className="relative w-12 h-14  rounded-xl  ">
                <Image
                  alt="Rwanda Event"
                  className=" w-full stroke-red-500 h-full aspect-square p-1 brightness-[40%] object-cover  object-bottom"
                  src="/assets/icons/house.svg"
                  layout="fill"
                />
              </div>
              <h1 className={`${raleway.className} font-semibold mb-1`}>
                Housing accomodation
              </h1>
              <p className={`${lato.className} max-w-[23ch]`}>
                Enjoy the perfect blend of modern comfort and captivating views
                at Rwanda&apos;s leading hotels
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="px-2 flex flex-col items-center  py-4 text-center bg-[#f2f2f2ad] rounded-xl"
            >
              <div className="relative w-12 h-12  rounded-xl  ">
                <Image
                  alt="Rwanda Event"
                  className=" w-full h-full aspect-square p-1 brightness-[40%] object-cover  object-bottom"
                  src="/assets/icons/transportation.svg"
                  layout="fill"
                />
              </div>
              <h1 className={`${raleway.className} font-semibold mb-1`}>
                Transportation & Logistics
              </h1>
              <p className={`${lato.className} max-w-[23ch]`}>
                Professional drivers and vehicles with be provided for the full
                duration of the trip, to ensure a seamless experience.
              </p>
            </motion.div>
            <motion.div
              className="px-2 flex flex-col items-center  py-4 text-center bg-[#f2f2f2ad] rounded-xl"
              variants={childVariants}
            >
              <div className="relative w-12 h-12  rounded-xl  ">
                <Image
                  alt="Rwanda Event"
                  className=" w-full h-full aspect-square p-1 brightness-[40%] object-cover  object-bottom"
                  src="/assets/icons/guide.svg"
                  layout="fill"
                />
              </div>
              <h1 className={`${raleway.className} font-semibold mb-1`}>
                Professional Guides
              </h1>
              <p className={`${lato.className} max-w-[23ch]`}>
                With well trained and proffesional local guides, you will be
                treated with the best services you can get in Rwanda. Making
                your stay an unforgettable experience{" "}
              </p>
            </motion.div>
            <motion.div
              className="px-2 flex flex-col items-center  py-4 text-center bg-[#f2f2f2ad] rounded-xl"
              variants={childVariants}
            >
              <div className="relative w-12 h-12 rounded-xl  ">
                <Image
                  alt="Rwanda Event"
                  className=" w-full h-full aspect-square p-1 brightness-[40%] object-cover  object-bottom"
                  src="/assets/icons/secure.svg"
                  layout="fill"
                />
              </div>
              <h1 className={`${raleway.className} font-semibold mb-1`}>
                Safety Assurance
              </h1>
              <p className={`${lato.className} max-w-[23ch]`}>
                Your well-being is our utmost priority. We meticulously ensure
                all necessary safety measures are in place. Explore with
                confidence and peace of mind{" "}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RwandaEvent;
