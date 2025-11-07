import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import type { AppDispatch } from "../app/store";
import type { Product } from "../type/Product";

type Props ={
  product: Product;
}

export default function ProductCard({
  product
}: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { id, name, price, image, description } = product;

  return (
    <div className="rounded-xl shadow-lg p-4 flex flex-col gap-3">
      <img src={image} alt={name} className="rounded-lg" />
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-lg font-bold">{price} грн</p>
      <button
        onClick={() => dispatch(addToCart({ id, name, price, image, quantity: 1 }))}
        className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
      >
        Додати в кошик
      </button>
    </div>
  );
}
