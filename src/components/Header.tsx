import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { ROUTES, navigate } from '@/utils/navigation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (route: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(route);
  };

  return (
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href={ROUTES.FEATURES} onClick={handleNavigation(ROUTES.FEATURES)} className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
            Features
          </a>
          <a href={ROUTES.PRICING} onClick={handleNavigation(ROUTES.PRICING)} className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
            Pricing
          </a>
          <a href={ROUTES.ABOUT} onClick={handleNavigation(ROUTES.ABOUT)} className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
            About
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href={ROUTES.LOGIN} onClick={handleNavigation(ROUTES.LOGIN)} className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </header>
  );
}