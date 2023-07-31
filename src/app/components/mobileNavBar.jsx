"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

export const MobileNavBar = () => {
  const cart = useSelector((state) => state.cart.value);

  const cartAmount = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.amount,
    0
  );

  return (
    <div className="justify-evenly fixed bottom-0 flex flex-row bg-slate-400 w-[100%] h-[5%] text-center items-center">
      <Link href="/" className="w-[33.3%]">
        <p>H</p>
      </Link>
      <Link href="/shop" className="w-[33.3%]">
        <p>S</p>
      </Link>
      <Link href="/cart" className="w-[33.4%]">
        <p>C({cartAmount})</p>
      </Link>
    </div>
  );
};
