import NavBar from "../components/navBar";
import itemData from "./../../data.JSON";
import CartGrid from "./cartGrid";

const CartPage = () => {
  const itemDB = itemData.items;

  return (
    <>
      <p>This is the cart page.</p>
      <CartGrid />
      <div className="flex flex-row justify-between m-auto w-[85%] sm:w-[60%] mt-5 items-end">
        <button type="button" className="bg-white text-black">
          Continue Shopping
        </button>
        <button type="button" className="bg-white text-black">
          Check Out
        </button>
      </div>
    </>
  );
};

export default CartPage;
