"use client";
import NavBar from "../components/navBar";
import { ProductGrid } from "../components/productGrid";
import { Filters } from "./filter";
import { useState } from "react";
import { Sort } from "./sort";

const ShoppingPage = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [uniqueTypeFilter, setUniqueTypeFilter] = useState("All");
  const [sort, setSort] = useState({
    quality: null,
    abc: null,
    cost: null,
    search: null,
  });
  return (
    <div>
      <br></br>
      <Sort sort={sort} setSort={setSort} />
      <div className="flex flex-row w-[100%]">
        <div className="w-[20%]">
          <Filters
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
            uniqueTypeFilter={uniqueTypeFilter}
            setUniqueTypeFilter={setUniqueTypeFilter}
            sort={sort}
            setSort={setSort}
          />
        </div>
        <div className="w-[80%]">
          <ProductGrid
            typeFilter={typeFilter}
            uniqueTypeFilter={uniqueTypeFilter}
            sort={sort}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
