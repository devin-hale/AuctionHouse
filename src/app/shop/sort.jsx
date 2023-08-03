import Icon from "@mdi/react";
import {
  mdiSortAlphabeticalAscendingVariant,
  mdiSortAlphabeticalDescendingVariant,
  mdiSortAlphabeticalVariant,
  mdiCloseCircle,
  mdiSortAscending,
  mdiSortDescending,
} from "@mdi/js";

export const Sort = ({ sort, setSort }) => {
  const individualCostMultiplier = (itemQuantity, priceG, priceS, priceC) => {
    const totalCopper = (priceG * 10000 + priceS * 100 + priceC) * itemQuantity;
    return totalCopper;
  };

  return (
    <div className="w-[100%] flex flex-row flex-nowrap justify-end">
      <div className="w-[80%]">
        {sort.abc === null ? (
          <div
            onClick={() => {
              setSort({ quality: null, abc: "asc", cost: null });
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
      </div>
    </div>
  );
};
