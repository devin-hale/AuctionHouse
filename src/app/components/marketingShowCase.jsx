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

  {
    /*useLayoutEffect(() => {
    setTimeout(() => {
      handleNext();
    }, 10000);
  }, [nextImg]);*/
  }

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

  const handleStyleFirst = () => {
    switch (changing) {
      case "next":
        return {};
      case "prev":
        return { animation: "firstIn .5s ease forwards" };
      case null:
        return {};
    }
  };

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

  const handleTextCurrent = () => {
    switch (changing) {
      case null:
        return {};
      case "next":
        return { animation: "textFadeOut .25s ease forwards" };
      case "prev":
        return { animation: "textFadeOut .25s ease forwards" };
    }
  };

  const handleTextNext = () => {
    switch (changing) {
      case null:
        return {};
      case "next":
        return { animation: "textFadeIn .25s ease .25s forwards" };
      case "prev":
        return {};
    }
  };

  const handleTextPrev = () => {
    switch (changing) {
      case null:
        return {};
      case "next":
        return {};
      case "prev":
        return { animation: "textFadeIn .25s ease .25s forwards" };
    }
  };

  return (
    <div>
      <div className=" relative m-auto overflow-hidden text-center">
        <div
          className="drop-shadow-lg absolute inset-x-0 inset-y-0 z-30"
          style={handleTextCurrent()}
        >
          <p className="text-[25px] sm:text-[45px]">{currentImg.text}</p>
          <p className="sm:text-[25px]">
            <em>{currentImg.subtext}</em>
          </p>
        </div>
        {prevImg && (
          <div
            className="drop-shadow-lg absolute inset-x-0 inset-y-0 z-30 opacity-0"
            style={handleTextPrev()}
          >
            <p className="text-[25px] sm:text-[45px]">{prevImg.text}</p>
            <p className="sm:text-[25px]">
              <em>{prevImg.subtext}</em>
            </p>
          </div>
        )}
        {nextImg && (
          <div
            className=" drop-shadow-lg absolute inset-x-0 inset-y-0 z-30 opacity-0"
            style={handleTextNext()}
          >
            <p className="text-[25px] sm:text-[45px]">{nextImg.text}</p>
            <p className="sm:text-[25px]">
              <em>{nextImg.subtext}</em>
            </p>
          </div>
        )}
        <div className=" rounded-xl relative">
          <img
            className="rounded-xl z-20 m-auto"
            style={handleStyleCurrent()}
            src={currentImg.img}
            alt=""
          />
        </div>
        <div className="absolute inset-x-0 inset-y-[93%] z-30 max-w-[640px] m-auto flex flex-row justify-center">
          {marketingData.map((el) => {
            return <div key={el}>{currentImg === el ? `a` : `b`}</div>;
          })}
        </div>
        <div className=" absolute inset-x-0 inset-y-0 z-30 max-w-[640px] m-auto flex flex-row justify-between max-h-[400px] rounded-xl ">
          <div
            onClick={() => handlePrev()}
            className="hover:bg-[rgba(100,100,100,.5)] hover:transition-all transition-all active:bg-[rgba(0,0,0,0)] rounded-l-xl flex flex-row items-center cursor-pointer"
          >
            <img
              className="w-[50px] cursor-pointer drop-shadow-lg"
              type="button"
              src="./assets/icons/chevron_left.svg"
              alt=""
            />
          </div>

          <div
            onClick={() => handleNext()}
            className="hover:bg-[rgba(100,100,100,.5)] rounded-r-xl flex flex-row items-center cursor-pointer active:bg-[rgba(0,0,0,0)]"
          >
            <img
              className="w-[50px] cursor-pointer  "
              type="button"
              src="./assets/icons/chevron_right.svg"
              alt=""
            />
          </div>
        </div>
        {prevImg && (
          <img
            className="absolute inset-x-0 inset-y-0 m-auto translate-x-[-105%] opacity-[.5] scale-[90%] z-10 rounded-xl"
            src={prevImg.img}
            alt=""
            style={handleStylePrev()}
          />
        )}
        {nextImg && (
          <img
            className="absolute inset-x-0 inset-y-0 m-auto translate-x-[105%] opacity-[.5] scale-[90%] z-10 rounded-xl "
            src={nextImg.img}
            alt=""
            style={handleStyleNext()}
          />
        )}
        {lastImg && (
          <img
            className="absolute inset-x-0 inset-y-0 m-auto translate-x-[200%] opacity-[0] scale-[80%] rounded-xl"
            src={lastImg.img}
            alt=""
            style={handleStyleLast()}
          />
        )}
        {firstImg && (
          <img
            className="absolute inset-x-0 inset-y-0 m-auto translate-x-[-200%] opacity-[0] scale-[80%] rounded-xl"
            src={firstImg.img}
            alt=""
            style={handleStyleFirst()}
          />
        )}
      </div>
    </div>
  );
};
