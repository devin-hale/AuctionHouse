"use client";
import NavBar from "../components/navBar";
import itemData from "./../../data.JSON";
import CartGrid from "./cartGrid";
import { CartCost } from "./costComponent";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CartPage = () => {
  const itemDB = itemData.items;

  const router = useRouter();

  const cart = useSelector((state) => state.cart.value);

  const cartAmount = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.amount,
    0
  );

  return (
    <>
      {cartAmount > 0 && (
        <div>
          <br></br>
          <div className="max-w-[850px] m-auto">
            <CartGrid />
            <CartCost />
          </div>
          <div className="flex flex-row justify-between m-auto w-[85%] sm:w-[60%] mt-5 items-end">
            <button type="button" className="text-black bg-white">
              Continue Shopping
            </button>
            <button type="button" className="text-black bg-white">
              Check Out
            </button>
          </div>
        </div>
      )}
      {cartAmount === 0 && (
        <div className=" w-[100%] h-[100%] flex flex-row justify-center">
          <div className="w-fit flex flex-col items-center mt-[200px]">
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
    </>
  );
};

export default CartPage;
