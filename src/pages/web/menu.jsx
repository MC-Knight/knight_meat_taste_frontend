import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MenuSortButton } from "../../components/card/menu_sort_button";
import { ProductCard } from "../../components/card/product_card";
import toast from "react-hot-toast";

// mutation
import { useGetProductsMutation } from "../../actions/procucts";

//slice
import { setProducts } from "../../slices/products";

function Menu() {
  const location = useLocation();

  const dispatch = useDispatch();
  const [getProducts, { isLoading }] = useGetProductsMutation();

  const getProductsHandler = async () => {
    if (!isLoading) {
      const { data, error } = await getProducts();
      if (error) {
        toast.error("something goes wrong");
      } else if (data) {
        dispatch(setProducts(data));
      }
    }
  };

  const { products } = useSelector((state) => state.products);

  const [allProducts, setAllProducts] = useState(products);
  const [activecategory, setActiveCategory] = useState("");

  const productCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filterProducts = (category) => {
    const newProducts = products.filter(
      (product) => product.category === category
    );

    setAllProducts(newProducts);
    setActiveCategory(category);
  };

  useEffect(() => {
    getProductsHandler();
  }, []);

  return (
    <div
      className={`w-full flex flex-col gap-y-5 py-9 ${
        location.pathname === "/menu" &&
        "bg-secondary/10 bg-menu/10 bg-cover bg-center bg-no-repeat bg-fixed bg-gradient "
      }`}
    >
      <MenuSortButton
        category={productCategories}
        filterItems={filterProducts}
        setItems={setAllProducts}
        activecategory={activecategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-4">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
