import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartProvider';
import { Navbar } from '../components/Navbar';
import { BrunoImage } from '../components/BrunoImage';
import { Button } from '../components/Button';
import { PawCursor } from '../components/PawCursor';
import { DoodleIcons } from '../components/DoodleIcons';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 'device',
    name: 'Scent Flix Device',
    price: 2999,
    description:
      'Smart scent enrichment device that releases short, faint bursts of vet-formulated, dog-safe scents. Auto shut off, low concentration, small bursts.',
    image: '/images/bruno-door.jpg',
    features: [
      'Vet formulated, dog-safe scents',
      'Low concentration, small bursts',
      'Auto shut off for safety',
      'Calm episodes: lavender, chamomile, "Your Owner"',
      'Monthly cartridge subscription',
    ],
  },
  {
    id: 'subscription',
    name: 'Monthly Cartridge Subscription',
    price: 799,
    description: 'New scent episodes arrive monthly. Vet-formulated, dog-safe scents. Cancel anytime.',
    image: '/images/bruno-sniff.jpg',
    features: [
      'New episodes every month',
      'Vet formulated and dog-safe',
      'No tea tree, eucalyptus, or pine',
      'Easy cartridge swap',
      'Pause or cancel anytime',
    ],
  },
];

export function ProductPage() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <PawCursor />
      <DoodleIcons />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-butter rounded-full blur-3xl" />
              <div className="relative z-10 w-full h-[500px] bg-white rounded-3xl overflow-hidden border-4 border-navy shadow-2xl flex items-center justify-center">
                <BrunoImage variant="happy" className="w-[300px] h-[300px] object-cover bob" />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h1 ref={headingRef} className="text-5xl md:text-6xl font-heading text-navy leading-tight mb-6">
                Scent Flix Device
              </h1>
              <p className="text-lg text-navy/80 font-body mb-6">
                ₹{products[0].price} &bull; One-time purchase
              </p>
              <p className="text-navy/70 font-body mb-8 leading-relaxed">
                {products[0].description}
              </p>
              <div className="space-y-4 mb-8">
                {products[0].features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-golden font-bold">✓</span>
                    <span className="text-navy/90 font-body">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  addItem(products[0]);
                  navigate('/cart');
                }}
              >
                Add to Cart ₹2,999
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-butter/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading text-navy mb-12 text-center">
            Monthly Cartridge Subscription
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.slice(1).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl p-8 border-4 border-navy shadow-xl flex flex-col"
              >
                <div className="w-24 h-24 bg-white rounded-full border-4 border-golden mb-6 flex items-center justify-center">
                  <BrunoImage variant="sniff" className="w-16 h-16 object-cover" />
                </div>
                <h3 className="text-2xl font-heading text-navy mb-4">{product.name}</h3>
                <p className="text-navy/70 font-body mb-6 flex-1">{product.description}</p>
                <div className="mt-auto pt-6 border-t-2 border-navy/20">
                  <div className="text-3xl font-heading text-navy mb-4">₹{product.price}/month</div>
                  <Button variant="outline" size="md" className="w-full" onClick={() => {
                    addItem(product);
                    navigate('/cart');
                  }}>
                    Subscribe
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-golden text-navy px-6 py-2 rounded-full font-heading text-xl mb-8">
            Vet Approved &bull; Dog Safe
          </div>
          <h2 className="text-4xl font-heading mb-8">Safe for your dog</h2>
          <div className="grid md:grid-cols-3 gap-8 text-navy">
            <div className="flex flex-col items-center gap-4">
              <span className="text-4xl">🐾</span>
              <span className="font-body">No tea tree</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-4xl">👃</span>
              <span className="font-body">No eucalyptus</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-4xl">🦴</span>
              <span className="font-body">No pine</span>
            </div>
          </div>
          <p className="mt-8 text-white/70 text-sm font-body max-w-2xl mx-auto">
            Scent Flix supports calm &mdash; it does not cure or treat anxiety.
            Vet formulated, low concentration, small bursts, auto shut off.
          </p>
        </div>
      </section>
    </div>
  );
}
