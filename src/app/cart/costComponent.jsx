"use client";
import { useSelector } from "react-redux";
import Image from "next/image";

export const CartCost = () => {
  const cart = useSelector((state) => state.cart.value);

  const individualCostMultiplier = (itemQuantity, priceG, priceS, priceC) => {
    const totalCopper = (priceG * 10000 + priceS * 100 + priceC) * itemQuantity;
    return totalCopper;
  };

  const totalCartCopper = cart.reduce(
    (accumulator, currentItem) =>
      accumulator +
      individualCostMultiplier(
        currentItem.amount,
        currentItem.item.priceG,
        currentItem.item.priceS,
        currentItem.item.priceC
      ),
    0
  );

  const totalGoldCostAddUp = (totalCopper) => {
    const totalG = Math.floor(totalCopper / 10000);
    const totalS = Math.floor((totalCopper - totalG * 10000) / 100);
    const totalC = totalCopper - totalG * 10000 - totalS * 100;
    return { totalG: totalG, totalS: totalS, totalC: totalC };
  };

  const taxesTotal = (totalCopper) => {
    return totalCopper * 0.1;
  };

  const shipping = () => {
    return (
      cart.reduce(
        (accumulator, currentItem) => accumulator + currentItem.amount,
        0
      ) * 30000
    );
  };

  const totalCost = (totalCartCopper, taxesTotal, shipping) => {
    return totalGoldCostAddUp(totalCartCopper + taxesTotal + shipping);
  };

  return (
    <div className="w-[100%]">
      <div className="flex flex-row items-center text-[20px] justify-end w-[85%] sm:w-[85%] m-auto">
        <p>Cart Total: </p>
        <div className="sm:flex-nowrap justify-evenly flex flex-row flex-wrap items-center m-2 text-white bg-black border-solid border-2 border-white drop-shadow-[0px_2px_5px_rgba(0,0,0,.25)] p-2 rounded">
          <div className="flex flex-row flex-nowrap items-center max-h-[20px] align-middle justify-evenly">
            <p>{totalGoldCostAddUp(totalCartCopper).totalG}</p>
            <Image
              className="m-auto"
              height={20}
              width={20}
              src="/assets/goldIMG/Gold.webp"
              alt="Gold"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] items-center align-middle justify-evenly ">
            <p>{totalGoldCostAddUp(totalCartCopper).totalS}</p>
            <Image
              height={10}
              width={20}
              src="/assets/goldIMG/Silver.webp"
              alt="Silver"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle items-center justify-evenly">
            <p>{totalGoldCostAddUp(totalCartCopper).totalC}</p>
            <Image
              height={10}
              width={20}
              src="/assets/goldIMG/Copper.webp"
              alt="Copper"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-[20px] justify-end w-[85%] sm:w-[85%] m-auto">
        <p>Shipping: </p>
        <div className="sm:flex-nowrap justify-evenly flex flex-row flex-wrap items-center m-2 text-white bg-black border-solid border-2 border-white drop-shadow-[0px_2px_5px_rgba(0,0,0,.25)] p-2 rounded">
          <div className="flex flex-row flex-nowrap items-center max-h-[20px] align-middle justify-evenly">
            <p>{totalGoldCostAddUp(shipping()).totalG}</p>
            <Image
              className="m-auto"
              height={20}
              width={20}
              src="/assets/goldIMG/Gold.webp"
              alt="Gold"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] items-center align-middle justify-evenly">
            <p>{totalGoldCostAddUp(shipping()).totalS}</p>
            <Image
              height={10}
              width={20}
              src="/assets/goldIMG/Silver.webp"
              alt="Silver"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle items-center justify-evenly">
            <p>{Math.floor(totalGoldCostAddUp(shipping()).totalC)}</p>
            <Image
              height={10}
              width={20}
              src="/assets/goldIMG/Copper.webp"
              alt="Copper"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-[20px] justify-end w-[85%] sm:w-[85%] m-auto">
        <p>Taxes: </p>
        <div className="sm:flex-nowrap justify-evenly flex flex-row flex-wrap items-center m-2 text-white bg-black border-solid border-2 border-white drop-shadow-[0px_2px_5px_rgba(0,0,0,.25)] p-2 rounded">
          <div className="flex flex-row flex-nowrap items-center max-h-[20px] align-middle justify-evenly">
            <p>{totalGoldCostAddUp(taxesTotal(totalCartCopper)).totalG}</p>
            <Image
              className="m-auto"
              height={20}
              width={20}
              src="/assets/goldIMG/Gold.webp"
              alt="Gold"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] items-center align-middle justify-evenly">
            <p>{totalGoldCostAddUp(taxesTotal(totalCartCopper)).totalS}</p>
            <Image
              height={10}
              width={20}
              src="/assets/goldIMG/Silver.webp"
              alt="Silver"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle items-center justify-evenly">
            <p>
              {Math.floor(
                totalGoldCostAddUp(taxesTotal(totalCartCopper)).totalC
              )}
            </p>
            <Image
              height={10}
              width={20}
              src="/assets/goldIMG/Copper.webp"
              alt="Copper"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-[20px] justify-end w-[85%] sm:w-[85%] m-auto">
        <p className="line-clamp-1 font-bold underline">TOTAL: </p>
        <div className="sm:flex-nowrap justify-evenly flex flex-row flex-wrap items-center m-2 text-white bg-black border-solid border-2 border-white drop-shadow-[0px_2px_5px_rgba(0,0,0,.25)] p-2 rounded">
          <div className="flex flex-row flex-nowrap items-center max-h-[20px] align-middle justify-evenly">
            <p>
              {
                totalCost(
                  totalCartCopper,
                  taxesTotal(totalCartCopper),
                  shipping()
                ).totalG
              }
            </p>
            <Image
              className="m-auto"
              height={20}
              width={20}
              src="/assets/goldIMG/Gold.webp"
              alt="Gold"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] items-center align-middle justify-evenly">
            <p>
              {
                totalCost(
                  totalCartCopper,
                  taxesTotal(totalCartCopper),
                  shipping()
                ).totalS
              }
            </p>
            <Image
              height={10}
              width={20}
              src="/assets/goldIMG/Silver.webp"
              alt="Silver"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle items-center justify-evenly">
            <p>
              {Math.floor(
                totalCost(
                  totalCartCopper,
                  taxesTotal(totalCartCopper),
                  shipping()
                ).totalC
              )}
            </p>
            <Image
              height={10}
              width={20}
              src="/assets/goldIMG/Copper.webp"
              alt="Copper"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
