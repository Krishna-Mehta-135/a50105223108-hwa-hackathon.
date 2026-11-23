import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartProvider';
import { ShoppingCart } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/episodes', label: 'Episodes' },
  { to: '/how-it-calms', label: 'How It Calms' },
  { to: '/build-your-kit', label: 'Build Your Kit' },
  { to: '/cart', label: 'Cart' },
  { to: '/checkout', label: 'Checkout' },
  { to: '/faq', label: 'FAQ' },
];

export function Navbar() {
  const location = useLocation();
  const { itemCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur border-b border-golden/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-golden flex items-center justify-center border-2 border-navy">
            <span className="text-[11px] font-bold text-navy">B</span>
          </div>
          <span className="font-heading text-xl text-navy group-hover:scale-105 transition-transform">Scent Flix</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-navy font-body font-medium text-xs uppercase tracking-wider transition-colors px-4 py-2 rounded-full ${
                location.pathname === link.to ? 'bg-golden text-navy' : 'hover:bg-butter/50 hover:text-golden'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative group">
            <ShoppingCart size={20} className="text-navy group-hover:text-golden transition-colors" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-golden text-navy text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-cream">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
