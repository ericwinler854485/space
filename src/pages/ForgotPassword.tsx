import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';
import { ROUTES } from '@/utils/navigation';

export function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Remember your password?{' '}
            <a href={ROUTES.LOGIN} className="text-indigo-400 hover:text-indigo-300">
              Sign in
            </a>
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}