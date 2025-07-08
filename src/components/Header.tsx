import { ShoppingCart } from "lucide-react";

interface Props {
  toggleCart: () => void;
  count: number;
}

export default function Header({ toggleCart, count }: Props) {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white sticky top-0 z-10">
      <h1 className="text-xl font-bold">🛍️ My Store</h1>
      <button onClick={toggleCart} className="relative">
        <ShoppingCart className="w-6 h-6" />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </button>
    </header>
  );
}