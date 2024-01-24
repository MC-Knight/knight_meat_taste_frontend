import { Trash } from "lucide-react";

export const CartItem = ({ product }) => {
  return (
    <li
      key={product.id}
      className="flex flex-col py-6 sm:flex-row sm:justify-between"
    >
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none sm:w-32 sm:h-32"
          src={product.image}
          alt={product.name}
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg text-grey font-semibold leadi sm:pr-8">
                {product.name}
              </h3>
            </div>
            <div className="text-right">
              <p className="text-lg text-grey font-semibold">
                {product.price} RWF
              </p>
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button
              type="button"
              className="flex text-grey items-center px-2 py-1 pl-0 space-x-1"
            >
              <Trash width={15} height={15} />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
