
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cafe-dark">
      <div className="text-center glass-effect p-8 rounded-2xl max-w-md mx-4 animate-bounce-in">
        <div className="text-6xl mb-4">🍽️</div>
        <h1 className="text-4xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-cafe-cream mb-4">Sahifa topilmadi</p>
        <p className="text-cafe-cream/70 mb-6">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-cafe-orange hover:bg-cafe-warm-orange text-cafe-dark font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
        >
          <Home size={18} />
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
