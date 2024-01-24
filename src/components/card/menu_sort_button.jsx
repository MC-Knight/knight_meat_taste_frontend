import { useSelector } from "react-redux";

export const MenuSortButton = ({
  category,
  filterItems,
  setItems,
  setActiveCategory,
  activecategory,
}) => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className=" sm:w-auto w-full md:w-full lg:w-full flex items-center justify-center gap-x-3 overflow-x-auto">
      {category.map((val) => (
        <button
          key={val}
          onClick={() => filterItems(val)}
          className={`w-auto flex items-center justify-center px-3 py-1 rounded-md bg-primary text-grey shadow-sm shadow-grey/10 border border-grey/20 ${
            activecategory === val && "bg-secondary/90 text-primary"
          }`}
        >
          {val}
        </button>
      ))}

      <button
        onClick={() => {
          setItems(products);
          setActiveCategory("All");
        }}
        activeCategory="All"
        className={`w-auto flex items-center justify-center px-3 py-1 rounded-md bg-primary text-grey shadow-sm shadow-grey/10 border border-grey/20 `}
      >
        All
      </button>
    </div>
  );
};
