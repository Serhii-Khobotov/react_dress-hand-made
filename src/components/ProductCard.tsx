import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import type { AppDispatch } from "../app/store";
import type { Product } from "../type/Product";
import { useLocalStorage } from "../services/useLocalStorage";
import { useState } from "react";
import classNames from "classnames";

type Props = {
  product: Product;
}

export default function ProductCard({
  product
}: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { id, name, price, image, description } = product;
  const [cart, setCart] = useLocalStorage<Product[]>("cart", []);
  const [inCart, setInCart] = useState(false);

  return (
    <div className="rounded-xl shadow-lg p-4 flex justify-between flex-col gap-3 flex-wrap min-w-5xs">
      <div className="w-full h-150 overflow-hidden ">
        <img src={image} alt={name} className="rounded-lg w-full h-full object-cover object-center" />
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-lg font-bold">{price} грн</p>
      <button
        onClick={() => {
          dispatch(addToCart({ id, name, price, image, quantity: 1 }))
          if (!inCart) {
            setInCart(true);
          }
        }}
        className={classNames("bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition", {"bg-amber-800": inCart})}
      >
        {inCart ? 'В кошику' : 'Додати в кошик'}
      </button>
    </div>
  );
}
