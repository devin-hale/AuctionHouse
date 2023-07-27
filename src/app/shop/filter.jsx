"use client";
import { useEffect } from "react";
import itemData from "./../../data.JSON";
import { useState } from "react";

export const Filters = ({ typeFilter, setTypeFilter }) => {
  const itemDB = itemData;

  const itemTypeMap = itemDB.items.map((item) => item.itemtype);

  const uniqueItemTypes = itemTypeMap.filter(
    (item, index, arr) => arr.indexOf(item) === index
  );

  const UniqueTypeMap = () =>
    itemDB.items
      .filter((item) => item.itemtype == typeFilter)
      .map((itm) => itm.type)
      .filter((it, index, arr) => arr.indexOf(it) === index)
      .map((slottype) => {
        return <div key={slottype}>{slottype}</div>;
      });

  const ItemTypeMap = () =>
    uniqueItemTypes.map((type) => {
      return (
        <div key={type}>
          <p onClick={() => setTypeFilter(type)}>{type}</p>
        </div>
      );
    });

  return (
    <div>
      <div>
        <p>Item Type:</p>
        <div>
          <p onClick={() => setTypeFilter("All")}>All</p>
        </div>
        <ItemTypeMap />
        {typeFilter === "All" ? null : <UniqueTypeMap />}
      </div>
    </div>
  );
};
