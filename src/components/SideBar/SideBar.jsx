import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useSidebar } from "@/hooks/useSidebar";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: "../../fonts/OTF/ClashDisplay-Variable.ttf",
  preload: true,
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500"],
});

const SideBar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const links = [
    { link: "/", name: "Home" },
    { link: "/events", name: "Events" },
    { link: "/rsvp", name: "Rsvp" },
  ];
  // const handleSubmit = (e) => {
  //     setLoading(true)
  //     e.preventDefault()

  //     fetch('/api/newsletter', {
  //         method: 'POST',
  //         body: JSON.stringify({ email }),
  //     }).then(async (res) => {
  //         setLoading(false)
  //         const data = await res.json()
  //         if (data.message) {
  //             setSubmitted(true)
  //         }

  //     }).catch((err) => {
  //         setLoading(false)
  //     })

  // }

  // const handleChange = (e) => {
  //     const email = e.target.value
  //     setEmail(email)
  // }
  return (
    <div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ duration: .8, ease: "circInOut" }}
        exit={{ x: "-100%", transition: { duration: .2 } }}
        className={
          " block w-full h-[100vh] bg-[#1d2b21] z-[50]  right-0 sm:hidden absolute poppins-font  left-0 "
        }
      >
        <div className="px-4 flex flex-col mt-[8rem]">
          <nav>
            <ul className="flex flex-col  h-full w-full space-y-4 font-[400] tracking-wide py-4">
              {links.map((link, index) => (
                <Link onClick={toggleSidebar} key={link.link} href={link.link}>
                  <li
                    className={`${raleway.className} text-[40px] cursor-pointer text-white hover:text-black/40 montserrat-font font-[200] tracking-tight`}
                  >
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          {/* newsletter
          <form onSubmit={handleSubmit} className="flex flex-col mt-16">
            {submitted ? (
              <h1 className="text-white text-[13px] font-[400] capitalize mb-2  montserrat-font">
                Thank you! Your submission has been received{" "}
              </h1>
            ) : (
              <>
                <h1 className=" text-[16px] font-[500] montserrat-font ">
                  Subscribe to our newsletter
                </h1>
                <div
                  className={
                    " space-x-4 mt-1 border-b  flex flex-row items-center w-full"
                  }
                >
                  <input
                    disabled={loading}
                    onChange={handleChange}
                    className={" bg-transparent h-[3rem] outline-none w-full"}
                    type="email"
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
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </>
            )}
          </form> */}
          {/* social icons */}
          {/* <div>
                        <ul className='flex flex-row space-x-4 mt-8'>
                            <li className='cursor-pointer'>
                                <img className='w-6 h-6' loading='eager' src="https://uploads-ssl.webflow.com/63ff35589070572b10295446/63ff41c5e9d8463980ab4e52_in.svg" alt="" />
                            </li>
                            <li className='cursor-pointer'>
                                <img className='w-6 h-6' loading='eager' src="/images/facebook.png" alt="" />
                            </li>


                        </ul>
                    </div> */}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: sidebarOpen ? 0 : "-100%", opacity: [1, 0] }}
        transition={{
          duration: .55,
          ease: "circInOut",
          opacity: { duration: 0.7 },
        }}
        exit={{ x: "-100%", transition: { duration: .2 } }}
        className={
          " bg-white block w-full h-[100vh] top-[0rem] right-0 sm:hidden absolute left-0 z-[40]"
        }
      ></motion.div>
    </div>
  );
};

export default SideBar;
