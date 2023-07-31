"use client";
import NavBar from "../components/navBar";
import itemData from "./../../data.JSON";
import CartGrid from "./cartGrid";
import { CartCost } from "./costComponent";
import { useSelector } from "react-redux";

const CartPage = () => {
  const itemDB = itemData.items;

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
        <div>
          <p>There are currently no items in your cart!</p>
          <button type="button">Shopping Portal</button>
        </div>
      )}
    </>
  );
};

export default CartPage;
