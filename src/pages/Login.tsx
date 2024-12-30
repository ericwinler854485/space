import { LoginForm } from '../components/auth/LoginForm';

export function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Sign in to SpaceMail
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Or{' '}
            <a href="#signup" className="text-indigo-400 hover:text-indigo-300">
              create a new account
            </a>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}