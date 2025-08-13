
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MenuItem from '@/components/MenuItem';
import Cart from '@/components/Cart';
import { Sparkles, Clock, Star, ChefHat, Truck, Trophy, Phone, MapPin } from 'lucide-react';
import { useMenuData } from '@/hooks/useMenuData';
import ScrollToTop from '@/components/ScrollToTop';



const Index = () => {
  const { menuData, loading, error } = useMenuData();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {
    if (menuData) {
      if (selectedCategory === 'all') {
        setMenuItems(menuData.items);
      } else {
        setMenuItems(menuData.items.filter(item => item.category === selectedCategory));
      }
    }
  }, [selectedCategory, menuData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cafe-orange mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-cafe-cream mb-2">Ma'lumotlar yuklanmoqda...</h2>
          <p className="text-cafe-cream/70">Iltimos, kuting</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center glass-effect p-8 rounded-2xl max-w-md mx-4">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-cafe-cream mb-4">Xatolik yuz berdi</h2>
          <p className="text-cafe-cream/70 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-premium px-6 py-3"
          >
            Qayta yuklash
          </button>
        </div>
      </div>
    );
  }

  if (!menuData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cafe-cream mb-2">Ma'lumotlar topilmadi</h2>
        </div>
      </div>
    );
  }

  const { contact_info } = menuData;

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cafe-dark/30 to-cafe-dark/70"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-cafe-orange/30">
          <Sparkles className="w-12 h-12 floating" style={{ animationDelay: '0s' }} />
        </div>
        <div className="absolute top-40 right-20 text-cafe-warm-orange/30">
          <ChefHat className="w-16 h-16 floating" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-40 left-20 text-cafe-gold/30">
          <Star className="w-10 h-10 floating" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-12">
              <span className="bg-gradient-to-r from-cafe-orange/20 to-cafe-warm-orange/20 backdrop-blur-md border border-cafe-orange/30 text-cafe-orange px-6 py-2 rounded-full text-sm font-medium">
                ✨ Eng mazali taomlar
              </span>
            </div>

            <h1 className="h-[150px] text-6xl md:text-8xl font-bold gradient-text mb-8 text-shadow-glow leading-tight">
              Relax Cafe
            </h1>

            <p className="text-xl md:text-2xl text-cafe-cream/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Har bir taom - alohida ta'm va his! Premium sifatli ingredientlar va
              professional oshpazlar bilan tayyorlangan noyob lazzatlar.
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="glass-effect rounded-2xl p-6 border-glow">
                <MapPin className="w-6 h-6 text-cafe-orange mx-auto mb-3" />
                <h3 className="text-cafe-cream font-semibold mb-2">Manzil</h3>
                <p className="text-cafe-cream/80 text-sm">{contact_info.location}</p>
              </div>

              <div className="glass-effect rounded-2xl p-6 border-glow">
                <Phone className="w-6 h-6 text-cafe-orange mx-auto mb-3" />
                <h3 className="text-cafe-cream font-semibold mb-2">Buyurtma uchun</h3>
                <p className="text-cafe-cream/80 text-sm">
                  <a href={`tel:${contact_info.phone1}`} className="hover:text-cafe-orange transition-colors">
                    {contact_info.phone1}
                  </a>
                </p>
                <p className="text-cafe-cream/80 text-sm">
                  <a href={`tel:${contact_info.phone2}`} className="hover:text-cafe-orange transition-colors">
                    {contact_info.phone2}
                  </a>
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-6 border-glow">
                <Clock className="w-6 h-6 text-cafe-orange mx-auto mb-3" />
                <h3 className="text-cafe-cream font-semibold mb-2">Ish vaqti</h3>
                <p className="text-cafe-cream/80 text-sm">{contact_info.working_hours}</p>
                <span className="inline-block mt-2 bg-gradient-to-r from-cafe-orange/20 to-cafe-warm-orange/20 text-cafe-orange px-3 py-1 rounded-full text-xs">
                  🚚 {contact_info.delivery}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#categories"
                className="btn-premium text-lg px-10 py-5 flex items-center gap-3"
              >
                <ChefHat className="w-5 h-5" />
                Menyuni ko'rish
              </a>

              <div className="flex items-center gap-6 text-cafe-cream/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cafe-orange" />
                  <span>15-30 daqiqa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-cafe-gold fill-current" />
                  <span>4.9 reyting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, number: '1000+', label: 'Mamnun mijozlar' },
              { icon: ChefHat, number: '50+', label: 'Premium taomlar' },
              { icon: Star, number: '4.9', label: 'Yulduzli reyting' },
              { icon: Truck, number: '24/7', label: 'Yetkazib berish' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-effect rounded-2xl p-6 hover-glow">
                  <stat.icon className="w-8 h-8 text-cafe-orange mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold gradient-text mb-2">{stat.number}</h3>
                  <p className="text-cafe-cream/70 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl h-[55px] md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
              Kategoriyalar
            </h2>
            <p className="text-xl text-cafe-cream/80 max-w-2xl mx-auto animate-fade-in">
              Har bir kategoriyada eng sifatli va mazali taomlarni topasiz
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-8 py-4 rounded-2xl font-medium transition-all duration-500 hover:scale-105 border-2 ${selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cafe-orange to-cafe-warm-orange text-cafe-dark border-cafe-orange shadow-lg shadow-cafe-orange/30'
                : 'glass-effect text-cafe-cream hover:text-cafe-orange border-cafe-light-brown/30 hover:border-cafe-orange/50'
                }`}
            >
              🍽️ Barchasi
            </button>
            {menuData.categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-2xl font-medium transition-all duration-500 hover:scale-105 border-2 animate-fade-in ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cafe-orange to-cafe-warm-orange text-cafe-dark border-cafe-orange shadow-lg shadow-cafe-orange/30'
                  : 'glass-effect text-cafe-cream hover:text-cafe-orange border-cafe-light-brown/30 hover:border-cafe-orange/50'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MenuItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            Nega Relax Cafe?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Premium Sifat',
                description: 'Eng sifatli mahsulotlar va professional oshpazlarimiz bilan tayyorlangan taomlar'
              },
              {
                icon: '⚡',
                title: 'Tez Yetkazib Berish',
                description: '15-30 daqiqada issiq va mazali taomlaringizni eshigingizgacha yetkazamiz'
              },
              {
                icon: '❤️',
                title: 'Mijozlar Sevgisi',
                description: '1000+ mamnun mijozlar va 4.9 yulduzli reyting - sifatimizning isboti'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-effect rounded-3xl p-8 hover-glow card-3d">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500 floating">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-cafe-cream mb-4 gradient-text">
                    {feature.title}
                  </h3>
                  <p className="text-cafe-cream/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto border-glow">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Buyurtma berish uchun tayyor?
            </h2>
            <p className="text-xl text-cafe-cream/80 mb-8">
              Hoziroq eng mazali taomlarni buyurtma qiling va premium ta'mni his eting!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={`tel:${contact_info.phone1}`}
                className="btn-premium text-lg px-8 py-4 inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                {contact_info.phone1}
              </a>
              <a
                href={`tel:${contact_info.phone2}`}
                className="btn-premium text-lg px-8 py-4 inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                {contact_info.phone2}
              </a>
            </div>
            <a
              href="#categories"
              className="btn-premium text-lg px-10 py-5 inline-flex items-center gap-3"
            >
              <ChefHat className="w-5 h-5" />
              Menyuni ko'rish
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <Cart />
    </div>
  );
};

export default Index;
