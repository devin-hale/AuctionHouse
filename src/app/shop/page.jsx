"use client";
import NavBar from "../components/navBar";
import { ProductGrid } from "../components/productGrid";
import { Filters } from "./filter";
import { useState } from "react";

const ShoppingPage = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  return (
    <>
      <p>This is the shop page.</p>
      <ProductGrid typeFilter={typeFilter} />
      <Filters typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
    </>
  );
};

export default ShoppingPage;
