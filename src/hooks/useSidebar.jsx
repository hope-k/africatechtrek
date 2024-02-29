"use client"

import { useContext, createContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    function toggleSidebar() {
        setSidebarOpen(!sidebarOpen);
    }

    const value = { sidebarOpen, setSidebarOpen, toggleSidebar };

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
}

