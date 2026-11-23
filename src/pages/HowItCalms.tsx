import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BrunoImage } from '../components/BrunoImage';
import { DoodleIcons } from '../components/DoodleIcons';
import { PawCursor } from '../components/PawCursor';
import { SectionHeader } from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export function HowItCalmsPage() {
  useEffect(() => {
    gsap.from('.calm-step', {
      scrollTrigger: { trigger: '.calm-steps', start: 'top 80%' },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.9,
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
            title="How It Calms"
            subtitle="Short, faint bursts of vet-formulated scents to support your dog's calm."
          />

          <div className="grid md:grid-cols-3 gap-8 calm-steps">
            {[
              {
                num: '1',
                title: 'Place',
                text: 'Set Scent Flix next to your dog&rsquo;s snuffle mat with hidden treats.',
                image: 'door',
              },
              {
                num: '2',
                title: 'Choose',
                text: 'Pick a calm episode: lavender, chamomile, or &ldquo;Your Owner&rdquo; scent pad.',
                image: 'sniff',
              },
              {
                num: '3',
                title: 'Relax',
                text: 'Short, faint bursts release automatically. Device auto shut off for safety.',
                image: 'sleep',
              },
            ].map((step) => (
              <div key={step.num} className="calm-step bg-white rounded-3xl p-8 border-4 border-navy shadow-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mb-6 font-heading text-2xl text-navy">
                  {step.num}
                </div>
                <div className="w-32 h-32 bg-butter/40 rounded-full mb-6 flex items-center justify-center">
                  <BrunoImage variant={step.image as any} className="w-20 h-20 object-cover bob" />
                </div>
                <h3 className="text-xl font-heading text-navy mb-3">{step.title}</h3>
                <p className="text-navy/70 font-body text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-lavender/50 rounded-3xl p-10 border-4 border-nagy">
            <div className="flex items-start gap-6">
              <span className="text-4xl mt-1">🐾</span>
              <div>
                <h3 className="font-heading text-xl text-navy mb-3">Safety First</h3>
                <ul className="space-y-3 text-navy/80 font-body text-sm">
                  <li>Vet formulated and dog-safe</li>
                  <li>Low concentration, small bursts</li>
                  <li>Auto shut off timer</li>
                  <li>No tea tree, eucalyptus, or pine</li>
                  <li>Supports calm &mdash; does not cure or treat anxiety</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
