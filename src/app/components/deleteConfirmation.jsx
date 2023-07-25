"use client";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "./cartSlice";
import { removeProduct } from "./cartSlice";

export const RemoveModal = ({ item, deleteConfirm, setDeleteConfirm }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[rgba(0,0,0,.75)] absolute w-[100%] h-[100%] flex items-center">
      <div className="bg-white rounded text-black m-auto w-fit h-[100%] p-1 flex flex-col items-center">
        <p>Remove Item from Cart?</p>
        <div className="flex flex-row flex-nowrap justify-evenly">
          <button
            type="button"
            onClick={() => {
              setDeleteConfirm(!deleteConfirm);
              dispatch(removeProduct(item.item));
            }}
            className="border-red-400 border-solid border-2 rounded p-1 text-[14px] cursor-pointer transition-all hover:transition-all hover:bg-red-300"
          >
            Remove
          </button>
          <button
            type="button"
            onClick={() => setDeleteConfirm(!deleteConfirm)}
            className="border-gray-400 border-solid border-2 rounded p-1 text-[14px] cursor-pointer transition-all hover:transition-all hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
