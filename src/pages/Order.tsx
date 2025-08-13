
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Order = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' so\'m';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buyurtma ma\'lumotlari:', { formData, items, total: getTotalPrice() });
    setIsSubmitted(true);
    clearCart();
    
    // 3 soniyadan keyin asosiy sahifaga yo'naltirish
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (items.length === 0 && !isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-cafe-cream mb-4">Savat bo'sh</h1>
            <p className="text-cafe-cream/70 mb-6">Buyurtma berish uchun avval savatga mahsulot qo'shing</p>
            <Link to="/" className="text-cafe-orange hover:text-cafe-warm-orange">
              Menyuga qaytish
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center glass-effect p-8 rounded-2xl max-w-md mx-4 animate-bounce-in">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-cafe-cream mb-4">
              Buyurtmangiz qabul qilindi!
            </h1>
            <p className="text-cafe-cream/80 mb-4">
              Administratorlar tez orada siz bilan bog'lanishadi.
            </p>
            <p className="text-cafe-orange text-sm">
              3 soniyadan keyin asosiy sahifaga yo'naltirilasiz...
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-cafe-orange hover:text-cafe-warm-orange mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Orqaga qaytish
          </Link>

          <h1 className="text-3xl font-bold text-cafe-cream mb-8 text-center">
            Buyurtmani rasmiylashtirish
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Form */}
            <div className="glass-effect rounded-2xl p-6 animate-fade-in">
              <h2 className="text-xl font-bold text-cafe-cream mb-6">
                Ma'lumotlaringizni kiriting
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-cafe-cream mb-2">Ismingiz *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-cafe-light-brown/50 border-cafe-light-brown text-cafe-cream placeholder:text-cafe-cream/50"
                    placeholder="To'liq ismingizni kiriting"
                  />
                </div>
                
                <div>
                  <label className="block text-cafe-cream mb-2">Telefon raqam *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-cafe-light-brown/50 border-cafe-light-brown text-cafe-cream placeholder:text-cafe-cream/50"
                    placeholder="+998 (90) 123-45-67"
                  />
                </div>
                
                <div>
                  <label className="block text-cafe-cream mb-2">Yetkazib berish manzili *</label>
                  <Textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="bg-cafe-light-brown/50 border-cafe-light-brown text-cafe-cream placeholder:text-cafe-cream/50"
                    placeholder="To'liq manzilingizni kiriting"
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block text-cafe-cream mb-2">Qo'shimcha izoh</label>
                  <Textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="bg-cafe-light-brown/50 border-cafe-light-brown text-cafe-cream placeholder:text-cafe-cream/50"
                    placeholder="Buyurtma haqida qo'shimcha ma'lumot..."
                    rows={2}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-cafe-orange hover:bg-cafe-warm-orange text-cafe-dark font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105 mt-6"
                >
                  Buyurtmani tasdiqlash
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="glass-effect rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-bold text-cafe-cream mb-6">
                Buyurtma tafsilotlari
              </h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 py-3 border-b border-cafe-light-brown/30">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-cafe-cream font-medium">{item.name}</h3>
                      <p className="text-cafe-cream/70 text-sm">
                        {item.quantity} x {formatPrice(item.price)}
                      </p>
                    </div>
                    <span className="text-cafe-orange font-semibold">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-cafe-light-brown/30 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cafe-cream">Jami taomlar:</span>
                  <span className="text-cafe-cream">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cafe-cream">Yetkazib berish:</span>
                  <span className="text-green-400">Bepul</span>
                </div>
                <div className="border-t border-cafe-light-brown/30 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-cafe-cream">Umumiy summa:</span>
                    <span className="text-xl font-bold gradient-text">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Order;
