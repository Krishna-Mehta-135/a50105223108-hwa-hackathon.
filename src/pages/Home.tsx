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
import { BlobShape } from '../components/BlobShape';
import { WavyDivider } from '../components/WavyDivider';
import { StickerBadge } from '../components/StickerBadge';

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  useEffect(() => {
    gsap.from('.hero-word', {
      y: 60,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: 'back.out(1.7)',
    });
    gsap.from('.reveal-up', {
      scrollTrigger: { trigger: '.reveal-up', start: 'top 85%' },
      y: 40,
      opacity: 0,
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

      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape className="w-[500px] h-[500px] bg-butter/50 top-[-15%] left-[-15%] blur-3xl" />
          <BlobShape className="w-[600px] h-[600px] bg-lavender/50 bottom-[-15%] right-[-15%] blur-3xl" style={{ animationDelay: '2s' }} />
          <BlobShape className="w-[400px] h-[400px] bg-mint/50 top-1/3 right-1/4 blur-3xl" style={{ animationDelay: '4s' }} />
        </div>

        <h1 className="text-[5rem] md:text-[8rem] leading-tight font-heading text-navy mb-8 text-center max-w-5xl mx-auto leading-[0.85]">
          {['Streaming', 'for', "your", "dog's", 'nose.'].map((word, i) => (
            <span key={i} className={`hero-word block ${i === 4 ? 'text-golden' : ''}`}>
              {word}
            </span>
          ))}
        </h1>

        <p className="text-xl md:text-2xl text-navy/80 max-w-2xl text-center mb-10 font-body reveal-up">
          Vet-formulated, dog-safe scent bursts for dogs left alone at home.
          Calm episodes, snuffle mats, and monthly cartridges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 reveal-up">
          <Button variant="primary" size="lg" asChild>
            <Link to="/product">Shop Device ₹2,999</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/cart">View Cart</Link>
          </Button>
        </div>

        <div className="relative w-full max-w-5xl reveal-up">
          <StickerBadge className="absolute -top-12 -left-4">New Episode</StickerBadge>
          <div className="relative w-full h-72 bg-white rounded-3xl overflow-hidden border-4 border-navy shadow-2xl flex items-center justify-center">
            <BrunoImage variant="happy" className="w-64 h-64 object-cover bob" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-navy text-white p-6 text-center">
            <span className="font-heading text-xl">Bruno's Morning</span>
            <p className="text-sm mt-1 opacity-90">Calm episode: lavender &amp; chamomile</p>
          </div>
        </div>
      </section>

      <WavyDivider color="butter" />

      <section className="py-24 px-4 bg-butter/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <BlobShape className="w-64 h-64 bg-lavender/60 -top-8 -left-8 blur-2xl" />
              <div className="relative z-10 w-full h-[450px] object-cover rounded-3xl border-4 border-navy shadow-xl flex items-center justify-center reveal-up">
                <BrunoImage variant="sniff" className="w-full h-full object-cover" />
              </div>
              <StickerBadge className="absolute -bottom-6 -right-6">Sniff Time</StickerBadge>
            </div>
            <div className="lg:w-1/2">
              <SectionHeader
                title="How Scent Flix works"
                subtitle="Three simple steps to a calmer dog."
              />
              <ul className="space-y-6">
                <li className="flex items-start gap-4 reveal-up text-lg text-navy font-body">
                  <span className="text-golden font-bold text-2xl">1.</span>
                  <span>Place Scent Flix next to your dog's snuffle mat with hidden treats.</span>
                </li>
                <li className="flex items-start gap-4 reveal-up text-lg text-navy font-body" style={{ animationDelay: '0.2s' }}>
                  <span className="text-golden font-bold text-2xl">2.</span>
                  <span>Choose a calm episode &mdash; lavender, chamomile, or "Your Owner" scent pad.</span>
                </li>
                <li className="flex items-start gap-4 reveal-up text-lg text-navy font-body" style={{ animationDelay: '0.4s' }}>
                  <span className="text-golden font-bold text-2xl">3.</span>
                  <span>Short, faint bursts release automatically. Device auto shut off for safety.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider color="lavender" flipped />

      <section className="py-24 px-4 bg-lavender/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Bruno's Day" subtitle="Follow Bruno through his daily scent adventures." />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group reveal-up">
              <div className="w-full h-64 bg-white rounded-3xl overflow-hidden border-4 border-navy shadow-xl flex items-center justify-center">
                <BrunoImage variant="door" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border-2 border-golden">
                <span className="font-heading text-lg text-navy">Morning walk</span>
              </div>
            </div>
            <div className="relative group reveal-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-full h-64 bg-white rounded-3xl overflow-hidden border-4 border-navy shadow-xl flex items-center justify-center">
                <BrunoImage variant="jump" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border-2 border-golden">
                <span className="font-heading text-lg text-navy">Play time</span>
              </div>
            </div>
            <div className="relative group reveal-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-full h-64 bg-white rounded-3xl overflow-hidden border-4 border-navy shadow-xl flex items-center justify-center">
                <BrunoImage variant="sleep" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border-2 border-golden">
                <span className="font-heading text-lg text-navy">Nap time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
