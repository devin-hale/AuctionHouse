"use client";
import Image from "next/image";
import { Data } from "./data";


export default function Home() {
  return (
      <div>
        <p>Token:</p>
        <Data />
      </div>
  );
}
