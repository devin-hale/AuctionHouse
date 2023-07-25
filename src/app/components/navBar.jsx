"use client"
import Link from "next/link";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";


const NavBar = () => {
    const cart = useSelector(state => state.cart.value)

    const cartAmount = cart.reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0)

    return <>
    <div className=" w-[80%] border-2 flex flex-row justify-evenly border-white border-solid m-auto">
        <Link className="hover:bg-red-300" href="/">Home</Link>
        <Link className="hover:bg-red-300" href="/shop">Shop</Link>
        <Link className="hover:bg-red-300" href="/cart">Cart ({cartAmount})</Link>
    </div>
    </>
}

export default NavBar;