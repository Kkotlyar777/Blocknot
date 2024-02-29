import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.sass";
import SidebarLayout from "@/widgets/sidebar/index";
import HeaderLayout from "@/widgets/Header/index";
import { Provid } from "../GlobalRedux/reducer/provider";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="./favicon.ico"
          sizes="any"
        />
      </head>
      <body
        style={{
          margin: "0",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "100vh",
          width: "100%",
          background: "#FAF9F9",
          overflow: "hidden",
        }}
        className={lato.className}
      >
        <Provid>
          {/* <SidebarLayout /> */}

          {/* <div> */}
            {/* <HeaderLayout /> */}
            {children}
          {/* </div> */}
        </Provid>
      </body>
    </html>
  );
}
