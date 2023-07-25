"use client";
import {
  addProduct,
  removeProduct,
  incrementProduct,
  decrementProduct,
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

  const MapCart = () =>
    cart.map((item) => {
      if (item.amount > 0)
        return (
          <div
            key={item.item.id}
            className="flex flex-row justify-evenly bg-slate-600 p-2 items-center w-[60%] m-auto relative"
          >
            {deleteConfirm && (
              <RemoveModal
                deleteConfirm={deleteConfirm}
                setDeleteConfirm={setDeleteConfirm}
                item={item}
              />
            )}
            <div className="w-[25%] flex flex-row items-center">
              <div
                onClick={() => setDeleteConfirm(!deleteConfirm)}
                className="w-[20px] h-[20px] text-red-500 border-solid border-red-500 border-2 rounded text-center transition-all hover:transition-all hover:bg-red-300 cursor-pointer"
              >
                <p className="mt-[-5px]">x</p>
              </div>
              <Image
                className="rounded m-auto"
                width={50}
                height={50}
                src={item.item.img}
                style={{ border: `2px solid ${itemColor(item.item)}` }}
                alt=""
              />
            </div>
            <div className="w-[50%]">
              <p
                className="text-center"
                style={{ color: `${itemColor(item.item)}` }}
              >
                {item.item.name}
              </p>
            </div>
            <div className="w-[25%] flex flex-row justify-evenly items-center">
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

              <p className="text-black w-[25px] rounded border-slate-400 border-solid border-2 bg-white text-center">
                {item.amount}
              </p>
              <div
                className="w-[20px] h-[20px] border-solid border-slate-300 border-2 rounded text-center cursor-pointer transition-all hover:bg-white hover:text-black hover:transition-all"
                onClick={() => dispatch(incrementProduct(item.item))}
              >
                <p className="mt-[-5px]">+</p>
              </div>
            </div>
          </div>
        );
    });

  return (
    <div className="text-white">
      <div className="flex flex-row justify-evenly bg-slate-800 p-2 items-center w-[60%] m-auto">
        <p>Icon</p>
        <p>Name</p>
        <p>Quantity</p>
      </div>
      <MapCart />
    </div>
  );
};

export default CartGrid;
