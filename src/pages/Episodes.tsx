import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BrunoImage } from '../components/BrunoImage';
import { DoodleIcons } from '../components/DoodleIcons';
import { PawCursor } from '../components/PawCursor';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { StickerBadge } from '../components/StickerBadge';

gsap.registerPlugin(ScrollTrigger);

interface Episode {
  id: string;
  name: string;
  scent: string;
  benefit: string;
  image: string;
  price: string;
}

const episodes: Episode[] = [
  {
    id: 'calm',
    name: 'Calm Evening',
    scent: 'Lavender & Chamomile',
    benefit: 'Supports calm during quiet evenings',
    image: '/images/bruno-sleep.jpg',
    price: '₹799',
  },
  {
    id: 'owner',
    name: "Your Owner",
    scent: "Owner's scent pad",
    benefit: 'Comforting familiar scent when alone',
    image: '/images/bruno-happy.jpg',
    price: '₹799',
  },
  {
    id: 'snuffle',
    name: 'Snuffle Hunt',
    scent: 'Mint & Scent Swirl',
    benefit: 'Pairs with hidden treats in snuffle mat',
    image: '/images/bruno-sniff.jpg',
    price: '₹799',
  },
  {
    id: 'play',
    name: 'Play Burst',
    scent: 'Light citrus-free blend',
    benefit: 'Gentle energy for play time',
    image: '/images/bruno-jump.jpg',
    price: '₹799',
  },
];

export function EpisodesPage() {
  useEffect(() => {
    gsap.from('.episode-card', {
      scrollTrigger: { trigger: '.episodes-grid', start: 'top 85%' },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <PawCursor />
      <DoodleIcons />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Monthly Episodes"
            subtitle="New scent cartridges arrive every month. Vet-formulated, dog-safe scents."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 episodes-grid">
            {episodes.map((ep) => (
              <div key={ep.id} className="episode-card bg-white rounded-3xl p-8 border-4 border-navy shadow-xl flex flex-col group hover:border-golden transition-colors duration-300">
                <div className="w-24 h-24 bg-butter/40 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BrunoImage variant="sniff" className="w-14 h-14 object-cover" />
                </div>
                <h3 className="text-2xl font-heading text-navy mb-3">{ep.name}</h3>
                <p className="text-navy/70 font-body mb-4 text-sm">{ep.scent}</p>
                <p className="text-navy font-body text-sm mb-6 flex-1">{ep.benefit}</p>
                <div className="mt-auto pt-4 border-t border-navy/20 flex justify-between items-center">
                  <span className="font-heading text-xl text-navy">{ep.price}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/build-your-kit">Add to Kit</Link>
                  </Button>
                </div>
                <StickerBadge className="mt-4 w-fit">Monthly</StickerBadge>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-navy/70 font-body text-sm max-w-xl mx-auto">
              Scent Flix supports calm &mdash; it does not cure or treat anxiety.
              Vet formulated, low concentration, small bursts, auto shut off.
              No tea tree, eucalyptus, or pine.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
