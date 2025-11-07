import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import {
  removeFromCart,
  clearCart,
  setCartItems,
  type CartItem,
} from "../features/cart/cartSlice";
import { useLocalStorage } from "../services/useLocalStorage";

export default function CartPage() {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const hasLoaded = useRef(false); // ✅ щоб не зберігати, поки не відновили

  // ✅ 1. Відновлюємо кошик з localStorage лише при завантаженні
  useEffect(() => {
    if (!hasLoaded.current) {
      if (cart.length > 0) {
        dispatch(setCartItems(cart));
      }
      hasLoaded.current = true;
    }
  }, [cart, dispatch]);

  // ✅ 2. Зберігаємо кошик тільки після початкового відновлення
  useEffect(() => {
    if (hasLoaded.current) {
      setCart(items);
    }
  }, [items, setCart]);

  if (!items.length) {
    return <p className="text-center mt-10 text-gray-600">Кошик порожній</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Ваш кошик</h2>

      {items.map((i) => (
        <div
          key={i.id}
          className="flex justify-between items-center mb-4 border-b pb-2"
        >
          <div className="flex items-center gap-4">
            <img
              src={i.image}
              alt={i.name}
              className="w-20 h-20 rounded object-cover"
            />
            <div>
              <p className="font-medium">{i.name}</p>
              <p className="text-sm text-gray-500">Кількість: {i.quantity}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="font-semibold">{i.price * i.quantity} грн</span>
            <button
              onClick={() => dispatch(removeFromCart(i.id))}
              className="ml-4 text-red-600 hover:text-red-800 transition"
            >
              ✕
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-6 font-bold text-lg">
        <span>Загалом:</span>
        <span>{total} грн</span>
      </div>

      <button
        onClick={() => dispatch(clearCart())}
        className="mt-6 w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition"
      >
        Очистити кошик
      </button>
    </div>
  );
}