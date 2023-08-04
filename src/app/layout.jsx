import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "./ReduxProvider";
import localFont from "next/font/local";

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
  description:
    "Fictitious shopping portal meant to represent the World of Warcraft auction house.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${frizQuadrata.variable} ${lifeCraft.variable} `}
    >
      <body className="pt-0 mt-0">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
