import { Button } from './ui/Button';
import { ROUTES, navigate } from '@/utils/navigation';

export function Hero() {
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(ROUTES.SIGNUP);
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Secure Email for the Space Age
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Experience the future of communication with SpaceMail. End-to-end encryption, quantum-safe security, 
            and unlimited storage across the galaxy.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href={ROUTES.SIGNUP} onClick={handleGetStarted} variant="primary">
              Get started
            </Button>
            <Button href="#learn-more" variant="secondary">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}