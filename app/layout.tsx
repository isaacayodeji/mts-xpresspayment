"use client";
import "./globals.css";
import "./scroll_animinate.css";
import "./radix.css";
import "aos/dist/aos.css";
//import { Mulish } from "next/font/google";
import { TopBar } from "@/components/topBar";
import { Footer } from "@/components/footer";
import { ReactQueryProvider } from "./ReactQueryProvider";
import SignIn from "../components/signIn";
import { getThemeConfig } from "@/components/theme.config";
import { useUrl } from "nextjs-current-url";
import BackToTop from "@/components/backToTop";
import { useEffect } from "react";
import { ConfigProvider } from "antd";
//import Head from "next/head";

//const mulish = Mulish({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { href: currentUrl } = useUrl() ?? {};
  // useEffect(() => {
  //   // Check if the current protocol is HTTP
  //   if (window.location.protocol === 'http:') {
  //     // Redirect to the HTTPS version of the same URL
  //     window.location.href = `https://${window.location.hostname}${window.location.pathname}${window.location.search}`;
  //   }
  // }, []);
  return (
    <ConfigProvider theme={getThemeConfig()}>
      <ReactQueryProvider>
        <html lang="en">
          <body>
            {/* Conditionally render TopBar and Footer */}
            {currentUrl?.includes("/signIn") ? (
              <section className="grid grid-rows-[68px_auto_0.5fr] min-h-[100svh] text-[14px]">
                <SignIn />
              </section>
            ) : (
              <section className="grid grid-rows-[68px_auto_0.5fr] min-h-[100svh] text-[14px]">
                <TopBar />
                {children}
                <Footer />
                <BackToTop />
                <script src="//code.tidio.co/6kvtl42cbz8d7es3svayqlcyxw6kgw8w.js"></script>
              </section>
            )}
          </body>
        </html>
      </ReactQueryProvider>
    </ConfigProvider>
  );
}
