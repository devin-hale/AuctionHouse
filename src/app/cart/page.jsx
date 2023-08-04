"use client";
import CartGrid from "./cartGrid";
import { CartCost } from "./costComponent";
import { useSelector } from "react-redux";
import Link from "next/link";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.value);

  const cartAmount = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.amount,
    0
  );

  return (
    <div>
      {cartAmount > 0 && (
        <div>
          <p className=" w-fit font-frizquad m-auto text-[30px]">Your Cart:</p>
          <div className="max-w-[850px] m-auto">
            <CartGrid />
            <CartCost />
          </div>
          <div className="flex flex-row justify-between m-auto w-[85%] sm:w-[60%] mt-5 items-end pb-20">
            <Link
              href="/shop"
              className="p-2 font-semibold text-black bg-amber-300 rounded shadow-[0_0_5px_rgba(0,0,0,.5)] hover:bg-yellow-200 hover:transition-all transition-all h-fit"
            >
              Continue Shopping
            </Link>
            <Link
              href="/checkout"
              className="p-2 font-semibold text-black bg-amber-300 rounded shadow-[0_0_5px_rgba(0,0,0,.5)] hover:bg-yellow-200 hover:transition-all transition-all h-fit"
            >
              Check Out
            </Link>
          </div>
        </div>
      )}
      {cartAmount === 0 && (
        <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center">
          <div className="w-fit flex flex-col justify-evenly items-center mt-[200px] h-[250px]">
            <div className="">
              <p className="font-frizquad text-center text-[30px]">Woops!</p>
              <p>There are currently no items in your cart.</p>
            </div>
            <Link
              href="/shop"
              className=" bg-amber-400 p-3 font-bold text-black rounded drop-shadow-[0_2px_4px_rgba(0,0,0,.3)]"
            >
              Go To Shopping Portal
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
