"use client";

import { usePathname } from "next/navigation";
import Header from "@/partials/header/Header";
import Footer from "@/components/FooterComponent/Footer";
import Chatbot from "@/components/Chatbot";
import ScrollToTop from "@/components/ScrollToTop";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}

      <main>{children}</main>

      {!isAdmin && <ScrollToTop />}
      {!isAdmin && <Chatbot />}
      {!isAdmin && <Footer />}
    </>
  );
}