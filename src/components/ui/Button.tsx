import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant: 'primary' | 'secondary';
  className?: string;
}

export function Button({ children, href, variant, className, ...props }: ButtonProps) {
  const baseClasses = "rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  
  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600",
    secondary: "bg-transparent text-white hover:text-indigo-300 border border-white hover:border-indigo-300"
  };

  const combinedClasses = clsx(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={combinedClasses}>
      {children}
    </button>
  );
}