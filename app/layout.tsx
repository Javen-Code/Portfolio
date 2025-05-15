"use client"; // make sure this is at the top if using Next.js app router
import { useEffect } from "react";
import { usePathname } from "next/navigation"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "antd/dist/reset.css";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); 
    document.body.style.minHeight = "100vh"; 
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>     
      </head>
      <body className="layout page-container">
        <div className="layout">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
