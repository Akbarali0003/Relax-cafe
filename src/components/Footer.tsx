
import { Heart, Coffee, Instagram, Phone, MapPin, Clock } from 'lucide-react';
import menuData from '@/data/menu.json';

const Footer = () => {
  const { contact_info } = menuData;

  return (
    <footer className="relative mt-20 gradient-bg">
      <div className="absolute inset-0 bg-gradient-to-t from-cafe-dark/95 to-cafe-brown/80 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <Coffee className="w-8 h-8 text-cafe-orange floating" />
              <h3 className="text-2xl font-bold gradient-text">Relax Cafe</h3>
            </div>
            <p className="text-cafe-cream/80 leading-relaxed mb-6">
              Eng mazali va sifatli taomlar bilan sizni kutmoqdamiz.
              Har bir taom - alohida ta'm va his!
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href={contact_info.social_media.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-cafe-orange to-cafe-warm-orange rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 group"
              >
                <img className='w-10 h-10' src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000v" alt="" />
              </a>
              <a
                href={contact_info.social_media.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-cafe-orange to-cafe-warm-orange rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 group text-cafe-dark group-hover:text-white font-bold text-sm"
              >
                <img className='w-10 h-10' src="https://img.icons8.com/?size=100&id=oKHadYScUe2I&format=png&color=000000" alt="" />
              </a>
              <a
                href={contact_info.social_media.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-cafe-orange to-cafe-warm-orange rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 group text-cafe-dark group-hover:text-white font-bold text-sm"
              >
                <img className='w-10 h-10' src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000" alt="" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-cafe-cream mb-6 flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5 text-cafe-orange" />
              Aloqa
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3 text-cafe-cream/80 hover:text-cafe-orange transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contact_info.phone1}`} className="hover:underline">
                  {contact_info.phone1}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-cafe-cream/80 hover:text-cafe-orange transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contact_info.phone2}`} className="hover:underline">
                  {contact_info.phone2}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-cafe-cream/80 hover:text-cafe-orange transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span>{contact_info.location}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-cafe-cream/80 hover:text-cafe-orange transition-colors duration-300">
                <Clock className="w-4 h-4" />
                <span>{contact_info.working_hours}</span>
              </div>
              <div className="bg-gradient-to-r from-cafe-orange/20 to-cafe-warm-orange/20 backdrop-blur-md border border-cafe-orange/30 text-cafe-orange px-4 py-2 rounded-full text-sm font-medium text-center">
                🚚 Yetkazib berish: {contact_info.delivery}
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-cafe-cream mb-6 flex items-center justify-center md:justify-start gap-2">
              <Coffee className="w-5 h-5 text-cafe-orange" />
              Ijtimoiy tarmoqlar
            </h4>
            <div className="space-y-3">
              <a
                // href={contact_info.social_media.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-cafe-cream/80 hover:text-cafe-orange transition-colors duration-300 hover:underline"
              >
                <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="" />
                <span>Instagram</span>
              </a>
              <a
                // href={contact_info.social_media.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-cafe-cream/80 hover:text-cafe-orange transition-colors duration-300 hover:underline"
              >
                <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=oKHadYScUe2I&format=png&color=000000" alt="" />
                <span>TikTok</span>
              </a>
              <a
                // href={contact_info.social_media.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-cafe-cream/80 hover:text-cafe-orange transition-colors duration-300 hover:underline"
              >

                <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000" alt="" />

                <span>Telegram kanal</span>
              </a>
              <a
                // href={contact_info.social_media.telegram_group}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-cafe-cream/80 hover:text-cafe-orange transition-colors duration-300 hover:underline"
              >
                <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000" alt="" />
                <span>Telegram guruh</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cafe-light-brown/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cafe-cream/60 text-center md:text-left">
              © 2024 Relax Cafe. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex items-center space-x-2 text-cafe-cream/80">
              <span>Developed by</span>
              <a
                href="https://t.me/Akbarali_070"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cafe-orange hover:text-cafe-warm-orange transition-colors duration-300 font-medium hover:underline"
              >
                Akbarali_070
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
