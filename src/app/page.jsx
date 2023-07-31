"use client";
import Image from "next/image";
import { ProductGrid } from "./components/productGrid";
import { MarketingSC } from "./components/marketingShowCase";

import NavBar from "./components/navBar";

export default function Home() {
  return (
    <div>
      <MarketingSC />
    </div>
  );
}
