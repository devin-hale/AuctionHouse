"use client";
import marketingData from "./marketing.JSON";
import { useState, useEffect, useLayoutEffect } from "react";
import "./marketingSC.css";

export const MarketingSC = () => {
  const [currentImg, setCurrentImg] = useState(marketingData[0]);
  const [nextImg, setNextImg] = useState(null);
  const [prevImg, setPrevImg] = useState(null);
  const [firstImg, setFirstImg] = useState(null);
  const [lastImg, setLastImg] = useState(null);
  const [changing, setChanging] = useState(null);

  useLayoutEffect(() => {
    handleUpdate();
  }, []);

  useLayoutEffect(() => {
    let currentIndex = marketingData.indexOf(currentImg);
    setPrevImg(
      marketingData[
        (currentIndex - 1 + marketingData.length) % marketingData.length
      ]
    );
    setNextImg(marketingData[(currentIndex + 1) % marketingData.length]);
    setFirstImg(
      marketingData[
        (currentIndex - 2 + marketingData.length) % marketingData.length
      ]
    );
    setLastImg(marketingData[(currentIndex + 2) % marketingData.length]);
  }, [currentImg]);

  const handleUpdate = () => {
    let currentIndex = marketingData.indexOf(currentImg);
    //First Image.  Logic to wrap around.
    if (currentIndex - 2 < 0)
      setFirstImg(marketingData[marketingData.length - 2]);
    else setFirstImg(marketingData[currentIndex - 2]);
    //Previous Image.  Logic to wrap around.
    if (currentIndex - 1 < 0)
      setPrevImg(marketingData[marketingData.length - 1]);
    else setPrevImg(marketingData[currentIndex - 1]);
    //Next Image.  Logic to wrap around.
    if (currentIndex + 1 > marketingData.length - 1)
      setNextImg(marketingData[marketingData[0]]);
    else setNextImg(marketingData[currentIndex + 1]);
    //Last Image.  Logic to wrap around.
    if (currentIndex + 2 > marketingData.length - 1)
      setLastImg(marketingData[marketingData[1]]);
    else setLastImg(marketingData[currentIndex + 2]);
  };

  const handleNext = () => {
    setChanging("next");
    setTimeout(() => {
      setCurrentImg(nextImg);
      setChanging(null);
    }, 450);
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
        return { animation: "nextIn .5s ease forwards" };
      case "prev":
        return { animation: "nextOut .5s ease forwards" };
      case null:
        return {};
    }
  };

  const handleStyleLast = () => {
    switch (changing) {
      case "next":
        return { animation: "lastIn .5s ease forwards" };
      case "prev":
        return { animation: "lastOut .5s ease forwards" };
      case null:
        return {};
    }
  };

  const handleStylePrev = () => {
    switch (changing) {
      case null:
        return {};
      case "next":
        return { animation: "prevOut .5s ease forwards" };
      case "prev":
        return { animation: "prevIn .5s ease forwards" };
    }
  };

  const handleStyleCurrent = () => {
    switch (changing) {
      case null:
        return {};
      case "next":
        return { animation: "currentNext .5s ease forwards" };
      case "prev":
        return { animation: "currentPrev .5s ease forwards" };
      case "start":
        return { animation: "currentStart .5s ease forwards" };
    }
  };

  return (
    <div>
      <div
        className="relative m-auto overflow-hidden text-center"
        onClick={() => handleNext()}
      >
        <div className="drop-shadow-lg absolute inset-x-0 inset-y-0 z-30">
          <p className="text-[25px] sm:text-[45px]">{currentImg.text}</p>
          <p>
            <em>{currentImg.subtext}</em>
          </p>
        </div>
        <img
          className="z-20 m-auto"
          style={handleStyleCurrent()}
          src={currentImg.img}
          alt=""
        />
        {prevImg && (
          <img
            className="absolute inset-x-0 inset-y-0 m-auto translate-x-[-105%] opacity-[.5] scale-[90%] z-10"
            src={prevImg.img}
            alt=""
            style={handleStylePrev()}
          />
        )}
        {nextImg && (
          <img
            className="absolute inset-x-0 inset-y-0 m-auto translate-x-[105%] opacity-[.5] scale-[90%] z-10"
            src={nextImg.img}
            alt=""
            style={handleStyleNext()}
          />
        )}
        {lastImg && (
          <img
            className="absolute inset-x-0 inset-y-0 m-auto translate-x-[200%] opacity-[0] scale-[80%]"
            src={lastImg.img}
            alt=""
            style={handleStyleLast()}
          />
        )}
      </div>
    </div>
  );
};
