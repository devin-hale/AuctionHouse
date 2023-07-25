import NavBar from "../components/navBar";
import itemData from "./../../data.JSON";
import CartGrid from "./cartGrid";

const CartPage = () => {
  const itemDB = itemData.items;

  return (
    <>
      <NavBar />
      <p>This is the cart page.</p>
      <CartGrid />
    </>
  );
};

export default CartPage;
