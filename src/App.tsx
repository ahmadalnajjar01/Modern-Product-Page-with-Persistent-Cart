import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Product } from "./types";
import { useCart } from "./hooks/useCart";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/CartPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function AppContent() {
  const [showCart, setShowCart] = useState(false);
  const { cart, addToCart, removeFromCart, changeQuantity, totalQuantity, totalPrice } = useCart();

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => axios.get("https://fakestoreapi.com/products").then(res => res.data),
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header toggleCart={() => setShowCart(!showCart)} count={totalQuantity} />
      {showCart ? (
        <CartPage
          cart={cart}
          onRemove={removeFromCart}
          onQtyChange={changeQuantity}
          total={totalPrice}
        />
      ) : (
        <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            products?.map(product => (
              <ProductCard key={product.id} product={product} onAdd={addToCart} />
            ))
          )}
        </main>
      )}
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
