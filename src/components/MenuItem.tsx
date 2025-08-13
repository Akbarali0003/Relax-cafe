
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface MenuItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const MenuItem = ({ id, name, price, image, description }: MenuItemProps) => {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' so\'m';
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart({
      id,
      name,
      price,
      image
    });
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="group">
      <Link to={`/item/${id}`}>
        <div className="glass-effect rounded-3xl overflow-hidden hover-glow card-3d transform transition-all duration-700 hover:scale-105 relative">
          {/* Heart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isLiked 
                ? 'bg-red-500 text-white scale-110' 
                : 'bg-white/20 backdrop-blur-md text-white hover:bg-red-500/80 hover:scale-110'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>

          {/* Image Container */}
          <div className="relative overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating Badge */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-cafe-orange to-cafe-warm-orange text-cafe-dark px-3 py-1 rounded-full text-sm font-bold floating">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                <span>Relax cafe</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative">
            <h3 className="text-xl font-bold text-cafe-cream mb-2 group-hover:text-cafe-orange transition-colors duration-300">
              {name}
            </h3>
            <p className="text-cafe-cream/70 text-sm mb-4 leading-relaxed line-clamp-2">
              {description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold gradient-text">
                {formatPrice(price)}
              </span>
              
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`btn-premium text-sm px-6 py-3 flex items-center gap-2 ${
                  isAdding ? 'animate-pulse scale-95' : ''
                }`}
              >
                <ShoppingCart className={`w-4 h-4 ${isAdding ? 'animate-bounce' : ''}`} />
                <span>{isAdding ? 'Qo\'shilmoqda...' : 'Savatga'}</span>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-cafe-orange/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
