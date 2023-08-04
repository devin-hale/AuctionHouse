"use client";
import itemData from "./../../data.JSON";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiFilter, mdiClose } from "@mdi/js";
import "./filter.css";

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

  const [mobileShow, setMobileShow] = useState(false);

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
            <label htmlFor={slottype}> {slottype}</label>
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
          <label htmlFor={type}> {type} </label>
        </div>
      );
    });

  return (
    <>
      {/** Desktop Filter */}
      <div className="hidden sm:block p-2 m-2 rounded drop-shadow-[0_2px_5px_rgba(0,0,0,.25)] transition-transform bg-white">
        <div>
          <div className="flex-nowrap flex flex-row font-semibold underline">
            <Icon path={mdiFilter} className="w-[20px]" />
            Filters
          </div>
        </div>
        <div>
          <h1 className="font-bold underline">Item Type:</h1>
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
            <label htmlFor="All"> All</label>
          </div>
          <ItemTypeMap />
        </div>
        <br></br>
        {/** Unique Item type */}

        {typeFilter !== "All" && (
          <div key="UniqueAll">
            <h2 className="font-bold underline">{typeFilter} Type:</h2>
            <input
              type="radio"
              checked={uniqueTypeFilter === "All"}
              onClick={() => setUniqueTypeFilter("All")}
              readOnly
              key="UniqueAll"
              id="UniqueAll"
              name="uniqueTypeFilter"
            ></input>
            <label htmlFor="UniqueAll"> All</label>
            <UniqueTypeMap />
          </div>
        )}
      </div>
      {/** Mobile Filter */}
      <div
        className="block sm:hidden p-2 m-2 rounded drop-shadow-[0_2px_5px_rgba(0,0,0,.25)] transition-all bg-white"
        style={mobileShow ? { width: `97vw` } : { width: `fit-content` }}
      >
        <div>
          <div className="flex-nowrap flex flex-row font-semibold underline">
            <Icon
              path={mdiFilter}
              className="w-[20px] cursor-pointer"
              onClick={
                mobileShow
                  ? () => {
                      setMobileShow(false);
                    }
                  : () => {
                      setMobileShow(true);
                    }
              }
            />
          </div>
        </div>
        {mobileShow && (
          <div className="transition-all">
            <div className="flex-nowrap fixed top-0 right-[10px] flex flex-row font-semibold underline">
              <Icon
                path={mdiClose}
                color="red"
                className="w-[40px] cursor-pointer"
                onClick={() => {
                  setMobileShow(false);
                }}
              />
            </div>
            <div>
              <h1 className="font-bold underline">Item Type:</h1>
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
                <label htmlFor="All"> All</label>
              </div>
              <ItemTypeMap />
            </div>
            <br></br>
            {/** Unique Item type */}

            {typeFilter !== "All" && (
              <div key="UniqueAll">
                <h2 className="font-bold underline">{typeFilter} Type:</h2>
                <input
                  type="radio"
                  checked={uniqueTypeFilter === "All"}
                  onClick={() => setUniqueTypeFilter("All")}
                  readOnly
                  key="UniqueAll"
                  id="UniqueAll"
                  name="uniqueTypeFilter"
                ></input>
                <label htmlFor="UniqueAll"> All</label>
                <UniqueTypeMap />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
