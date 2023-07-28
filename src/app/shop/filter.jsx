"use client";
import { useEffect } from "react";
import itemData from "./../../data.JSON";
import { useState } from "react";

export const Filters = ({
  typeFilter,
  setTypeFilter,
  uniqueTypeFilter,
  setUniqueTypeFilter,
}) => {
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
        return (
          <div key={slottype}>
            <input
              type="radio"
              checked={uniqueTypeFilter === slottype}
              onClick={() => setUniqueTypeFilter(slottype)}
              name="uniqueTypeFilter"
              id={slottype}
            ></input>
            <label for={slottype}>{slottype}</label>
          </div>
        );
      });

  const ItemTypeMap = () =>
    uniqueItemTypes.map((type) => {
      return (
        <div key={type}>
          <input
            type="radio"
            id={type}
            name="itemTypeFilter"
            checked={typeFilter === type}
            onClick={() => setTypeFilter(type)}
          ></input>
          <label for={type}>{type}</label>
        </div>
      );
    });

  return (
    <div>
      <div>
        <h1>Item Type:</h1>
        <div key="All">
          <input
            type="radio"
            defaultChecked="true"
            id="All"
            name="itemTypeFilter"
            checked={typeFilter === "All"}
            onClick={() => {
              setTypeFilter("All");
              setUniqueTypeFilter("All");
            }}
          ></input>
          <label for="All">All</label>
        </div>
        <ItemTypeMap />
        {typeFilter !== "All" && (
          <div key="All">
            <h2>{typeFilter} Type:</h2>
            <input
              type="radio"
              checked={uniqueTypeFilter === "All"}
              defaultChecked="true"
              onClick={() => setUniqueTypeFilter("All")}
              key="All"
              name="uniqueTypeFilter"
            ></input>
            <label for="All">All</label>
            <UniqueTypeMap />
          </div>
        )}
      </div>
    </div>
  );
};
