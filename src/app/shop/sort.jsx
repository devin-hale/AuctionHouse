import Icon from "@mdi/react";
import {
  mdiSortAlphabeticalAscendingVariant,
  mdiSortAlphabeticalDescendingVariant,
  mdiSortAlphabeticalVariant,
  mdiSort,
  mdiSortAscending,
  mdiSortDescending,
} from "@mdi/js";

export const Sort = ({ sort, setSort }) => {
  const individualCostMultiplier = (itemQuantity, priceG, priceS, priceC) => {
    const totalCopper = (priceG * 10000 + priceS * 100 + priceC) * itemQuantity;
    return totalCopper;
  };

  return (
    <div className="w-[100%] flex flex-row flex-nowrap justify-start">
      <div className="w-[20%]"></div>
      <div className="w-[20%] drop-shadow-[0px_0px_3px_rgba(0,0,0,0.4)] ">
        <input
          className="pl-1 rounded"
          type="text"
          placeholder={`Search`}
          maxLength={25}
          onChange={(e) => setSort({ ...sort, search: `${e.target.value}` })}
        />
      </div>
      <div className="w-[20%] flex flex-row justify-evenly">
        {sort.abc === null ? (
          <div
            onClick={() => {
              setSort({ ...sort, quality: null, abc: "asc", cost: null });
            }}
            className=" cursor-pointer hover:drop-shadow-[0px_0px_3px_rgba(0,0,0,0.4)] bg-white rounded w-fit"
          >
            <Icon
              path={mdiSortAlphabeticalVariant}
              className="w-[25px] select-none "
            />
          </div>
        ) : sort.abc === "asc" ? (
          <div
            onClick={() => setSort({ ...sort, abc: "des" })}
            className=" relative cursor-pointer drop-shadow-[0px_0px_3px_rgba(0,0,0,0.4)] bg-white rounded w-fit"
          >
            <Icon
              path={mdiSortAlphabeticalAscendingVariant}
              className="w-[25px] select-none"
            />
          </div>
        ) : (
          <div
            onClick={() => setSort({ ...sort, abc: null })}
            className=" relative  cursor-pointer drop-shadow-[0px_0px_3px_rgba(0,0,0,0.4)] bg-white rounded w-fit"
          >
            <Icon
              path={mdiSortAlphabeticalDescendingVariant}
              className="w-[25px] select-none"
            />
          </div>
        )}

        {sort.quality === null ? (
          <div
            onClick={() => {
              setSort({ ...sort, quality: "asc", abc: null, cost: null });
            }}
            className=" cursor-pointer font-bold flex flex-row hover:drop-shadow-[0px_0px_3px_rgba(0,0,0,0.4)] bg-white rounded w-fit"
          >
            <p className="select-none">Quality</p>
            <Icon path={mdiSort} className="w-[25px] ml-1  select-none " />
          </div>
        ) : sort.quality === "asc" ? (
          <div
            onClick={() => setSort({ ...sort, quality: "des" })}
            className="cursor-pointer font-bold flex flex-row drop-shadow-[0px_0px_3px_rgba(0,0,0,0.4)] bg-white rounded w-fit"
          >
            <p className="select-none">Quality</p>
            <Icon
              path={mdiSortAscending}
              className="w-[25px] ml-1 select-none"
            />
          </div>
        ) : (
          <div
            onClick={() => setSort({ ...sort, quality: null })}
            className="cursor-pointer font-bold flex flex-row drop-shadow-[0px_0px_3px_rgba(0,0,0,0.4)] bg-white rounded w-fit"
          >
            <p className="select-none">Quality</p>
            <Icon
              path={mdiSortDescending}
              className="w-[25px] ml-1 select-none"
            />
          </div>
        )}

        {sort.cost === null ? (
          <div
            onClick={() => {
              setSort({ ...sort, quality: null, abc: null, cost: "asc" });
            }}
            className=" cursor-pointer font-bold flex flex-row hover:drop-shadow-[0px_0px_3px_rgba(0,0,0,0.4)] bg-white rounded w-fit"
          >
            <p className="select-none">Cost</p>
            <Icon path={mdiSort} className="w-[25px] ml-1  select-none " />
          </div>
        ) : sort.cost === "asc" ? (
          <div
            onClick={() => setSort({ ...sort, cost: "des" })}
            className="cursor-pointer font-bold flex flex-row drop-shadow-[0px_0px_3px_rgba(0,0,0,0.4)] bg-white rounded w-fit"
          >
            <p className="select-none">Cost</p>
            <Icon
              path={mdiSortAscending}
              className="w-[25px] ml-1 select-none"
            />
          </div>
        ) : (
          <div
            onClick={() => setSort({ ...sort, cost: null })}
            className="cursor-pointer font-bold flex flex-row drop-shadow-[0px_0px_3px_rgba(0,0,0,0.4)] bg-white rounded w-fit"
          >
            <p className="select-none">Cost</p>
            <Icon
              path={mdiSortDescending}
              className="w-[25px] ml-1 select-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};
