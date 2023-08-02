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

  const pathName = window.location.pathname;

  return (
    <>
      {!isMobile && (
        <div className=" w-[85%] flex flex-row justify-between font-frizquad hover:transition-all transition-all m-auto text-[20px] mt-0 mb-3">
          <div className="justify-evenly flex flex-row items-center">
            <Link
              className=" hover:border-red-400 hover:transition-all p-5 transition-all border-b-2 border-transparent"
              href="/"
            >
              Home
            </Link>
            <Link className="hover:bg-red-300 p-5" href="/shop">
              Shop
            </Link>
            <Link className="hover:bg-red-400 p-5" href="/">
              About
            </Link>
          </div>
          <Link className="p-5" href="/cart">
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
