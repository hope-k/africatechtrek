"use client";
import React from "react";
import localFont from "next/font/local";
import MenuIcon from "../MenuIcon/MenuIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/hooks/useSidebar";

const clashDisplay = localFont({
  src: "../../fonts/OTF/ClashDisplay-Variable.ttf",
  preload: true,
  display: "swap",
});

const Header = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const pathname = usePathname();
  const isWhitePage = pathname === "/rsvp" || pathname === "/events";
  const isRwanda = pathname === "/events/rwanda";

  return (
    <nav
      className={`${
        sidebarOpen || isRwanda ? "text-[#ccc]" : isWhitePage && "text-black"
      } bg-transparent  w-full py-4 text-[#ccc] px-[clamp(.2rem,7vw,10rem)] absolute  z-[100] `}
    >
      <div className="flex justify-between items-center ">
        <Link
          href="/"
          className={` font-[550] leading-[clamp(16px,3vw,25px)]  text-[clamp(1.1rem,2vw,1.4rem)] uppercase ${clashDisplay.className}`}
        >
          africa <br /> tech trek
        </Link>
        <div className=" items-center space-x-4 uppercase hidden sm:flex">
          <Link href="/" className="hover:text-teal-600">
            home
          </Link>
          <a href="/events" className="hover:text-teal-600">
            events
          </a>
          <a href="/rsvp" className="hover:text-teal-600">
            rsvp
          </a>
        </div>
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Header;
