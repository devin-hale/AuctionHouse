"use client";
import itemData from "./../../data.JSON";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./cartSlice";
import { useRouter } from "next/navigation";

export const ProductGrid = ({ typeFilter, uniqueTypeFilter }) => {
  const cart = useSelector((state) => state.cart.value);
  const itemDB = itemData;
  const dispatch = useDispatch();
  const router = useRouter();

  const routerPush = (item) => {
    router.push(`/shop/${item.id}`);
  };

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

  const filterItems = () => {
    if (typeFilter === "All") return itemDB.items;
    else {
      const filteredItems = itemDB.items.filter(
        (item) => item.itemtype === typeFilter
      );
      if (uniqueTypeFilter === "All") return filteredItems;
      else
        return filteredItems.filter((item) => item.type === uniqueTypeFilter);
    }
  };

  const ItemDiv = () =>
    filterItems().map((item) => {
      return (
        <div key={item.id}>
          <div
            className="border-solid border-white border-2 h-[250px] grid grid-cols-1 m-auto text-center max-w-[250px] cursor-pointer"
            onClick={() => routerPush(item)}
          >
            <div>
              <p className=" m-auto" style={{ color: `${itemColor(item)}` }}>
                {item.name}
              </p>
              <p className="text-[#FFFC01]">{item.ilevel}</p>
            </div>
            <Image
              className="m-auto rounded"
              width={80}
              height={80}
              src={item.img}
              alt=""
              style={{ border: `2px solid ${itemColor(item)}` }}
            />
            <p className=" m-auto">{item.type}</p>
            <div className="flex flex-row flex-nowrap items-center m-auto w-[100%] h-[100%] justify-evenly border-solid border-white border-2">
              <p>Cost: </p>
              <div className="flex flex-row flex-nowrap w-[50px] items-center max-h-[20px] align-middle justify-evenly">
                <p>{item.priceG}</p>
                <Image
                  className="m-auto"
                  height={20}
                  width={20}
                  src="/assets/goldIMG/Gold.webp"
                  alt="Gold"
                />
              </div>
              <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] items-center align-middle justify-evenly">
                <p>{item.priceS}</p>
                <Image
                  height={10}
                  width={20}
                  src="/assets/goldIMG/Silver.webp"
                  alt="Silver"
                />
              </div>
              <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle items-center justify-evenly">
                <p>{item.priceC}</p>
                <Image
                  height={10}
                  width={20}
                  src="/assets/goldIMG/Copper.webp"
                  alt="Copper"
                />
              </div>
            </div>
            <div className=" m-auto">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault;
                  e.stopPropagation();
                  dispatch(addProduct(item));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-5 p-2 m-auto">
      <ItemDiv />
    </div>
  );
};
