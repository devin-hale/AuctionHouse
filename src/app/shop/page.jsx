"use client";
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
    search: "",
  });

  return (
    <div>
      <br></br>
      <div>
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div className="flex flex-row w-[100%]">
        <div
          className={`fixed inset-y-0 inset-x-0 z-10 w-fit sm:w-[20%] sm:relative sm:inset-y-auto sm:inset-x-auto sm:z-10 `}
        >
          <Filters
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
            uniqueTypeFilter={uniqueTypeFilter}
            setUniqueTypeFilter={setUniqueTypeFilter}
            sort={sort}
            setSort={setSort}
          />
        </div>
        <div className={` w-[100%] mb-[100px] sm:w-[80%] sm:mb-[100px]`}>
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
