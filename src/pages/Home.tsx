import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BrunoImage } from '../components/BrunoImage';
import { DoodleIcons } from '../components/DoodleIcons';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { BlobShape } from '../components/BlobShape';
import { WavyDivider } from '../components/WavyDivider';
import { StickerBadge } from '../components/StickerBadge';

export function Home() {
  const scenes = [
    {
      variant: 'door' as const,
      time: '9:00',
      title: 'Morning walk',
      text: 'The day begins with a calm lavender burst.',
    },
    {
      variant: 'jump' as const,
      time: '10:30',
      title: 'Play time',
      text: 'Scent bursts spark curiosity and joy.',
    },
    {
      variant: 'sleep' as const,
      time: '13:00',
      title: 'Nap time',
      text: 'Chamomile dusk helps breathing slow.',
    },
    {
      variant: 'door' as const,
      time: '15:30',
      title: 'Door sadness',
      text: 'Waiting by the door, missing you.',
    },
    {
      variant: 'sniff' as const,
      time: '17:00',
      title: 'Sniff joy',
      text: 'Snuffle mat treasures found.',
    },
  ];

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
      <DoodleIcons />

      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape className="w-[500px] h-[500px] bg-butter/50 top-[-15%] left-[-15%] blur-3xl" />
          <BlobShape className="w-[600px] h-[600px] bg-lavender/50 bottom-[-15%] right-[-15%] blur-3xl" style={{ animationDelay: '2s' }} />
          <BlobShape className="w-[400px] h-[400px] bg-mint/50 top-1/3 right-1/4 blur-3xl" style={{ animationDelay: '4s' }} />
        </div>

        <h1 className="text-[3.5rem] md:text-[5rem] leading-tight font-heading text-navy mb-8 text-center max-w-[700px] mx-auto leading-[1.05]">
          {['Streaming for', "your dog's", 'nose.'].map((word, i) => (
            <span key={i} className={`hero-word block ${i === 2 ? 'text-golden' : ''}`}>
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

        <div className="absolute right-[2%] top-[28%] w-[320px] h-[320px] z-0 pointer-events-none rotate-2 opacity-95 floating-bruno">
          <div className="relative w-full h-full border-4 border-white shadow-2xl rounded-full overflow-hidden bg-white">
            <BrunoImage variant="happy" className="w-full h-full object-cover" />
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
              <StickerBadge className="absolute -bottom-6 -right-6 z-20">Sniff Time</StickerBadge>
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
          <div className="space-y-16">
            {scenes.map((scene) => (
              <div
                key={scene.title}
                className="flex items-center gap-10 w-full max-w-[900px] mx-auto"
              >
                <div className="relative w-[320px] h-[320px] shrink-0 overflow-hidden rounded-3xl border-4 border-navy shadow-2xl bg-white">
                  <BrunoImage
                    variant={scene.variant}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-blurb">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-golden mb-4">
                    <span className="text-[10px] font-bold text-golden uppercase tracking-wider">{scene.time}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading text-navy leading-tight mb-3">{scene.title}</h2>
                  <p className="text-lg text-navy/80 font-body">{scene.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
