import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DoodleIcons } from '../components/DoodleIcons';
import { PawCursor } from '../components/PawCursor';
import { Button } from '../components/Button';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface LastOrder {
  items: OrderItem[];
  total: number;
  date: string;
}

export function ConfirmationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 8000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const lastOrder: LastOrder | null = (() => {
    try {
      return JSON.parse(localStorage.getItem('scentflix-last-order') || 'null');
    } catch {
      return null;
    }
  })();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center">
      <Navbar />
      <PawCursor />
      <DoodleIcons />

      <div className="max-w-md">
        <div className="w-24 h-24 bg-mint rounded-full flex items-center justify-center mb-8 animate-bounce mx-auto">
          <span className="text-6xl">✓</span>
        </div>
        <h1 className="text-5xl font-heading text-navy mb-4">Purchase Complete!</h1>
        <p className="text-navy/80 font-body mb-10">
          Thank you! Bruno will enjoy his new scent episodes.
        </p>

        {lastOrder && (
          <div className="bg-white rounded-3xl p-8 border-4 border-navy mb-10">
            <h2 className="text-xl font-heading text-navy mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {lastOrder.items.map((item) => (
                <div key={item.id} className="flex justify-between text-navy font-body">
                  <span>{item.name} × {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t-2 border-navy/30 flex justify-between font-heading text-xl text-navy">
                <span>Total</span>
                <span>₹{lastOrder.total}</span>
              </div>
            </div>
          </div>
        )}

        <p className="text-navy/60 text-sm font-body mb-10">
          You&rsquo;ll be redirected to the homepage shortly.
        </p>
        <Button variant="primary" size="lg" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
      </div>

      <Footer />
    </div>
  );
}
