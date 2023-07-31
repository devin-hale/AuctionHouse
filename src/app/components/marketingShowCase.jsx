"use client";
import marketingData from "./marketing.JSON";
import { useState } from "react";
import "./marketingSC.css";

export const MarketingSC = () => {
  const [currentImg, setCurrentImg] = useState(marketingData[0]);
  const [nextImg, setNextImg] = useState(marketingData[1]);
  const [prevImg, setPrevImg] = useState(marketingData[1]);
  const [changing, setChanging] = useState(null);

  const handleNext = () => {
    if (marketingData.indexOf(currentImg) !== marketingData.length - 1) {
      setChanging("next");
      setTimeout(() => {
        setPrevImg(currentImg);
        setCurrentImg(nextImg);
        setNextImg(null);
        setChanging(null);
      }, 450);
    }
  };

  const handlePrev = () => {
    setChanging("prev");
    setTimeout(() => {
      setPrevImg(null);
      setCurrentImg(prevImg);
      setNextImg(currentImg);
      setChanging(null);
    }, 450);
  };

  const handleStart = () => {};

  const handleStyleNext = () => {
    switch (changing) {
      case "next":
        return { animation: "nextIn .5s ease 0s" };
      case "prev":
        return { animation: "nextOut .5s ease 0s" };
      case null:
        return {};
    }
  };

  const handleStylePrev = () => {
    switch (changing) {
      case null:
        return {};
      case "next":
        return { animation: "prevOut .5s ease 0s" };
      case "prev":
        return { animation: "prevIn .5s ease 0s" };
    }
  };

  const handleStyleCurrent = () => {
    switch (changing) {
      case null:
        return {};
      case "next":
        return { animation: "currentNext .5s ease 0s" };
      case "prev":
        return { animation: "currentPrev .5s ease 0s" };
      case "start":
        return { animation: "currentStart .5s ease 0s" };
    }
  };

  return (
    <div>
      <div
        className="relative m-auto overflow-hidden text-center"
        onClick={() => handleNext()}
      >
        <div className="drop-shadow-lg absolute inset-x-0 inset-y-0 z-10">
          <p className="text-[25px] sm:text-[45px]">{currentImg.text}</p>
          <p>
            <em>{currentImg.subtext}</em>
          </p>
        </div>
        <img
          className="m-auto"
          style={handleStyleCurrent()}
          src={currentImg.img}
          alt=""
        />
        {prevImg && (
          <img
            className="absolute inset-x-0 inset-y-0 m-auto translate-x-[-105%] opacity-[.5] scale-[90%]"
            src={prevImg.img}
            alt=""
            style={handleStylePrev()}
          />
        )}
        {nextImg && (
          <img
            className="absolute inset-x-0 inset-y-0 m-auto translate-x-[105%] opacity-[.5] scale-[90%]"
            src={nextImg.img}
            alt=""
            style={handleStyleNext()}
          />
        )}
      </div>
    </div>
  );
};
