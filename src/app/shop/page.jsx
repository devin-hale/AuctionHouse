"use client";
import { ProductGrid } from "../components/productGrid";
import { Filters } from "./filter";
import { useState } from "react";
import { Sort } from "./sort";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect } from "react";

const ShoppingPage = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [uniqueTypeFilter, setUniqueTypeFilter] = useState("All");
  const [sort, setSort] = useState({
    quality: null,
    abc: null,
    cost: null,
    search: "",
  });

  const mobileCheck = useMediaQuery("only screen and (max-width : 640px)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(mobileCheck);
  }, [mobileCheck]);

  return (
    <div>
      <br></br>
      <div>
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div className="flex flex-row w-[100%]">
        <div
          className={`${
            !isMobile ? `w-[20%]` : `fixed inset-y-0 inset-x-0 z-10 w-fit`
          }`}
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
        <div className={`${!isMobile ? `w-[80%]` : `w-[100%] mb-[100px]`}`}>
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
