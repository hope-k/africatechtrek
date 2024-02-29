import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { SidebarProvider } from "@/hooks/useSidebar";
import Layout from "@/components/Layout/Layout";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Africa Tech Trek",
  description:
    "Africa Tech Trek is an immersive event designed for entrepreneurs, investors, and business executives interested in learning about the African technology ecosystem. We give participants access to a network of African technology leaders, transforming how business is done across the continent .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SidebarProvider>
          <Layout>
            <Header />
            {children}
            <Footer />
          </Layout>
        </SidebarProvider>
      </body>
    </html>
  );
}
