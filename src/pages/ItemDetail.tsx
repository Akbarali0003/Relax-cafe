
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import { useMenuData } from '@/hooks/useMenuData';

const ItemDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { menuData, loading, error } = useMenuData();

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cafe-orange mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-cafe-cream mb-2">Ma'lumotlar yuklanmoqda...</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !menuData) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-cafe-cream mb-4">Xatolik yuz berdi</h1>
            <Link to="/" className="text-cafe-orange hover:text-cafe-warm-orange">
              Asosiy sahifaga qaytish
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const item = menuData.items.find(item => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-cafe-cream mb-4">Taom topilmadi</h1>
            <Link to="/" className="text-cafe-orange hover:text-cafe-warm-orange">
              Asosiy sahifaga qaytish
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' so\'m';
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-cafe-orange hover:text-cafe-warm-orange mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Orqaga qaytish
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <div className="animate-fade-in">
              <div className="glass-effect rounded-2xl overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass-effect rounded-2xl p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-cafe-cream mb-4">
                  {item.name}
                </h1>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center space-x-1 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-cafe-orange fill-current" />
                    ))}
                  </div>
                  <span className="text-cafe-cream/70">(4.8/5 - 124 baho)</span>
                </div>

                <p className="text-cafe-cream/80 text-lg mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-cafe-cream mb-3">Tarkibi:</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ingredient, index) => (
                      <span 
                        key={index}
                        className="bg-cafe-light-brown/50 text-cafe-cream px-3 py-1 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-cafe-light-brown/30 pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold gradient-text">
                      {formatPrice(item.price)}
                    </span>
                    
                    <div className="flex items-center space-x-3">
                      <span className="text-cafe-cream">Miqdor:</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 rounded-full bg-cafe-light-brown hover:bg-cafe-orange text-cafe-cream hover:text-cafe-dark transition-all duration-300 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="text-cafe-cream font-medium w-8 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 rounded-full bg-cafe-light-brown hover:bg-cafe-orange text-cafe-cream hover:text-cafe-dark transition-all duration-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    className="w-full bg-cafe-orange hover:bg-cafe-warm-orange text-cafe-dark font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 text-lg"
                  >
                    <ShoppingCart size={20} />
                    Savatga qo'shish ({formatPrice(item.price * quantity)})
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Cart />
    </div>
  );
};

export default ItemDetail;
