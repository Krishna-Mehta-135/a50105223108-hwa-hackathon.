import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DoodleIcons } from '../components/DoodleIcons';
import { PawCursor } from '../components/PawCursor';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Does Scent Flix cure anxiety?',
    answer: 'No. Scent Flix supports calm &mdash; it does not cure or treat anxiety. Always consult your vet for anxiety concerns.',
  },
  {
    question: 'Are the scents safe for dogs?',
    answer: 'Yes. All scents are vet-formulated, low concentration, and dog-safe. We never use tea tree, eucalyptus, or pine.',
  },
  {
    question: 'How much does it cost?',
    answer: 'The Scent Flix device is ₹2,999. The monthly cartridge subscription is ₹799/month. Cancel anytime.',
  },
  {
    question: 'Does it auto shut off?',
    answer: 'Yes. The device has an auto shut off feature for safety and releases small bursts only.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes. You can pause or cancel your monthly cartridge subscription anytime from your account.',
  },
  {
    question: 'What is &ldquo;Your Owner&rdquo; scent?',
    answer: 'A comforting scent pad with your familiar scent to help your dog feel less alone when you&rsquo;re away.',
  },
];

export function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-24 px-4">
      <Navbar />
      <PawCursor />
      <DoodleIcons />

      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Scent Flix."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-white rounded-3xl border-4 border-navy shadow-xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-xl text-navy">{faq.question}</h3>
                  <span className={`text-golden font-bold text-lg transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div className="bg-butter/40 p-6 border-t border-navy/30">
                    <p className="text-navy/80 font-body">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-navy/80 font-body mb-6">
            Still have questions? We&rsquo;re here to help.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/">Contact Us</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
