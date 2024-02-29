"use client";
import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { AnimatePresence } from "framer-motion";
import { usePathname, useParams } from "next/navigation";
import { useSidebar } from "@/hooks/useSidebar";


const MenuIcon = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className='sm:hidden relative z-[250]'>
      <div
        onClick={toggleSidebar}
        className=" p-1 w-9 h-[1.3rem] transition-all duration-500 ease-out flex sm:hidden relative z-[999] flex-col justify-between"
      >
        <div
          className={
            (sidebarOpen ? " rotate-45 top-2 " : " rotate-0 top-0 ") +
            " w-full h-[1px] bg-white  relative  transition-all duration-500 ease-out"
          }
        ></div>
        <div
          className={
            (sidebarOpen ? " -rotate-45 bottom-1  " : " rotate-0 bottom-0 ") +
            " w-full h-[1px] bg-white relative  transition-all duration-500 ease-out"
          }
        ></div>
      </div>
    </div>
  );
};

export default MenuIcon;
