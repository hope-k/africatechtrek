import React from "react";
import localFont from "next/font/local";
import MenuIcon from "../MenuIcon/MenuIcon";
import Link from "next/link";

const clashDisplay = localFont({
  src: "../../fonts/OTF/ClashDisplay-Variable.ttf",
  preload: true,
  display: "swap",
});

const Header = () => {
  return (
    <nav className=" bg-transparent  text-[#ccc] w-full py-4 px-[clamp(.2rem,7vw,10rem)] absolute  z-[100]">
      <div className="flex justify-between items-center ">
        <Link
          href="/"
          className={` font-[550] leading-[clamp(16px,3vw,25px)]  text-[clamp(1.1rem,2vw,1.4rem)] uppercase ${clashDisplay.className}`}
        >
          africa <br /> tech trek
        </Link>
        <div className=" items-center space-x-4 uppercase hidden sm:flex">
          <Link href="/" className="hover:text-gray-800">
            home
          </Link>
          <a href="/services" className="hover:text-gray-800">
            events
          </a>
          <a href="/contact" className="hover:text-gray-800">
            rsvp
          </a>
        </div>
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Header;
