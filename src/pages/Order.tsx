import { useCart } from '../context/CartProvider';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BrunoImage } from '../components/BrunoImage';
import { DoodleIcons } from '../components/DoodleIcons';
import { PawCursor } from '../components/PawCursor';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export function OrderPage() {
  const { items, total, itemCount } = useCart();
  const navigate = useNavigate();

  if (itemCount === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <Navbar />
      <PawCursor />
      <DoodleIcons />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading text-navy mb-10">Review Your Order</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-8 border-4 border-navy shadow-xl">
            <h2 className="text-2xl font-heading text-navy mb-6">Items</h2>
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-butter/40 rounded-full flex items-center justify-center flex-shrink-0">
                    <BrunoImage variant="happy" className="w-12 h-12 object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg text-navy">{item.name}</h3>
                    <p className="text-navy/70 font-body text-sm">× {item.quantity}</p>
                  </div>
                  <span className="font-heading text-lg text-navy">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t-2 border-navy/20">
              <div className="flex justify-between font-heading text-xl text-navy mb-4">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between font-body text-sm text-navy/70">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
          </div>

          <div className="bg-butter/40 rounded-3xl p-8 border-4 border-navy shadow-xl">
            <h2 className="text-2xl font-heading text-navy mb-6">Order Total</h2>
            <div className="text-4xl font-heading text-navy mb-8">₹{total}</div>
            <p className="text-navy/70 font-body text-sm mb-8">
              Payment is clearly labelled demo. No card numbers requested.
            </p>
            <Button variant="primary" size="lg" className="w-full" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
