"use client";
import NavBar from "../components/navBar";
import { ProductGrid } from "../components/productGrid";
import { Filters } from "./filter";
import { useState } from "react";

const ShoppingPage = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [uniqueTypeFilter, setUniqueTypeFilter] = useState("All");
  return (
    <div>
      <br></br>
      <div className="flex flex-row w-[100%]">
        <div className="w-[20%]">
          <Filters
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
            uniqueTypeFilter={uniqueTypeFilter}
            setUniqueTypeFilter={setUniqueTypeFilter}
          />
        </div>
        <div className="w-[80%]">
          <ProductGrid
            typeFilter={typeFilter}
            uniqueTypeFilter={uniqueTypeFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
