import { useState } from 'react';
import { useCart } from '../context/CartProvider';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BrunoImage } from '../components/BrunoImage';
import { DoodleIcons } from '../components/DoodleIcons';
import { PawCursor } from '../components/PawCursor';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';

interface KitItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const kitItems: KitItem[] = [
  {
    id: 'device',
    name: 'Scent Flix Device',
    price: 2999,
    description: 'Smart scent enrichment device with auto shut off.',
    image: '/images/bruno-door.jpg',
  },
  {
    id: 'subscription',
    name: 'Monthly Cartridge Subscription',
    price: 799,
    description: 'New scent episodes every month. Cancel anytime.',
    image: '/images/bruno-sniff.jpg',
  },
  {
    id: 'lavender',
    name: 'Calm Lavender Cartridge',
    price: 499,
    description: 'Lavender scent for calm evenings.',
    image: '/images/bruno-sleep.jpg',
  },
  {
    id: 'chamomile',
    name: 'Chamomile Cartridge',
    price: 499,
    description: 'Gentle chamomile for relaxation.',
    image: '/images/bruno-happy.jpg',
  },
  {
    id: 'owner',
    name: '"Your Owner" Scent Pad',
    price: 399,
    description: "Owner's familiar scent for comfort.",
    image: '/images/bruno-jump.jpg',
  },
];

export function BuildYourKitPage() {
  const { addItem } = useCart();
  const [selected, setSelected] = useState<Record<string, number>>({});

  const handleAdd = (item: KitItem) => {
    setSelected((prev) => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
    addItem(item);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <PawCursor />
      <DoodleIcons />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Build Your Kit"
            subtitle="Choose your device, subscription, and favorite scent cartridges."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {kitItems.map((item) => {
              const qty = selected[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 border-4 border-navy shadow-xl flex flex-col group hover:border-golden transition-colors duration-300"
                >
                  <div className="w-28 h-28 bg-butter/40 rounded-full mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <BrunoImage variant="happy" className="w-18 h-18 object-cover" />
                  </div>
                  <h3 className="text-xl font-heading text-navy mb-3 text-center">{item.name}</h3>
                  <p className="text-navy/70 font-body text-sm mb-6 text-center flex-1">{item.description}</p>
                  <div className="mt-auto pt-4 border-t border-navy/20">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-heading text-xl text-navy">₹{item.price}</span>
                      {qty > 0 && (
                        <span className="bg-golden text-navy text-xs font-bold px-2 py-1 rounded-full">{qty}</span>
                      )}
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full"
                      onClick={() => handleAdd(item)}
                    >
                      {qty > 0 ? 'Add Another' : 'Add to Kit'}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-lavender/50 rounded-3xl p-10 border-4 border-navy text-center">
            <h3 className="font-heading text-2xl text-navy mb-4">Recommended Starter Kit</h3>
            <p className="text-navy/80 font-body mb-6 text-sm max-w-xl mx-auto">
              Device ₹2,999 + Monthly Subscription ₹799 + Calm Lavender Cartridge ₹499
            </p>
            <Button variant="primary" size="lg" className="mx-auto" onClick={() => {
              kitItems.forEach((item) => {
                if (['device', 'subscription', 'lavender'].includes(item.id)) {
                  addItem(item);
                }
              });
            }}>
              Add Starter Kit to Cart
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
