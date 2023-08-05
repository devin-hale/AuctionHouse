"use client";
import itemData from "./../../data.JSON";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./cartSlice";
import { useRouter } from "next/navigation";
import { mdiPlus, mdiMinus } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

export const ProductGrid = ({ typeFilter, uniqueTypeFilter, sort }) => {
  const cart = useSelector((state) => state.cart.value);
  const itemDB = itemData;
  const dispatch = useDispatch();
  const router = useRouter();

  const [quantities, setQuantities] = useState({});

  const routerPush = (item) => {
    router.push(`/shop/${item.id}`);
  };

  const individualCostMultiplier = (itemQuantity, priceG, priceS, priceC) => {
    const totalCopper = (priceG * 10000 + priceS * 100 + priceC) * itemQuantity;
    return totalCopper;
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

  const itemBG = (item) => {
    switch (item.quality) {
      case 0:
        return "bg-gradient-to-b from-slate-50 to-gray-300";
      case 1:
        return "bg-gradient-to-b from-slate-50 to-green-300";
      case 2:
        return "bg-gradient-to-b from-slate-50 to-blue-400";
      case 3:
        return "bg-gradient-to-b from-purple-500 to-violet-500";
      case 4:
        return "bg-gradient-to-b from-orange-500 to-amber-500";
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

  const sortItems = (arr) => {
    if (sort.abc !== null) {
      sort.abc === "asc"
        ? arr.sort((a, b) => a.name.localeCompare(b.name))
        : arr.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort.quality !== null) {
      sort.quality === "asc"
        ? arr.sort((a, b) => a.quality - b.quality)
        : arr.sort((a, b) => b.quality - b.quality);
    } else if (sort.cost !== null) {
      sort.cost === "asc"
        ? arr.sort(
            (a, b) =>
              individualCostMultiplier(1, a.priceG, a.priceS, a.priceC) -
              individualCostMultiplier(1, b.priceG, b.priceS, b.priceC)
          )
        : arr.sort((a, b) =>
            individualCostMultiplier(
              1,
              b.priceG,
              b.priceS,
              b.priceC -
                individualCostMultiplier(1, a.priceG, a.priceS, a.priceC)
            )
          );
    } else {
      arr.sort((a, b) => a.id - b.id);
    }
    return arr;
  };

  const searchItems = (arr) => {
    return arr.filter((item) => item.name.includes(`${sort.search}`));
  };

  const handleQuantity = (actionType, item) => {
    switch (actionType) {
      case "inc":
        setQuantities({
          ...quantities,
          [`${item.id}`]: quantities[`${item.id}`] + 1,
        });
        break;
      case "dec":
        setQuantities({
          ...quantities,
          [`${item.id}`]: quantities[`${item.id}`] - 1,
        });
        break;
    }
  };

  const ItemDiv = () =>
    searchItems(sortItems([...filterItems()])).map((item) => {
      if (!quantities[`${item.id}`])
        setQuantities({ ...quantities, [`${item.id}`]: 1 });
      return (
        <div key={item.id}>
          <div
            className={` rounded  shadow-[0px_5px_10px_rgba(0,0,0,.25)] h-[250px] text-white grid grid-cols-1 m-auto text-center max-w-[250px] cursor-pointer ${itemBG(
              item
            )} `}
            onClick={() => routerPush(item)}
          >
            <div>
              <p className=" line-clamp-1 font-semi-bold m-auto text-[17.5px]">
                {item.name}
              </p>
              <p className="text-[#FFFC01]">{item.ilevel}</p>
            </div>
            <Image
              className="m-auto rounded shadow-[0px_0px_10px_rgba(0,0,0,.75)]"
              width={80}
              height={80}
              src={item.img}
              alt=""
              style={{ border: `2px solid ${itemColor(item)}` }}
            />
            <p className=" m-auto">{item.type}</p>
            <div className="flex-nowrap flex flex-row items-center drop-shadow-[0px_0px_4px_rgba(0,0,0,.75)] justify-center p-1 pl-3 m-auto font-bold bg-black border-2 border-white border-solid rounded">
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

            <form
              id="productAdd"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="justify-evenly flex flex-row"
            >
              <div className="flex-nowrap flex flex-row items-center justify-center m-auto">
                {quantities[`${item.id}`] !== 1 ? (
                  <Icon
                    path={mdiMinus}
                    color={itemColor(item)}
                    onClick={() => {
                      if (quantities[`${item.id}`] > 1) {
                        handleQuantity("dec", item);
                      }
                    }}
                    className="w-[20px] h-[20px] bg-white rounded select-none hover:bg-yellow-200"
                  />
                ) : (
                  <Icon
                    path={mdiMinus}
                    color={`white`}
                    className="w-[20px] h-[20px] bg-gray-500 rounded select-none"
                  />
                )}
                <div className="w-[20px] text-black bg-white rounded m-2">
                  {quantities[`${item.id}`]}
                </div>
                {quantities[`${item.id}`] !== 99 ? (
                  <Icon
                    path={mdiPlus}
                    color={itemColor(item)}
                    onClick={() => {
                      if (quantities[`${item.id}`] < 99) {
                        handleQuantity("inc", item);
                      }
                    }}
                    className="w-[20px] h-[20px] bg-white rounded select-none hover:bg-yellow-200"
                  />
                ) : (
                  <Icon
                    path={mdiPlus}
                    color={`white`}
                    className="w-[20px] h-[20px] bg-gray-500 rounded select-none hover:bg-yellow-200"
                  />
                )}
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(
                    addProduct({
                      item: item,
                      quantity: quantities[`${item.id}`],
                    })
                  );
                  router.push(`/cart`);
                }}
                className={`p-2 font-semibold text-black bg-white rounded shadow-[0_0_3px_rgba(0,0,0,.25)] hover:bg-yellow-200 hover:transition-all transition-all m-auto`}
              >
                Add to Cart
              </button>
            </form>
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
