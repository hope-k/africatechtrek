"use client";
import React, { useState } from "react";
import Hero from "../Hero/Hero";
import Image from "next/image";
import { Lato, Raleway } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";
import RwandaEvent from "../RwandaEvent/RwandaEvent";
const clashDisplay = localFont({
  src: "../../fonts/OTF/ClashDisplay-Variable.ttf",
  preload: true,
  display: "swap",
});

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "700"] });

const HomePage = () => {
  const [active, setActive] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
  const faqs = [
    {
      question: "What is Africa Tech Trek?",
      answer:
        "The Africa Tech Trek - Rwanda edition is an emmersive event designed for entrepreneurs, investors, and business executives inte- rested in learning about the African technology ecosystem. We give participants access to a network of African technology lea- ders, transforming how business is done across the continent. ",
    },
    {
      question: "What can participants expect from the event? ",
      answer:
        "Attendees can anticipate networking sessions with potential investors, CEOs and entrepreneurs, engaging discussions on joint-ven- tures, and in-depth educational sessions to gain a competitive understanfing of the African technology ecosystem.",
    },
    {
      question: "Is the event open to international participants? ",
      answer:
        "Absolutely. Africa Tech Trek welcomes participants from across the globe to connect, collaborate, and explore the diverse opportunities within the African technology industry.",
    },
    {
      question: "How can I register for the event? ",
      answer:
        "Africa Tech Trek is an invite only trip. To express interest in attending, email us on info@akorigroup.com.      ",
    },
    {
      question: "Does Africa Tech Trek take place in other countries? ",
      answer:
        "Yes. Future editions of Afric Tech Trek will take place in Nigeria, Kenya, and Ghana, with additional locations currently under consideration. ",
    },
  ];


  return (
    <>
      <RwandaEvent />


      {/* testimonials */}

      <section className="bg-[#F0F0F0] w-full py-[5rem] my-[5rem] px-4">
        <div className="flex flex-col items-center">
          <div className=" w-[97%] mx-auto sm:max-w-[40%] text-center">
            <h1
              className={`${raleway.className} capitalize font-[700] text-[clamp(1.1rem,2vw+2rem,2rem)] mb-10`}
            >
              testimonials
            </h1>

            <quote className="w-full mx-2">
              &quot;<span className="font-semibold">Rwanda</span> isn&apos;t
              just rising, it&apos;s rocketing. The energy, the ideas, the{" "}
              <span className="font-semibold">can-do spirit</span> - it&apos;s
              infectious. It&apos;s a place where business isn&apos;t just about
              making money, it&apos;s about making a difference. It&apos;s like
              Singapore&apos;s futuristic skyline met Africa&apos;s heart and
              soul.&quot;
            </quote>
            <br />
            <span
              className={`flex justify-end font-[700] ${raleway.className}`}
            >
              - Robbie
            </span>
            <br />
            <span className={`flex italic justify-end font-light text-sm`}>
              Harvard Business School alum and private equity executive
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex my-[10rem] flex-col sm:flex-row px-4 sm:mx-[clamp(0rem,4vw+3rem,8rem)] gap-[5rem] md:gap-[10rem]">

        <div className="md:w-[40%] ">
          <h1 className={`text-[clamp(2.125rem,4vw,2.625rem)] leading-[clamp(1.1rem,2vw+1.5rem,2.5rem)] capitalize mb-4 font-[700] text-[#86A639] ${raleway.className}`}>
            frequently <br />
            asked questions
          </h1>
          <p className={`${lato.className} text-[16px]`}>
            Get answers to commonly asked questions about Africa Tech Trek,
            perks, and more.
          </p>
        </div>
        <div className="md:w-[60%]">
          {
            // faqs
            faqs.map((faq, idx) => (
              <div key={idx} className="flex flex-col w-full">
                <button
                  onClick={() => setActive(idx)}
                  className="text-start bg-[#F0F0F0] flex justify-between p-4 mb-1 rounded font-semibold"
                >
                  {faq.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={`w-6 h-6`}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: active === idx ? "auto" : 0 }}
                  transition={{ duration: 0.600, type: "spring", bounce: 0 }}
                  className={`overflow-hidden  bg-[#e3e3e3] rounded pl-4`}
                >
                  <div className="p-4 text-sm">{faq.answer}</div>
                </motion.div>
              </div>
            ))
          }
        </div>
      </section>

      {/* newsletter */}
      <section>
        <form
          onSubmit={handleSubmit}
          className="w-full text-black px-4 md:px-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.3,
              type: "spring",
              ease: "easeIn",
              bounce: 0,
            }}
            className="w-full flex flex-col items-center justify-center py-20"
          >
            <h1 className="uppercase mb-4 font-[400] text-[22px] md:text-[32px] poppins-font text-center w-full md:max-w-[55%]">
              SIGN UP FOR THE LATEST NEWS AND INSIGHTS FROM africa tech trek{" "}
            </h1>

            {submitted ? (
              <h1 className="text-[#003905] font-[500] mt-10 text-center  montserrat-font">
                Thank you! your submission has been received!
              </h1>
            ) : (
              <>
                <div
                  className={
                    " mb-6 space-x-4 mt-4 border-b border-black  flex flex-row items-center max-w-fit px-10 lg:max-w-[30rem] "
                  }
                >
                  <input
                    onChange={handleChange}
                    className=" bg-transparent focus-within:bg-transparent text-black h-[3rem] outline-none w-full pr-10"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <Image
                    width={24}
                    height={8}
                    className="transition-all duration-300 ease-in-out"
                    src="https://uploads-ssl.webflow.com/63ff35589070572b10295446/63ff40b9a75a0423828b9f3d_su-arrow.svg"
                    alt=""
                    priority
                  />
                </div>
                <button
                  disabled={loading || !email}
                  type="submit"
                  className="border transition-all duration-300 bg-[#D89C29] px-6 py-3 rounded-lg poppins-font text-white text-normal text-base uppercase"
                >
                  {loading ? "..." : "Subscribe now"}
                </button>
              </>
            )}
          </motion.div>
        </form>
      </section>
    </>
  );
};

export default HomePage;
