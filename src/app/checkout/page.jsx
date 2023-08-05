"use client";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart.value);
  const [addressState, setAddress] = useState(null);
  const [cardState, setCardState] = useState(null);
  const router = useRouter();

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

  const individualCost = (itemQuantity, priceG, priceS, priceC) => {
    const totalCopper = (priceG * 10000 + priceS * 100 + priceC) * itemQuantity;
    const totalG = Math.floor(totalCopper / 10000);
    const totalS = Math.floor((totalCopper - totalG * 10000) / 100);
    const totalC = totalCopper - totalG * 10000 - totalS * 100;
    return { totalG: totalG, totalS: totalS, totalC: totalC };
  };

  const handleInputChange = (e, item) => {
    dispatch(setProductAmount({ item: item, value: e.target.value }));
  };

  const address = [
    { address: `1337 Thrall Street`, city: `Orgrimmar`, region: `Durotar` },
    { address: `805 Wrynn Circle`, city: `Stormwind`, region: `Elwynn Forest` },
    { address: `441 Windrunner Lane`, city: `Undercity`, region: `Lordaeron` },
  ];

  const MapCart = () =>
    cart.map((item) => {
      if (item.amount > 0)
        return (
          <div
            key={item.item.id}
            className={`grid grid-cols-4 min-w-fit bg-gradient-to-t from-gray-200 to-slate-50 text-black border-2 border-solid border-white rounded drop-shadow-[0_2px_4px_rgba(0,0,0,.25)] mt-2 mb-2 sm:p-2 items-center w-[100%] m-auto relative p-6`}
          >
            {/* Item Image */}
            <div
              className={`flex flex-row justify-center translate-x-8 sm:translate-x-0 sm:min-w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,.25)]`}
            >
              <img
                className="m-auto rounded w-[75px] cursor-pointer"
                src={item.item.img}
                style={{ border: `2px solid ${itemColor(item.item)}` }}
                onClick={() => router.push(`/shop/${item.item.id}`)}
                alt=""
              />
            </div>
            {/* Item Name */}
            <div className="min-w-[75px] sm:min-w-[150px] select-none z-0">
              <p
                className={`text-center text-[17.5px] font-frizquad absolute sm:relative w-[100%] inset-x-[-15px] sm:inset-x-auto inset-y-[-15px] sm:inset-y-auto h-fit sm:h-auto sm:text-[25px] sm:w-auto m-4 hover:underline cursor-pointer`}
                style={{ color: `${itemColor(item.item)}` }}
                onClick={() => router.push(`/shop/${item.item.id}`)}
              >
                {item.item.name}
              </p>
            </div>
            {/* Quantity */}
            <div className="min-w-[75px] sm:min-w-[150px] flex flex-row justify-evenly items-center select-none">
              <div className="text-black w-[25px] rounded border-slate-400 border-solid border-2 bg-white text-center">
                {item.amount}
              </div>
            </div>
            {/* Gold Cost */}
            <div className="flex flex-row font-bold flex-wrap sm:flex-nowrap items-center m-2 justify-evenly min-w-[25px] sm:min-w-[125px]">
              <div className="flex flex-row flex-nowrap items-center max-h-[20px] align-middle justify-evenly">
                <p>
                  {
                    individualCost(
                      item.amount,
                      item.item.priceG,
                      item.item.priceS,
                      item.item.priceC
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
                    individualCost(
                      item.amount,
                      item.item.priceG,
                      item.item.priceS,
                      item.item.priceC
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
              <div className="flex flex-row max-h-[20px] align-middle items-center justify-evenly">
                <p>
                  {
                    individualCost(
                      item.amount,
                      item.item.priceG,
                      item.item.priceS,
                      item.item.priceC
                    ).totalC
                  }
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
        );
    });

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

  const paymentMethod = [
    {
      cardName: `Azerothian Express`,
      cardNumber: `XXXX XXXX XXXX 5162`,
      cardExp: `08/25`,
      cardHold: `T. HEEDYR`,
    },
    {
      cardName: `Catapault One`,
      cardNumber: `XXXX XXXX XXXX 8224`,
      cardExp: `04/27`,
      cardHold: `L. JENKINS`,
    },
  ];

  return (
    <div className="flex flex-col items-center mb-[75px]">
      <div className="w-fit m-auto">
        <p className="font-frizquad font-bold">Your Cart:</p>
        <MapCart />
      </div>
      <div className="flex flex-row items-center text-[20px] justify-center w-[65%] sm:w-[85%] m-auto">
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

      <div className="w-fit m-auto">
        <p className="p-1 font-bold underline">Please select your address:</p>

        <div className="flex flex-row flex-wrap">
          {address.map((info) => (
            <div
              key={info.city}
              className="w-fit line-clamp-3 p-1 border-white hover:bg-white hover:text-black cursor-pointer active:scale-[98%] border-2 rounded-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] m-2"
              style={
                addressState === info.city
                  ? { color: `black`, backgroundColor: `white` }
                  : { color: `white`, backgroundColor: `black` }
              }
              onClick={() => setAddress(info.city)}
            >
              <p>{info.address}</p>
              <p>{info.city}</p>
              <p>{info.region}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-fit m-auto">
        <p className="font-bold underline">Choose a payment method:</p>
        <div className="flex flex-row flex-wrap">
          {paymentMethod.map((pay) => (
            <div
              key={pay.cardName}
              className="w-fit line-clamp-4 p-1 border-white hover:bg-white hover:text-black cursor-pointer active:scale-[98%] border-2 rounded-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] m-2"
              style={
                cardState === pay.cardName
                  ? { color: `black`, backgroundColor: `white` }
                  : { color: `white`, backgroundColor: `black` }
              }
              onClick={() => setCardState(pay.cardName)}
            >
              <p>{pay.cardName}</p>
              <p>{pay.cardNumber}</p>
              <p>{pay.cardExp}</p>
              <p>{pay.cardHold}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={` ${
          cardState && addressState
            ? `bg-amber-400`
            : `bg-slate-500 cursor-default`
        } bg-amber-400 p-3 font-bold text-black rounded drop-shadow-[0_2px_4px_rgba(0,0,0,.3)] m-4`}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckOut;
