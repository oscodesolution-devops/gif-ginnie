import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div
        className={`w-full bg-primary dark:bg-primaryDark mt-12`}
      >
        {children}
      </div>
      <Footer />
      <WhatsAppButton/>
    </div>
  );
}
