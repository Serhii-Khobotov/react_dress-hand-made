import { useSelector } from "react-redux"
import type { Product } from "../type/Product"
import ProductCard from "./ProductCard"

export function ProductList() {
  const products = useSelector((state: { products: Product[] }) => state.products);
  console.log(products)

  return (
    <div className="bg-amber-50">
      <h1 className="text-4xl text-center">Наші товари</h1>
      <div className="flex flex-wrap">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
