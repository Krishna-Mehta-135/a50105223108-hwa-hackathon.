import { useCart } from '../context/CartProvider';
import { Navbar } from '../components/Navbar';
import { PawCursor } from '../components/PawCursor';
import { DoodleIcons } from '../components/DoodleIcons';
import { BrunoImage } from '../components/BrunoImage';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total, itemCount } = useCart();
  const navigate = useNavigate();

  if (itemCount === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <Navbar />
        <PawCursor />
        <DoodleIcons />
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-4xl font-heading text-navy mb-4">Your cart is empty</h2>
          <p className="text-navy/70 font-body mb-8">Bruno is waiting for his scent bursts!</p>
          <Button variant="primary" size="lg" asChild>
            <Link to="/product">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <Navbar />
      <PawCursor />
      <DoodleIcons />
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-heading text-navy">Your Cart</h1>
          <Button variant="outline" size="sm" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-6 border-4 border-navy shadow-xl flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-24 h-24 bg-butter/40 rounded-full flex items-center justify-center flex-shrink-0">
                <BrunoImage variant="happy" className="w-16 h-16 object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-heading text-navy mb-2">{item.name}</h3>
                <p className="text-navy/70 font-body mb-4">₹{item.price} each</p>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="w-auto"
                  >
                    −
                  </Button>
                  <span className="font-bold text-navy">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-auto"
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-heading text-navy">{item.price * item.quantity}</div>
                <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)} className="w-auto mt-2">
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-butter/40 rounded-3xl p-8 border-4 border-navy">
          <div className="flex justify-between mb-6">
            <span className="text-2xl font-heading text-navy">Total</span>
            <span className="text-3xl font-heading text-navy">₹{total}</span>
          </div>
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
