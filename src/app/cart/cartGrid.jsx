"use client";
import {
  addProduct,
  removeProduct,
  incrementProduct,
  decrementProduct,
  setProductAmount,
} from "../components/cartSlice";
import cartSlice from "../components/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import { RemoveModal } from "../components/deleteConfirmation";

const CartGrid = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

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

  const individualCostMultiplier = (itemQuantity, priceG, priceS, priceC) => {
    const totalCopper = (priceG * 10000 + priceS * 100 + priceC) * itemQuantity;
    const totalG = Math.floor(totalCopper / 10000);
    const totalS = Math.floor((totalCopper - totalG * 10000) / 100);
    const totalC = totalCopper - totalG * 10000 - totalS * 100;
    return { totalG: totalG, totalS: totalS, totalC: totalC };
  };

  const handleInputChange = (e, item) => {
    dispatch(setProductAmount({ item: item, value: e.target.value }));
  };

  const MapCart = () =>
    cart.map((item) => {
      if (item.amount > 0)
        return (
          <div
            key={item.item.id}
            className="flex flex-row justify-evenly bg-slate-600 p-2 items-center w-[100%] m-auto relative"
          >
            {/* Item Image */}
            <div className="w-[25%] flex flex-row items-center justify-evenly">
              <Image
                className="rounded m-auto w-[50px]"
                width={50}
                height={50}
                src={item.item.img}
                style={{ border: `2px solid ${itemColor(item.item)}` }}
                alt=""
              />
            </div>
            {/* Item Name */}
            <div className="min-w-[75px] sm:min-w-[150px]">
              <p
                className="text-center text-[12px] w-[10%] sm:text-[15px] sm:w-auto m-4"
                style={{ color: `${itemColor(item.item)}` }}
              >
                {item.item.name}
              </p>
            </div>
            {/* Quantity */}
            <div className="min-w-[75px] sm:min-w-[150px] flex flex-row justify-evenly items-center">
              {item.amount > 1 ? (
                <div
                  className="w-[20px] h-[20px] border-solid border-slate-300 border-2 rounded text-center cursor-pointer transition-all hover:bg-white hover:text-black hover:transition-all"
                  onClick={() => dispatch(decrementProduct(item.item))}
                >
                  <p className="mt-[-5px]">-</p>
                </div>
              ) : (
                <div className="w-[20px] h-[20px] text-gray-400 border-solid border-gray-400 border-2 rounded text-center">
                  <p className="mt-[-5px]">-</p>
                </div>
              )}

              <input
                className="text-black w-[25px] rounded border-slate-400 border-solid border-2 bg-white text-center"
                type="number"
                item={item.item}
                value={item.amount}
                min="1"
                max="99"
                onChange={(e) => handleInputChange(e, item)}
                onClick={(e) => e.target.select()}
              ></input>
              <div
                className="w-[20px] h-[20px] border-solid border-slate-300 border-2 rounded text-center cursor-pointer transition-all hover:bg-white hover:text-black hover:transition-all"
                onClick={() => dispatch(incrementProduct(item.item))}
              >
                <p className="mt-[-5px]">+</p>
              </div>
            </div>
            {/* Gold Cost */}
            <div className="flex flex-row flex-wrap sm:flex-nowrap items-center m-2 justify-evenly min-w-[25px] sm:min-w-[125px]">
              <div className="flex flex-row flex-nowrap items-center max-h-[20px] align-middle justify-evenly">
                <p>
                  {
                    individualCostMultiplier(
                      item.amount,
                      item.item.priceG,
                      item.item.priceS,
                      item.item.priceC
                    ).totalG
                  }
                </p>
                <Image
                  className="m-auto"
                  height={20}
                  width={20}
                  src="/assets/goldIMG/Gold.webp"
                  alt="Gold"
                />
              </div>
              <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] items-center align-middle justify-evenly">
                <p>
                  {
                    individualCostMultiplier(
                      item.amount,
                      item.item.priceG,
                      item.item.priceS,
                      item.item.priceC
                    ).totalS
                  }
                </p>
                <Image
                  height={10}
                  width={20}
                  src="/assets/goldIMG/Silver.webp"
                  alt="Silver"
                />
              </div>
              <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle items-center justify-evenly">
                <p>
                  {
                    individualCostMultiplier(
                      item.amount,
                      item.item.priceG,
                      item.item.priceS,
                      item.item.priceC
                    ).totalC
                  }
                </p>
                <Image
                  height={10}
                  width={20}
                  src="/assets/goldIMG/Copper.webp"
                  alt="Copper"
                />
              </div>
            </div>
            {/* Delete Button */}
            <div
              onClick={() => {
                setDeleteConfirm(!deleteConfirm);
                setDeleteItem(item);
              }}
              className="w-[25px] h-[20px] text-red-500 border-solid border-red-500 border-2 rounded text-center transition-all hover:transition-all hover:bg-red-300 cursor-pointer"
            >
              <p className="mt-[-5px]">x</p>
            </div>
          </div>
        );
    });

  return (
    <div className="text-white w-[85%] sm:w-[85%] m-auto">
      {deleteConfirm && (
        <RemoveModal
          deleteConfirm={deleteConfirm}
          setDeleteConfirm={setDeleteConfirm}
          item={deleteItem}
        />
      )}
      <MapCart />
    </div>
  );
};

export default CartGrid;
