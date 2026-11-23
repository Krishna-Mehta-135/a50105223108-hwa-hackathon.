import { Link } from 'react-router-dom';
import { BrunoImage } from './BrunoImage';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Episodes', to: '/episodes' },
  { label: 'How It Calms', to: '/how-it-calms' },
  { label: 'Build Your Kit', to: '/build-your-kit' },
  { label: 'Cart', to: '/cart' },
  { label: 'Checkout', to: '/checkout' },
  { label: 'FAQ', to: '/faq' },
];

const infoLinks = [
  { label: 'About Us', to: '/' },
  { label: 'Vet Formulated', to: '/how-it-calms' },
  { label: 'Subscription', to: '/build-your-kit' },
  { label: 'Safety', to: '/faq' },
  { label: 'Contact', to: '/' },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-golden flex items-center justify-center border-2 border-white">
                <span className="text-[10px] font-bold text-navy">B</span>
              </div>
              <span className="font-heading text-xl text-white">Scent Flix</span>
            </div>
            <p className="text-sky/40 text-sm font-body max-w-xs leading-relaxed mb-6">
              Streaming for your dog's nose. Vet-formulated, dog-safe scent bursts
              for dogs left alone at home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-butter text-navy flex items-center justify-center text-sm hover:bg-golden transition-colors">
                🐾
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-butter text-navy flex items-center justify-center text-sm hover:bg-golden transition-colors">
                🦴
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-butter text-navy flex items-center justify-center text-sm hover:bg-golden transition-colors">
                👃
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg text-white mb-6">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sky/40 text-sm font-body hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sky/40 text-sm font-body hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg text-white mb-6">Info</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sky/40 text-sm font-body hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg text-white mb-6">Bruno's Day</h3>
            <div className="flex gap-4">
              <BrunoImage variant="sleep" className="w-16 h-16 object-cover rounded-xl border-2 border-white" />
              <BrunoImage variant="jump" className="w-16 h-16 object-cover rounded-xl border-2 border-white" />
              <BrunoImage variant="sniff" className="w-16 h-16 object-cover rounded-xl border-2 border-white" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sky/40 text-xs font-body">
            Scent Flix supports calm &mdash; it does not cure or treat anxiety.
            Vet formulated, low concentration, small bursts, auto shut off.
            No tea tree, eucalyptus, or pine.
          </p>
          <div className="flex gap-4 text-sky/40 text-xs font-body">
            <span>₹2,999 device</span>
            <span>₹799/month subscription</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
