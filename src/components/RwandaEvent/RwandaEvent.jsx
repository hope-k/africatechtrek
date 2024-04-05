"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Lato, Raleway } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
import Marquee from "react-fast-marquee";
import PaystackSvg from "../../../public/assets/speakers/paystack.svg";
import IremboSvg from "../../../public/assets/speakers/irembo.svg";
import ZiplineSvg from "../../../public/assets/speakers/zipline.svg";
import CountDown from "react-countdown";

const clashDisplay = localFont({
  src: "../../fonts/OTF/ClashDisplay-Variable.ttf",
  preload: true,
  display: "swap",
});

function Card({ day, title, content }) {
  return (
    <div className="min-w-fit rounded-md   items-center">
      <div className="sm:px-8 px-5 py-2 3xl:px-12 3xl:py-4 bg-gradient-to-r from-[#80B650] to-green-600 rounded-t-md flex items-center gap-4">
        <p className="text-white text-xl font-bold">Day {day}</p>
        <p className="text-gray-200 text-xs  3xl:text-lg text-left w-[60px]">
          {title}
        </p>
      </div>
      <div className="sm:px-4 px-3 py-2 3xl:px-[3rem] 3xl:py-[3rem]  bg-zinc-100 rounded-b-md">
        <p className="w-36 3xl:w-[15rem] text-sm 3xl:text-lg">{content}</p>
      </div>
    </div>
  );
}

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

  const speakers = [
    {
      name: "Zipline",
      url: "/assets/speakers/zipline.svg",
    },
    {
      name: "Paystack",
      url: "/assets/speakers/paystack.svg",
    },
    {
      name: "Irembo",
      url: "/assets/speakers/irembo.svg",
    },
    {
      name: "Kasha",
      url: "/assets/speakers/kasha.png",
    },
    {
      name: "Spenn",
      url: "/assets/speakers/spenn.png",
    },
  ];

  return (
    <section className="pb-[10rem] w-full ">
      <div className="w-full h-[85vh]  mb-[3rem] relative">
        <div className="bg-[url('/images/rwandahero.png')] absolute left-0 right-0 top-0 bottom-0 bg-no-repeat bg-right-bottom w-full bg-cover "></div>
        <div className="max-w-[80vw] mx-auto flex items-center h-full">
          <div className="relative z-[50] ">
            <h1
              className={`uppercase text-5xl mb-2  md:text-8xl text-white font-[600] ${clashDisplay.className}`}
            >
              africa
              <br /> tech trek
            </h1>
            <h2
              className={`uppercase text-4xl md:text-6xl text-[#128255] font-[600] ${clashDisplay.className}`}
            >
              rwanda edition
            </h2>
            <Link href="/rsvp">
              <button className="bg-[#5092A7] uppercase p-3 mt-3 rounded-lg text-sm font-semibold text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* itenery */}
      <div className="grid grid-cols-1 md:grid-cols-6 justify-items-center my-[5rem] w-full sm:w-[90%] mx-auto gap-[5rem] ">
        {/* first column */}
        <div className="  col-span-3  ">
          <div className=" leading-7  mx-[1rem] md:mx-0">
            <h1
              className={`${lato.className}   uppercase font-semibold mb-[4rem]`}
            >
              <span className="text-[1.625rem] ">This</span> <br />{" "}
              <span className="text-[3rem] ] ">
                july <br />{" "}
                <span className={`${raleway.className} `}>2024</span>
              </span>
            </h1>

            <motion.div
              viewport={{ once: true }}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0 }}
              className="space-y-5"
            >
              <h1
                className={`${raleway.className} font-[700] relative  text-xl`}
              >
                Network with Founders and CEOs of Africa&apos;s Leading
                Technology Companies
                <span className="bg-green-600 h-2 absolute bottom-[-8px] left-0  w-[5rem] rounded-full"></span>
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
        <div className="col-span-3 ">
          <div className="  flex items-center justify-center ">
            <div className="flex  flex-col items-start justify-center ">
              <div className="py-4 gap-2 flex sm:gap-4 items-end">
                <Card
                  day={1}
                  title="CEO Office Hours"
                  content="Meet CEOs and executives of Africa's leading technology companies including Irembo, Zipline, SPENN, Kasha and more."
                />
                <Card
                  day={3}
                  title="Paystack Deep-dive"
                  content="Visit the Paystack Kigali HQ, and learn about the tech company reshaping payments across Africa."
                />
              </div>

              <div className="flex gap-2  sm:pl-8 py-2 sm:gap-4 items-center">
                <Card
                  day={2}
                  title="Zipline Deep-dive"
                  content="Visit the Zipline Distribution Centre where it all began. Learn how blood delivery is automated with drones at scale in Rwanda, Nigeria, Ghana and Kenya."
                />
                <Card
                  day={4}
                  title="Gorilla Trek"
                  content="See the famous Rwandan Mountain Gorillas, and enjoy the beautiful sites of Volcanoes National Park."
                />
              </div>

              {/* <div className="bg-red-200 py-4 flex flex-col gap-4">
        <div className="pl-12">
          <Card
            day={2}
            title="Zipline Deep-dive"
            content="Visit the Zipline Distribution Centre where it all began. Learn how blood delivery is automated with drones at scale in Rwanda, Nigeria, Ghana and Kenya."
          />
        </div>
        <div className="pl-12">
          <Card
            day={2}
            title="Zipline Deep-dive"
            content="Visit the Zipline Distribution Centre where it all began. Learn how blood delivery is automated with drones at scale in Rwanda, Nigeria, Ghana and Kenya."
          />
        </div>
      </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Speakers */}
      <div className="bg-gradient-to-r from-[#86A639] to-[#118255] w-full pt-10 pb-20 flex flex-col items-center ">
        <h1
          className={`mb-10 text-gray-800 uppercase text-[clamp(1.2rem,1.7vw,1.725rem)] ${clashDisplay.className} font-[500] relative`}
        >
          Speakers
        </h1>

        <Marquee gradient={false} speed={20}>
          <div className=" flex items-center w-full justify-around space-x-[clamp(7.5rem,8vw,8rem)] flex-row">
            <div className="relative ml-10 w-[clamp(10rem,15vw,15rem)] h-24">
              <Image
                src={"/assets/speakers/zipline.svg"}
                alt="Zipline"
                layout="fill"
                priority={true}
              />
            </div>{" "}
            <div className="relative w-[clamp(7rem,8vw,8rem)] h-24">
              <Image
                src={"/assets/speakers/paystack.svg"}
                alt="Paystack"
                layout="fill"
                priority={true}
              />
            </div>{" "}
            <div className="relative w-[clamp(7rem,8vw,8rem)] h-24">
              <Image
                src={"/assets/speakers/irembo.svg"}
                alt="Irembo"
                layout="fill"
                priority={true}
              />
            </div>{" "}
            <div className="relative w-[200px] h-[80px]">
              <Image
                src={"/assets/speakers/kasha.png"}
                alt="Kasha"
                layout="fill"
                priority={true}
              />
            </div>{" "}
            <div className="relative w-[200px] h-[80px]">
              <Image
                src={"/assets/speakers/spenn.png"}
                alt="Spenn"
                layout="fill"
                priority={true}
              />
            </div>{" "}
          </div>
        </Marquee>
      </div>

      {/* WHATS INCLUDDED */}
      <div className=" flex flex-col sm:flex-row  justify-items-center w-full h-full relative">
        <div className="relative w-full h-[45vh] md:w-[50%] md:h-auto">
          <Image
            src="/images/included.png"
            alt='what"s included'
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className=" md:w-[50%] w-full h-full px-3 sm:px-[3rem] md:px-[5rem] mb-10 ">
          {/* whats included container */}
          <div className="my-16">
            <div className={`${raleway.className} font-[700]  capitalize mb-6`}>
              <h1 className="relative text-[clamp(2rem,2.5vw,2.5rem)] mb-3 leading-10 text-black capitalize">
                Join Us For An{" "}
                <span className="font-[800]">Unforgettable Adventure</span> In
                The{" "}
                <span className="font-[800]">Land Of A Thousand Hills </span>{" "}
              </h1>
            </div>
            <p className={`${lato.className} font-[400] `}>
              Don&apos;t miss this opportunity to join Africa Tech Trek - Rwanda
              Edition, a 4-day tour that will take you to the most innovative
              and inspiring places in the country. You will meet the
              entrepreneurs, investors and leaders who are shaping the future of
              Africa, learn about the latest technologies and solutions that are
              solving real-world problems, and experience the beauty and
              diversity of Rwanda&apos;s wildlife and landscapes. This is a
              once-in-a-lifetime chance to connect, learn and have fun with
              like-minded people who share your passion for technology and
              social impact.
            </p>
          </div>

          <div
            className={`${raleway.className} font-[700] text-green-700 text-3xl  capitalize mb-6`}
          >
            <h1>What is Included?</h1>
          </div>
          {/* whats included item */}
          <motion.div
            className={`${lato.className} grid mx-2 sm:mx-0 h-full grid-cols-2 gap-4 grid-rows-2 pb-[5rem]  justify-items-center items-start`}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
          >
            <motion.div
              className="px-4 flex flex-col w-full items-start  py-4 text-start bg-[#f2f2f2ad] rounded-xl"
              variants={childVariants}
            >
              <div
                className={`${raleway.className} font-semibold mb-1 justify-between w-full flex-row flex  `}
              >
                <h1>
                  Housing <br />
                  accomodation
                </h1>
                <span className="relative hidden sm:flex w-12 h-14  rounded-xl flex-col items-end  ">
                  <Image
                    alt="Rwanda Event"
                    className=" w-full  h-full aspect-square p-1 brightness-[40%] object-cover  object-bottom"
                    src="/assets/icons/house.svg"
                    layout="fill"
                  />
                </span>
              </div>
              <p className={`${lato.className} `}>
                Enjoy the perfect blend of modern comfort and captivating views
                at Rwanda&apos;s leading hotels
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="px-4 flex flex-col w-full items-start  py-4 text-start bg-[#f2f2f2ad] rounded-xl"
            >
              <div
                className={`${raleway.className} font-semibold mb-1 flex w-full justify-between`}
              >
                <span>
                  Transportation & <br />
                  Logistics
                </span>
                <div className="relative hidden sm:flex w-12 h-12  rounded-xl  ">
                  <Image
                    alt="Rwanda Event"
                    className=" w-full h-full aspect-square p-1 brightness-[40%] object-cover  object-bottom"
                    src="/assets/icons/transportation.svg"
                    layout="fill"
                  />
                </div>
              </div>
              <p className={`${lato.className} `}>
                Professional drivers and vehicles with be provided for the full
                duration of the trip, to ensure a seamless experience.
              </p>
            </motion.div>
            <motion.div
              className="px-4 flex flex-col w-full items-start  py-4 text-start bg-[#f2f2f2ad] rounded-xl"
              variants={childVariants}
            >
              <div
                className={`${raleway.className} font-semibold mb-1 flex justify-between w-full`}
              >
                <span>
                  Professional <br />
                  Guides
                </span>
                <div className="relative hidden sm:flex w-12 h-12  rounded-xl  ">
                  <Image
                    alt="Rwanda Event"
                    className=" w-full h-full aspect-square p-1 brightness-[40%] object-cover  object-bottom"
                    src="/assets/icons/guide.svg"
                    layout="fill"
                  />
                </div>
              </div>
              <p className={`${lato.className} `}>
                With well trained and proffesional local guides, you will be
                treated with the best services you can get in Rwanda. Making
                your stay an unforgettable experience{" "}
              </p>
            </motion.div>
            <motion.div
              className="px-4 flex flex-col w-full items-start  py-4 text-start bg-[#f2f2f2ad] rounded-xl"
              variants={childVariants}
            >
              <div
                className={`${raleway.className} flex w-full justify-between font-semibold mb-1`}
              >
                <span>
                  Safety
                  <br /> Assurance
                </span>
                <div className="relative hidden sm:flex w-12 h-12 rounded-xl  ">
                  <Image
                    alt="Rwanda Event"
                    className=" w-full h-full aspect-square p-1 brightness-[40%] object-cover  object-bottom"
                    src="/assets/icons/secure.svg"
                    layout="fill"
                  />
                </div>
              </div>
              <p className={`${lato.className} `}>
                Your well-being is our utmost priority. We meticulously ensure
                all necessary safety measures are in place. Explore with
                confidence and peace of mind{" "}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* who should attend */}
      <div className="flex  justify-items-center mb-[5rem]  bg-[#5092A7] mt-[-1px]  py-[7rem] gap-[5rem] ">
        <div className="sm:max-w-[80vw] max-w-[95vw] mx-auto flex flex-col md:flex-row ">
          {/* first column */}
          <div className="  flex-1 ">
            <div className=" leading-7 space-y-5 mx-1 sm:mx-[1rem]">
              <motion.div
                viewport={{ once: true }}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0 }}
                className="space-y-10 text-white"
              >
                <h1
                  className={`${raleway.className} font-[700] md:max-w-[20ch]    relative mb-2 text-2xl  sm:text-3xl capitalize`}
                >
                  who should attend
                  <br /> africa tech trek
                </h1>
                <p className={`${lato.className} font-[400] text-left `}>
                  Africa Tech Trek is tailored for entrepreneurs seeking market
                  insights, companies aiming to expand their reach, and
                  investors exploring promising opportunities. Our diverse
                  participants include startup founders, corporate executives,
                  and venture capitalists, ensuring a dynamic mix of
                  perspectives throughout the journey. Expressions of interest
                  are required prior to 22 May 2024.
                </p>
                <div className={`text-black font-[700] ${lato.className}`}>
                  *Note that we have limited the size to between 10 and 20
                  people.
                </div>
              </motion.div>
            </div>
          </div>
          {/* second column */}
          <div className="w-full flex-1 ">
            <div className="flex flex-col sm:mx-[1rem]  sm:flex-row  min-h-[20rem] sm:w-full">
              <div
                className={`${raleway.className} bg-[#68A3B6] mt-6 md:mt-0 rounded-t-lg rounded-b sm:rounded-none  md:rounded-l-lg md:px-[3rem] p-4 flex flex-row md:flex-col justify-between md:justify-center  text-white`}
              >
                <h1 className="uppercase text-lg font-normal whitespace-nowrap">
                  total cost
                </h1>
                <h1 className={` font-[700] text-xl sm:text-3xl`}>$15,000</h1>
                <h1 className="capitalize font-light">(tax exclusive)</h1>
              </div>

              <div
                className={`${lato.className} flex flex-col justify-center text-[15px] bg-white p-[2rem] py-[3.5rem] md:py-[5rem]  sm:mr-4 `}
              >
                <p>
                  The participation fee for Africa Tech Trek - Rwanda Edition
                  includes accommodation and all meals. The cost does not
                  include flights or travel insurance. 
                </p>
                <br />
                <p className="text-[#118255]">
                  60% of the fee will be retained by the Akori Group in the
                  event of cancellation by a participant within two weeks of the
                  start of the program.100% of the fee will be retained if
                  cancellation takes place less than one week before the start
                  date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* accommodation */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:ml-[clamp(1rem,5vw,5rem)] gap-[4rem]  ">
        <div className="space-y-5  mx-[1rem] ">
          <div
            className={`${raleway.className} font-[700]  capitalize space-y-6`}
          >
            <h1 className="relative text-3xl">
              your <br />
              accommodation
              <span className="bg-green-600 h-[5px] absolute bottom-[-.8rem] left-0 w-[5rem] rounded-full"></span>
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
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0 }}
          className="relative h-[400px] mx-1 "
          viewport={{ once: true }}
        >
          <Image
            alt="Rwanda Event"
            className=" w-full h-full rounded-xl sm:rounded-none  object-cover md:rounded-l-xl  object-center"
            src="/images/who-are-we.jpg"
            layout="fill"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default RwandaEvent;
