"use client";

import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SideBar from "@/components/SideBar/SideBar";
import { useSidebar } from "@/hooks/useSidebar";

export default function Layout({ children }) {
  const {sidebarOpen} = useSidebar();
  useEffect(() => {
    console.log(sidebarOpen);
  }, [sidebarOpen]);

  return (
    <div>
      <AnimatePresence>{sidebarOpen && <SideBar />}</AnimatePresence>
      {children}
    </div>
  );
}
