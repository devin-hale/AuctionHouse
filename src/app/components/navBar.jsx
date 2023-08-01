"use client";
import Link from "next/link";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.value);

  const cartAmount = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.amount,
    0
  );

  const mobileCheck = useMediaQuery("only screen and (max-width : 640px)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(mobileCheck);
  }, [mobileCheck]);

  return (
    <>
      {!isMobile && (
        <div className=" w-[80%] border-2 flex flex-row justify-evenly border-white border-solid m-auto">
          <Link className="hover:bg-red-300" href="/">
            Home
          </Link>
          <Link className="hover:bg-red-300" href="/shop">
            Shop
          </Link>
          <Link className="hover:bg-red-300" href="/cart">
            Cart ({cartAmount})
          </Link>
        </div>
      )}
      {isMobile && (
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
      )}
    </>
  );
};

export default NavBar;
