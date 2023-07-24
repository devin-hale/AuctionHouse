"use client";
import Image from "next/image";
import { ProductGrid } from "../pages/components/productGrid";
import { Provider } from "react-redux";
import { store } from './../stores/cart.js'


export default function Home() {
  return (
      <Provider store={store}>
        <ProductGrid />
      </Provider>
  );
}
