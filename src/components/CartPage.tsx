import type { CartItem } from "../types";

interface Props {
  cart: CartItem[];
  onRemove: (id: number) => void;
  onQtyChange: (id: number, qty: number) => void;
  total: number;
}

export default function CartPage({ cart, onRemove, onQtyChange, total }: Props) {
  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-4xl mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900">
        🛒 Your Cart
      </h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-8 sm:py-12 md:py-16">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 opacity-50">🛒</div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {cart.map(item => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Mobile Layout (Stacked) */}
              <div className="flex flex-col sm:hidden space-y-3">
                <div className="flex items-start gap-3">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="h-16 w-16 object-contain bg-gray-50 rounded-lg flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 line-clamp-2 leading-tight">
                      {item.title}
                    </p>
                    <p className="text-blue-600 font-bold text-lg mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onQtyChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onQtyChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-600 hover:text-red-700 text-sm font-medium px-3 py-1 hover:bg-red-50 rounded-md transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Tablet & Desktop Layout (Horizontal) */}
              <div className="hidden sm:flex items-center gap-4 md:gap-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 object-contain bg-gray-50 rounded-lg flex-shrink-0" 
                />
                
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm sm:text-base md:text-lg text-gray-900 line-clamp-2 leading-tight">
                    {item.title}
                  </p>
                  <p className="text-blue-600 font-bold text-lg sm:text-xl md:text-2xl mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => onQtyChange(item.id, item.quantity - 1)}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold transition-colors disabled:opacity-50"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 sm:w-10 text-center font-semibold text-gray-900 text-sm sm:text-base">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onQtyChange(item.id, item.quantity + 1)}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-600 hover:text-red-700 text-sm sm:text-base font-medium px-3 py-2 hover:bg-red-50 rounded-md transition-colors flex-shrink-0"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          {/* Total Section */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 pt-4 sm:pt-6 mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="text-right sm:text-left">
                <p className="text-gray-600 text-sm sm:text-base">Total Amount</p>
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900">
                  ${total.toFixed(2)}
                </p>
              </div>
              
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}