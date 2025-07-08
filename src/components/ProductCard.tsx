import type { Product } from "../types";

interface Props {
  product: Product;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="group relative bg-white border border-gray-200/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden backdrop-blur-sm">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Enhanced image container */}
      <div className="relative mb-3 sm:mb-4 md:mb-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-50 to-gray-100/50 p-2 sm:p-3 md:p-4 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-32 xs:h-36 sm:h-40 md:h-48 w-full mx-auto object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 filter group-hover:brightness-110" 
        />
        {/* Subtle inner glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-lg sm:rounded-xl"></div>
      </div>

      {/* Enhanced typography */}
      <h2 className="relative text-sm sm:text-base font-semibold mt-2 sm:mt-3 md:mt-4 line-clamp-2 text-gray-900 leading-tight tracking-tight group-hover:text-blue-700 transition-colors duration-300">
        {product.title}
      </h2>

      {/* Sophisticated price styling */}
      <p className="relative text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text mt-2 sm:mt-3 tracking-tight">
        ${product.price.toFixed(2)}
      </p>

      {/* Professional button design */}
      <button
        onClick={() => onAdd(product)}
        className="relative w-full mt-3 sm:mt-4 md:mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl overflow-hidden group/btn"
      >
        {/* Button shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
        
        {/* Button content */}
        <span className="relative flex items-center justify-center space-x-1 sm:space-x-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M9 19v.01M20 19v.01" />
          </svg>
          <span className="tracking-wide">Add to Cart</span>
        </span>
      </button>

      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/10 group-hover:to-pink-500/20 transition-all duration-500 pointer-events-none -z-10 blur-sm"></div>
      
      {/* Premium corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/5 to-purple-500/10 rounded-bl-xl sm:rounded-bl-2xl rounded-tr-xl sm:rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}