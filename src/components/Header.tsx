import { Link } from "react-router";

export function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-amber-700">
        Dress Hand Made
      </Link>
      <nav className="flex gap-6">
        <Link
          to="/"
          className="hover:text-amber-600 transition-colors duration-200"
        >
          Головна
        </Link>
        <Link
          to="/products"
          className="hover:text-amber-600 transition-colors duration-200"
        >
          Каталог
        </Link>
        <Link
          to="/cart"
          className="hover:text-amber-600 transition-colors duration-200"
        >
          Кошик
        </Link>
        <Link
          to="/about"
          className="hover:text-amber-600 transition-colors duration-200"
        >
          Про бренд
        </Link>
      </nav>
    </header>
  )
}
