import { ShoppingCart } from "lucide-react";

export const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col items-center justify-center bg-white/70 rounded-lg py-10 gap-y-5 shadow-sm shadow-grey/20">
      <div className="flex w-3/5 h-[170px] ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full rounded-[50%] shadow-sm shadow-grey/70"
        />
      </div>
      <h3 className="w-[85%]  text-center text-md text-grey">{product.name}</h3>
      <div className="flex flex-col items-center">
        <p className="text-lg font-main-sans font-bold text-black/80">
          {product.price} RWF
        </p>

        <button className="flex gap-x-2 text-grey items-center justify-center underline">
          <ShoppingCart className="text-grey" height={15} width={15} /> add to
          cart
        </button>
      </div>
    </div>
  );
};
