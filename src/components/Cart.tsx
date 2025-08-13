
import { useState } from 'react';
import { ShoppingCart, X, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' so\'m';
  };

  const handleOrder = () => {
    setIsOpen(false);
    navigate('/order');
  };

  const totalItems = getTotalItems();

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-cafe-orange hover:bg-cafe-warm-orange text-cafe-dark p-4 rounded-full shadow-lg hover:shadow-cafe-orange/30 transition-all duration-300 hover:scale-110 group"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce-in">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cafe-brown border-l border-cafe-light-brown shadow-2xl animate-slide-up">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-cafe-light-brown/30">
                <h2 className="text-xl font-bold text-cafe-cream">Savat</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-cafe-cream hover:text-cafe-orange transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center text-cafe-cream/70 py-8">
                    <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Savat bo'sh</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="glass-effect rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-cafe-cream font-medium">{item.name}</h3>
                            <p className="text-cafe-orange font-semibold">
                              {formatPrice(item.price)}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-cafe-cream hover:text-cafe-orange transition-colors duration-300"
                            >
                              -
                            </button>
                            <span className="text-cafe-cream font-medium px-2">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-cafe-cream hover:text-cafe-orange transition-colors duration-300"
                            >
                              <Plus size={16} />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-400 hover:text-red-300 ml-2 transition-colors duration-300"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-cafe-light-brown/30 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-cafe-cream">Jami:</span>
                    <span className="text-xl font-bold gradient-text">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                  <Button
                    onClick={handleOrder}
                    className="w-full bg-cafe-orange hover:bg-cafe-warm-orange text-cafe-dark font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Buyurtma berish
                  </Button>
                </div>
              )}
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Cart;
