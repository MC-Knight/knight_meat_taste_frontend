import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuSortButton } from "../../components/card/menu_sort_button";
import { ProductCard } from "../../components/card/product_card";

function Menu() {
  const location = useLocation();

  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  const product = {
    id: 1,
    name: "burger",
    image: "/assets/images/Chicken_Burger.jpeg",
    price: "4500",
  };

  const product1 = {
    id: 1,
    name: "burger",
    image: "/assets/images/Shawarma.jpeg",
    price: "2500",
  };

  return (
    <div
      className={`w-full flex flex-col gap-y-5 py-9 ${
        location.pathname === "/menu" &&
        "bg-secondary/10 bg-menu/10 bg-cover bg-center bg-no-repeat bg-fixed bg-gradient "
      }`}
    >
      <div className=" sm:w-autow-full md:w-full lg:w-full flex items-center justify-center gap-x-3 overflow-x-scroll">
        <MenuSortButton
          text="All"
          isActive={activeButton === "All"}
          onClick={() => handleButtonClick("All")}
        />
        <MenuSortButton
          text="Main Dishes"
          isActive={activeButton === "Main Dishes"}
          onClick={() => handleButtonClick("Main Dishes")}
        />
        <MenuSortButton
          text="Burger"
          isActive={activeButton === "Burger"}
          onClick={() => handleButtonClick("Burger")}
        />
        <MenuSortButton
          text="Salad"
          isActive={activeButton === "Salad"}
          onClick={() => handleButtonClick("Salad")}
        />

        <MenuSortButton
          text="Wrap"
          isActive={activeButton === "Wrap"}
          onClick={() => handleButtonClick("Wrap")}
        />
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-4">
        <ProductCard product={product} />
        <ProductCard product={product1} />
        <ProductCard product={product} />
        <ProductCard product={product1} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product1} />
      </div>
    </div>
  );
}

export default Menu;
