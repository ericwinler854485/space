import { Dialog } from '@headlessui/react';
import { FiX } from 'react-icons/fi';
import { ROUTES, navigate } from '@/utils/navigation';

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function MobileMenu({ open, setOpen }: MobileMenuProps) {
  const handleNavigation = (route: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(route);
    setOpen(false);
  };

  return (
    <Dialog as="div" className="lg:hidden" open={open} onClose={setOpen}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-white">SpaceMail</span>
          </a>
          <button
            type="button"
            className="rounded-md text-gray-300"
            onClick={() => setOpen(false)}
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="space-y-2 py-6">
            <a
              href={ROUTES.FEATURES}
              onClick={handleNavigation(ROUTES.FEATURES)}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:text-white"
            >
              Features
            </a>
            <a
              href={ROUTES.PRICING}
              onClick={handleNavigation(ROUTES.PRICING)}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:text-white"
            >
              Pricing
            </a>
            <a
              href={ROUTES.ABOUT}
              onClick={handleNavigation(ROUTES.ABOUT)}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:text-white"
            >
              About
            </a>
          </div>
          <div className="py-6">
            <a
              href={ROUTES.LOGIN}
              onClick={handleNavigation(ROUTES.LOGIN)}
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:text-white"
            >
              Log in
            </a>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}