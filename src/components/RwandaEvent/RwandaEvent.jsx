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
import KashaPng from "../../../public/assets/speakers/kasha.png";
import SpennPng from "../../../public/assets/speakers/spenn.png";
import IncludedImage from "../../../public/images/included.svg";
import CountDown from "react-countdown";

// icons
import HouseIcon from "../../../public/assets/icons/house.svg";
import TransportationIcon from "../../../public/assets/icons/transportation.svg";
import GuideIcon from "../../../public/assets/icons/guide.svg";
import SecureIcon from "../../../public/assets/icons/secure.svg";


const clashDisplay = localFont({
  src: "../../fonts/OTF/ClashDisplay-Variable.ttf",
  preload: true,
  display: "swap",
});

function breakTitle(title) {
  const words = title.split(' ');
  const firstWord = words.shift();
  const restOfTitle = words.join(' ');
  return (
    <div className="flex flex-col">
      <p>{firstWord}</p>
      <p className="-mt-1">{restOfTitle}</p>
    </div>
  )
}

function Card({ day, title, content }) {
  return (
    <div className="flex flex-col w-[224px]">
      <div
        className="rounded-t-lg bg-gradient-to-r from-[#86A639] to-[#378F4A] px-6 py-3 flex items-center justify-start gap-2"
      >
        <p className={`${raleway.className} font-bold text-[26px] text-white`}>DAY {day}</p>
        <h1 className={`${raleway.className} font-normal text-[13px] text-white`}>
          {breakTitle(title)}
        </h1>
      </div>
      <div
        className="bg-[#F2F2F2] px-[25px] py-5 rounded-b-lg"
      >
        <p className={`${lato.className} font-normal text-base text-[#212121]`}>{content}</p>
      </div>
    </div>
  );
}

