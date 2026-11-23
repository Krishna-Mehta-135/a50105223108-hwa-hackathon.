import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BrunoImage } from '../components/BrunoImage';
import { DoodleIcons } from '../components/DoodleIcons';
import { PawCursor } from '../components/PawCursor';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-24 px-4 text-center">
      <Navbar />
      <PawCursor />
      <DoodleIcons />

      <div className="max-w-md">
        <div className="text-8xl mb-8">🐾</div>
        <h1 className="text-6xl font-heading text-navy mb-4">Page Not Found</h1>
        <p className="text-navy/80 font-body mb-10">
          Looks like Bruno wandered off this page. Let's get you back home.
        </p>
        <div className="bg-white rounded-3xl p-8 border-4 border-nagy inline-block">
          <BrunoImage variant="sleep" className="mx-auto mb-6" />
        </div>
        <Button variant="primary" size="lg" asChild>
          <Link to="/">Go Home</Link>
        </Button>
      </div>

      <Footer />
    </div>
  );
}
