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
              readOnly
              checked={uniqueTypeFilter === slottype}
              onClick={() => setUniqueTypeFilter(slottype)}
              name="uniqueTypeFilter"
              id={slottype}
            ></input>
            <label htmlFor={slottype}>{slottype}</label>
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
            readOnly
            name="itemTypeFilter"
            checked={typeFilter === type}
            onClick={() => {
              setTypeFilter(type);
              setUniqueTypeFilter("All");
            }}
          ></input>
          <label htmlFor={type}>{type}</label>
        </div>
      );
    });

  return (
    <div className="p-3">
      <div>
        <h1>Item Type:</h1>
        <div key="All">
          <input
            type="radio"
            id="All"
            name="itemTypeFilter"
            checked={typeFilter === "All"}
            readOnly
            onClick={() => {
              setTypeFilter("All");
              setUniqueTypeFilter("All");
            }}
          ></input>
          <label htmlFor="All">All</label>
        </div>
        <ItemTypeMap />
      </div>
      <br></br>
      <div>
        {typeFilter !== "All" && (
          <div key="UniqueAll">
            <h2>{typeFilter} Type:</h2>
            <input
              type="radio"
              checked={uniqueTypeFilter === "All"}
              onClick={() => setUniqueTypeFilter("All")}
              readOnly
              key="UniqueAll"
              id="UniqueAll"
              name="uniqueTypeFilter"
            ></input>
            <label htmlFor="UniqueAll">All</label>
            <UniqueTypeMap />
          </div>
        )}
      </div>
    </div>
  );
};
