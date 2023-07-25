import NavBar from "../components/navBar";
import itemData from "./../../data.JSON";

const CartPage = () => {
  const itemDB = itemData.items;

  const item = itemDB.find((item) => item.id == params.productId);

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

  return (
    <>
      <NavBar />
      <p>This is the cart page.</p>
    </>
  );
};

export default CartPage;
