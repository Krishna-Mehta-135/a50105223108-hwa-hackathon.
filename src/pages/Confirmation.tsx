import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DoodleIcons } from '../components/DoodleIcons';
import { PawCursor } from '../components/PawCursor';
import { Button } from '../components/Button';

export function ConfirmationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect home after 8 seconds
    const timer = setTimeout(() => navigate('/'), 8000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center">
      <Navbar />
      <PawCursor />
      <DoodleIcons />

      <div className="max-w-md">
        <div className="w-24 h-24 bg-mint rounded-full flex items-center justify-center mb-8 animate-bounce mx-auto">
          <span className="text-6xl">✓</span>
        </div>
        <h1 className="text-5xl font-heading text-navy mb-4">Order Confirmed!</h1>
        <p className="text-navy/80 font-body mb-10">
          Thank you! Bruno will enjoy his new scent episodes.
        </p>
        <div className="bg-white rounded-3xl p-6 border-4 border-navy mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-navy/70 font-body">Order Number</span>
            <span className="font-heading text-navy">SFX-2024-0001</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-navy/70 font-body">Status</span>
            <span className="font-heading text-navy">Confirmed</span>
          </div>
        </div>
        <p className="text-navy/60 text-sm font-body mb-10">
          You&rsquo;ll be redirected to the homepage shortly.
        </p>
        <Button variant="primary" size="lg" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>

      <Footer />
    </div>
  );
}
