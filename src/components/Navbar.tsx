import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false); // bosilganda oq bo‘ladi

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // darkmode class toggle qilish
  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'backdrop-blur-xl shadow-2xl'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold gradient-text hover:scale-110 transition-all duration-500 flex items-center gap-3 group"
          >
            <span className="text-shadow-glow">Relax Cafe</span>
          </Link>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className="text-orange-500 p-2 rounded-lg hover:bg-orange-100 transition-all duration-300"
          >
            {isLightMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="mt-2">
          <h1
            className="text-lg font-semibold"
            style={{ color: 'rgba(238, 162, 90, 0.94)' }}
          >
            Developed by{' '}
            <a
              href="https://t.me/Akbarali_070"
              className="hover:underline text-blue-500 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akbarali
            </a>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
