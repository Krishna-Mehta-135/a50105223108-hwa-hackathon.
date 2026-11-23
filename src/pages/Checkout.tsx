import { useState } from 'react';
import { useCart } from '../context/CartProvider';
import { Navbar } from '../components/Navbar';
import { PawCursor } from '../components/PawCursor';
import { DoodleIcons } from '../components/DoodleIcons';
import { Button } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

export function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentStage, setPaymentStage] = useState<'entry' | 'processing' | 'success'>('entry');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStage('processing');
    setTimeout(() => {
      setPaymentStage('success');
      clearCart();
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <Navbar />
        <PawCursor />
        <DoodleIcons />
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-4xl font-heading text-navy">Your cart is empty</h2>
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
        <h1 className="text-4xl font-heading text-navy mb-10">Checkout</h1>

        {paymentStage === 'entry' && (
          <>
            <div className="bg-white rounded-3xl p-8 border-4 border-nagy shadow-xl mb-10">
              <h2 className="text-2xl font-heading text-navy mb-6">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-navy font-body">
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="mt-6 pt-4 border-t-2 border-nagy/30 flex justify-between font-heading text-xl text-navy">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border-4 border-nagy shadow-xl">
              <h2 className="text-2xl font-heading text-navy mb-6">Demo Payment</h2>
              <p className="text-navy/70 font-body mb-6 text-sm">
                This is a demo payment. No card numbers are requested. Complete the animation to place your order.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-body text-navy mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-nagy/30 focus:border-golden focus:outline-none font-body text-navy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-navy mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-nagy/30 focus:border-golden focus:outline-none font-body text-navy"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-navy mb-2">Delivery Address</label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-nagy/30 focus:border-golden focus:outline-none font-body text-navy"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div className="pt-4 border-t-2 border-nagy/20">
                  <p className="text-xs text-navy/60 mb-4 font-body">
                    Demo mode: clicking "Pay" plays a completion animation. No real payment is processed.
                  </p>
                  <Button variant="primary" size="lg" className="w-full" type="submit">
                    Pay ₹{total}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}

        {paymentStage === 'processing' && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 border-8 border-golden border-t-transparent rounded-full animate-[spin_1s_linear_infinite] mb-6" />
            <h2 className="text-3xl font-heading text-navy">Processing your order...</h2>
            <p className="text-navy/70 font-body mt-4">Bruno's scents are on the way!</p>
          </div>
        )}

        {paymentStage === 'success' && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-mint rounded-full flex items-center justify-center mb-8 animate-bounce">
              <span className="text-6xl">✓</span>
            </div>
            <h2 className="text-4xl font-heading text-navy mb-4">Order Placed!</h2>
            <p className="text-navy/70 font-body mb-8">
              Thank you! Bruno will enjoy his new scent episodes.
            </p>
            <Button variant="primary" size="lg" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
