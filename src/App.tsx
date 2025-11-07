import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import { Footer } from "./components/Footer";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import { ProductList } from "./components/ProductList";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-amber-50 text-gray-800">
        <Header />
        {/* Main content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
