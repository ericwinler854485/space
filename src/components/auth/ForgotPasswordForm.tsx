import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Implement password reset logic
    console.log('Password reset requested for:', email);
  };

  if (submitted) {
    return (
      <div className="text-center">
        <div className="text-sm text-gray-300">
          If an account exists for {email}, you will receive password reset instructions.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div>
        <Button type="submit" variant="primary" className="w-full">
          Reset Password
        </Button>
      </div>
    </form>
  );
}