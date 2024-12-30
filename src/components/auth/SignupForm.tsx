import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log('Signup attempt:', { email, password });
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
      <Input
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <div>
        <Button type="submit" variant="primary" className="w-full">
          Create Account
        </Button>
      </div>
    </form>
  );
}