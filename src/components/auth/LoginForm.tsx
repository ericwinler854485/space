import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { ROUTES, navigate } from '@/utils/navigation';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt:', { email, password });
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(ROUTES.FORGOT_PASSWORD);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a 
            href={ROUTES.FORGOT_PASSWORD} 
            onClick={handleForgotPassword}
            className="text-indigo-400 hover:text-indigo-300"
          >
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <Button type="submit" variant="primary" className="w-full">
          Sign in
        </Button>
      </div>
    </form>
  );
}