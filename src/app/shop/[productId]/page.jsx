"use client";
import itemData from "./../../../data.JSON";
import Image from "next/image";
import NavBar from "@/app/components/navBar";
import { useState } from "react";
import { addProduct } from "@/app/components/cartSlice";
import { useRouter } from "next/navigation";
import Icon from "@mdi/react";
import { mdiPlus, mdiMinus, mdiArrowLeftBox } from "@mdi/js";

const ProductDetail = ({ params }) => {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const itemDB = itemData.items;
  const router = useRouter();

  const routerPrefetch = () => {
    router.prefetch(`/shop`);
    router.push(`/shop`);
  };

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

  const itemQuality = (item) => {
    switch (item.quality) {
      case 0:
        return "COMMON";
      case 1:
        return "UNCOMMON";
      case 2:
        return "RARE";
      case 3:
        return "EPIC";
      case 4:
        return "LEGENDARY";
    }
  };

  const itemBorder = (color) => {
    return `border-${itemColor(color)}`;
  };

  const itemBG = (item) => {
    switch (item.quality) {
      case 0:
        return "bg-gradient-to-b from-slate-50 to-gray-300";
      case 1:
        return "bg-gradient-to-b from-slate-50 to-green-300";
      case 2:
        return "bg-gradient-to-b from-slate-50 to-blue-400";
      case 3:
        return "bg-gradient-to-b from-purple-500 to-violet-500";
      case 4:
        return "bg-gradient-to-b from-orange-500 to-amber-500";
    }
  };

  const detailsBG = (item) => {
    switch (item.quality) {
      case 0:
        return "bg-gradient-to-t from-slate-300 via-slate-100 to-slate-300";
      case 1:
        return "bg-gradient-to-t from-green-500 via-emerald-500 to-green-500";
      case 2:
        return "bg-gradient-to-t from-blue-600 via-sky-600 to-blue-600";
      case 3:
        return "bg-gradient-to-t from-violet-600 via-purple-500 to-violet-400";
      case 4:
        return "bg-gradient-to-t from-amber-500 via-orange-400 to-amber-500";
    }
  };

  return (
    <>
      <button
        onClick={() => routerPrefetch()}
        type="button"
        className=" sm:ml-20 drop-shadow-[0px_2px_3px_rgba(0,0,0,0)] hover:drop-shadow-[0px_2px_3px_rgba(0,0,0,.4)] bg-white flex flex-row items-center p-2 m-2 transition-all border-2 border-transparent border-solid rounded"
      >
        <Icon path={mdiArrowLeftBox} className="w-[25px]" />
        Back to Shop
      </button>
      <div
        className={`p-2 border-2 border-solid w-[80%] rounded drop-shadow-[0px_2px_5px_rgba(0,0,0,.25)] bg-white m-auto mb-20 sm:mb-auto flex flex-col justify-between ${detailsBG(
          item
        )}`}
        style={{
          borderColor: `${itemColor(item)}`,
        }}
      >
        <div>
          <div>
            <p className="text-[25px] text-white text-shadow-md font-frizquad">
              {item.name}
            </p>
          </div>
          <div className="flex flex-row">
            <div
              className={`${itemBG(
                item
              )} w-fit p-1 rounded m-1 text-white font-semibold text-[12.5px] drop-shadow-[0px_1px_2px_rgba(0,0,0,.5)]`}
            >
              {itemQuality(item)}
            </div>
            <div
              className={`bg-black w-fit p-1 m-1 rounded text-white font-semibold text-[12.5px] drop-shadow-[0px_1px_2px_rgba(0,0,0,.5)]`}
            >
              {item.itemtype}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-[10px] mb-[10px] items-center">
          <div className="w-[100%] sm:w-[40%] flex flex-col items-center justify-center">
            <Image
              className=" m-2 rounded border-2 border-solid sm:w-[125px] drop-shadow-[0px_0px_4px_rgba(0,0,0,.75)]"
              width={100}
              height={100}
              src={item.img}
              style={{ border: `2px solid ${itemColor(item)}` }}
              alt=""
            />
            <div className=" flex-nowrap justify-evenly flex flex-row items-center p-2 pl-2 font-bold text-white bg-black border-2 drop-shadow-[0px_0px_4px_rgba(0,0,0,.75)] border-white border-solid m-2 rounded w-fit text-[25px]">
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
          <div className="w-[100%] sm:w-[60%] rounded bg-black border-solid border-2 border-white drop-shadow-[0px_2px_5px_rgba(0,0,0,.75)] p-2">
            <p className="text-[18px] text-[#FFFC01]">{item.ilevel}</p>
            <p className=" m-auto text-white">{item.type}</p>
            <p className="text-white">{item.stats1}</p>
            <p className="text-white">{item?.stats2}</p>
            <p className="text-white">{item?.stats3}</p>
            <p className="text-white">{item.level}</p>
            <p className=" text-green-400">{item?.description}</p>
            <p className=" text-green-400">{item?.description2}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-end sm:items-center w-[100%] text-[20px] sm:text-[25px] justify-center  sm:justify-end h-[50px] m-auto mt-2 mb-2">
          <form
            id="productAdd"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className=" justify-evenly flex flex-row items-center w-[100%] sm:w-[60%]"
          >
            <div className="flex-nowrap flex flex-row items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,.45)]">
              {quantity !== 1 ? (
                <Icon
                  path={mdiMinus}
                  color={`white`}
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className={`${itemBG(
                    item
                  )} w-[20px] h-[20px] rounded select-none cursor-pointer hover:bg-yellow-200 active:scale-[90%]`}
                />
              ) : (
                <Icon
                  path={mdiMinus}
                  color={`white`}
                  className="w-[20px] h-[20px] bg-gray-500 rounded select-none"
                />
              )}
              <div
                className="p-1 m-2 text-black bg-white border-2 border-solid rounded"
                style={{ borderColor: `${itemColor(item)}` }}
              >
                {quantity}
              </div>
              {quantity !== 99 ? (
                <Icon
                  path={mdiPlus}
                  color={`white`}
                  onClick={() => {
                    if (quantity < 99) {
                      setQuantity(quantity + 1);
                    }
                  }}
                  className={`${itemBG(
                    item
                  )} w-[20px] h-[20px] rounded select-none cursor-pointer hover:bg-yellow-200 active:scale-[90%]`}
                />
              ) : (
                <Icon
                  path={mdiPlus}
                  color={`white`}
                  className="w-[20px] h-[20px] bg-gray-500 rounded select-none hover:bg-yellow-200"
                />
              )}
            </div>
            <button
              className="p-2 font-semibold text-black bg-amber-300 rounded shadow-[0_0_5px_rgba(0,0,0,.5)] hover:bg-yellow-200 hover:transition-all transition-all h-fit"
              type="button"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
