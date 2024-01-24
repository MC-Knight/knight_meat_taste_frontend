import { Bike } from "lucide-react";
import { CartItem } from "../../components/card/cart_item";

const product = {
  id: 1,
  name: "burger",
  image: "/assets/images/Chicken_Burger.jpeg",
  price: "4500",
};

const product1 = {
  id: 1,
  name: "Shawarma Wrap",
  image: "/assets/images/Shawarma.jpeg",
  price: "2500",
};
function Cart() {
  return (
    <div className="w-full h-auto py-5 flex items-center justify-center">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold text-secondary">Your cart</h2>
        <ul className="flex flex-col divide-y">
          <CartItem product={product} />
          <CartItem product={product1} />
        </ul>
        <div className="space-y-1 text-right text-grey">
          <p>
            Total amount:
            <span className="font-semibold ml-1 ">7000 RWF</span>
          </p>
          <p className="flex items-center justify-end gap-x-2 text-sm text-grey text-right">
            <Bike /> free delivery
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md text-primary bg-secondary"
          >
            <span className="sr-onlysm:not-sr-only">Continue to </span>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
