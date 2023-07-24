"use client";
import Image from "next/image";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { blizzardOAuth } from "@/services/blizzardApi";
import { Data } from "./data";

export default function Home() {
  return (
    <ApiProvider api={blizzardOAuth}>
      <div>
        <p>Token:</p>
        <Data />
      </div>
    </ApiProvider>
  );
}
