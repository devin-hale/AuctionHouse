import Link from "next/link";

const NavBar = () => {
    return <>
    <div className=" w-[80%] border-2 flex flex-row justify-evenly border-white border-solid">
        <Link className="hover:bg-red-300" href="/">Home</Link>
        <Link className="hover:bg-red-300" href="/shop">Shop</Link>
        <Link className="hover:bg-red-300" href="/cart">Cart</Link>
    </div>
    </>
}

export default NavBar;