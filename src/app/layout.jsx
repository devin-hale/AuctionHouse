import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "./ReduxProvider";
import localFont from "@next/font/local";

const frizQuadrata = localFont({
  src: "./fonts/friz-quadrata.otf",
  variable: "--font-frizquad",
});

const lifeCraft = localFont({
  src: "./fonts/LifeCraft.ttf",
  variable: "--font-lifeCraft",
});

const openSans = localFont({
  src: [
    {
      path: "./fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/OpenSans-VariableFont_wdth,wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-openSans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Auction House",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${frizQuadrata.variable} ${lifeCraft.variable} `}
    >
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
