"use client";
import itemData from "./../../../data.JSON";
import Image from "next/image";
import NavBar from "@/app/components/navBar";
import { useState } from "react";

const ProductDetail = ({ params }) => {
  const itemDB = itemData.items;

  const item = itemDB.find((item) => item.id == params.productId);

  const itemColor = (item) => {
    switch (item.quality) {
      case 0:
        return "#ffffff";
      case 1:
        return "#1eff00";
      case 2:
        return "#0070dd";
      case 3:
        return "#a335ee";
      case 4:
        return "#ff8000";
    }
  };

  return (
    <>
      <div className=" p-2 border-2 bg-black border-white border-solid w-[80%] m-auto flex flex-col justify-between min-h-[400px]">
        <div>
          <p className="text-[25px]" style={{ color: `${itemColor(item)}` }}>
            {item.name}
          </p>
          <p className="text-[17px] text-[#FFFC01]">{item.ilevel}</p>
        </div>

        <div className="flex flex-col m-auto sm:flex-row">
          <Image
            className="m-auto rounded border-2 border-solid"
            width={100}
            height={100}
            src={item.img}
            style={{ border: `2px solid ${itemColor(item)}` }}
            alt=""
          />
          <div className="w-[100%] sm:w-[60%]">
            <p className=" m-auto">{item.type}</p>
            <p>{item.stats1}</p>
            <p>{item?.stats2}</p>
            <p>{item?.stats3}</p>
            <p>{item.level}</p>
            <p className=" text-green-400">{item?.description}</p>
            <p className=" text-green-400">{item?.description2}</p>
          </div>
        </div>

        <div className=" text-[25px] flex flex-row flex-nowrap items-center m-auto w-fit justify-evenly border-solid border-white border-2">
          <p className="mr-[10px]">Cost:</p>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] items-center align-middle justify-evenly">
            <p>{item.priceG}</p>
            <Image
              className="m-auto"
              height={20}
              width={20}
              src="/assets/goldIMG/Gold.webp"
              alt="Gold"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle justify-evenly items-center">
            <p>{item.priceS}</p>
            <Image
              height={10}
              width={20}
              src="/assets/goldIMG/Silver.webp"
              alt="Silver"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle justify-evenly items-center">
            <p>{item.priceC}</p>
            <Image
              height={10}
              width={20}
              src="/assets/goldIMG/Copper.webp"
              alt="Copper"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;