const RwandaEvent = () => {
  const itineraries = [
    {
      day: "1",
      title: "CEO Office Hours",
      content:
        "Meet CEOs and executives of Africa's leading technology companies, including Irembo, Zipline, SPENN, Kasha and more.",
    },
    {
      day: "2",
      title: "Zipline Deep-dive",
      content:
        "Visit the Zipline Distribution Centre where it all began. Learn how blood delivery is automated with drones at scale in Rwanda, Nigeria, Ghana, and Kenya.",
    },
    {
      day: "3",
      title: "Paystack Deep-dive ",
      content: "Visit the Paystack Kigali HQ, and learn about the tech company reshaping payments across Africa.",
    },
    {
      day: "4",
      title: "Gorilla Trek ",
      content:
        "See the famous Rwandan Mountain Gorillas, and enjoy the beautiful sites of Volcanoes National Park.",
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
      url: ZiplineSvg,
    },
    {
      name: "Paystack",
      url: PaystackSvg,
    },
    {
      name: "Irembo",
      url: IremboSvg,
    },
    {
      name: "Kasha",
      url: KashaPng,
    },
    {
      name: "Spenn",
      url: SpennPng,
    },
  ];

  const includedInfo = [
    {
      id: 1,
      title: 'Housing Accommodation',
      content: "Enjoy the perfect blend of modern comfort and captivating views at Rwanda's leading hotels",
      icon: HouseIcon,
    },
    {
      id: 2,
      title: 'Transportation & Logistics',
      content: "Enjoy the perfect blend of modern comfort and captivating views at Rwanda's leading hotels",
      icon: TransportationIcon
    },
    {
      id: 3,
      title: 'Professional Guides',
      content: "With well trained and professional local guides, you will be treated with the best services you can get in Rwanda. Making your stay an unforgettable experience",
      icon: GuideIcon
    },
    {
      id: 4,
      title: 'Safety Assurance',
      content: "Your well-being is our utmost priority. We meticulously ensure all necessary safety measures are in place. Explore with confidence and peace of mind",
      icon: SecureIcon
    },
  ]

  return (
    <section className="pb-[1rem] w-full ">
      <div className="w-full h-[100vh]  mb-[3rem] relative">
        <div className="bg-[url('/images/rwandahero.png')] absolute left-0 right-0 top-0 bottom-0 bg-no-repeat bg-right-bottom w-full bg-cover "></div>
        <div className="max-w-[80vw] mx-auto flex items-center h-full">
          <div className="relative items-start justify-center gap-4 flex flex-col z-[50] ">
            <h1
              className={`uppercase text-5xl mt-32  md:text-[108px] text-white font-semibold ${clashDisplay.className}`}
            >
              africa
              <br /> tech trek
            </h1>
            <h2
              className={`uppercase text-4xl md:text-[68px] text-[#128255] font-semibold ${clashDisplay.className}`}
            >
              rwanda edition
            </h2>
            <Link href="/rsvp">
              <button className="bg-[#5092A7] uppercase px-8 py-3 mt-4 rounded-lg text-sm font-bold text-white">
                <p className={`${lato.className} text-base`}>REGISTER NOW</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* itenery */}
      <div className="px-[96px] py-8">
        <div className="flex w-full">
          <div className="flex flex-col w-1/2">
            <div className="flex flex-col items-start">
              <h3 className={`${lato.className} font-extrabold text-[28px]`}>
                THIS
              </h3>
              <h1 className={`${lato.className} font-bold text-[64px] -mt-4 -ml-2`}>JULY</h1>
              <h3 className={`${raleway.className} font-bold text-5xl -mt-4`}>2024</h3>

            </div>
            <motion.div
              viewport={{ once: true }}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0 }}
              className="mt-9 flex flex-col gap-4"
            >
              <p className={`${raleway.className} font-bold text-xl max-w-[65%]`}>
                Network with Founders and CEOs of Africa&apos;s Leading Technology Companies
              </p>
              <p className={`${lato.className} font-normal text-lg max-w-[84%]`}>
                <span className={`${lato.className} font-semibold`}>Participants</span> will be provided with a comprehensive view of <span className={`${lato.className} font-semibold`}>Africa&apos;s tech</span> and business <span className={`${lato.className} font-semibold`}>ecosystem.</span> This includes fostering <span className={`${lato.className} font-semibold`}>connections, gaining industry insights,</span> and <span className={`${lato.className} font-semibold`}>appreciating Rwanda&apos;s natural wonders,</span> all of which contribute to a unique and enriching experience.
              </p>
            </motion.div>
            <button onClick={downloadPDF} className='rounded-lg px-8 py-3 bg-[#128255] w-fit mt-8'>
              <p className={`${lato.className} font-bold text-base text-white`}>DOWNLOAD BROCHURE</p>
            </button>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="w-full flex items-end gap-8">
              <Card {...itineraries[0]} />
              <Card {...itineraries[2]} />
            </div>
            <div className="mt-8 pl-11 w-full flex items-center gap-8">
              <Card {...itineraries[1]} />
              <Card {...itineraries[3]} />
            </div>
          </div>
        </div>
      </div>
      {/* Speakers */}
      <div className="bg-gradient-to-r from-[#86A639] to-[#118255] w-full pt-10 pb-24 flex flex-col items-center ">
        <h1
          className={`mb-6 ${raleway.className} font-bold text-[32px] text-black`}
        >
          Speakers
        </h1>

        <Marquee gradient={false} speed={80}>
          <div className="flex items-center w-full h-[60px] px-40 justify-center gap-24">
            {speakers.map((speaker) => (
              <Image
                key={speaker.name}
                src={speaker.url}
                alt={speaker.name}
                className="w-auto h-full"
                priority={true}
              />
            ))}
          </div>
        </Marquee>
      </div>

      {/* WHATS INCLUDDED */}
      <div className="flex gap-20 w-full h-full">
        <div className="w-1/2">
          <Image
            src={IncludedImage}
            alt='what"s included'
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="w-1/2 pt-20 pr-12">
          <p className={`${raleway.className} font-bold text-[40px] leading-tight`}>
            Join Us For An <span className='font-black'>Unforgettable Adventure</span> In The <span className="font-black">Land Of A Thousand Hills</span>
          </p>
          <p className={`mt-5 ${lato.className} font-normal text-sm max-w-[92%] leading-[1.5]`}>
            Don&apos;t miss this opportunity to join Africa Tech Trek - Rwanda Edition, a 4-day tour that will take you to the most innovative and inspiring places in the country. You will meet the entrepreneurs, investors and leaders who are shaping the future of Africa, learn about the latest technologies and solutions that are solving real-world problems, and experience the beauty and diversity of Rwanda&apos;s wildlife and landscapes. This is a once-in-a-lifetime chance to connect, learn and have fun with like-minded people who share your passion for technology and social impact.
          </p>
          <p className={`${raleway.className} font-black text-[32px] text-[#128255] my-10`}>
            What is included?
          </p>
          <div className="grid grid-cols-2 gap-10">
            {includedInfo.map((info) => (
              <div key={info.id} className="p-5 bg-[#F5F5F5]  flex flex-col rounded-lg gap-[10px]">
                <div className="flex items-center gap-4">
                  <Image
                    alt="included img"
                    src={info.icon}
                    className="w-10 h-10"
                    priority
                  />
                  <p
                    className={`${lato.className} font-bold text-sm max-w-[42%] text-[#212121]`}>
                    {info.title}
                  </p>
                </div>
                <p className={`${lato.className} font-normal text-sm text-[#212121]`}>
                  {info.content}
                </p>
              </div>
            ))}
          </div>
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
                className={`${lato.className} flex flex-col justify-center text-[15px] bg-white p-[2rem] py-[3.5rem] md:py-[5rem] rounded-r-lg  sm:mr-4 `}
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
