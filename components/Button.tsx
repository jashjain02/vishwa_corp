import React from 'react';
import type { ButtonVariant, ButtonSize } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  asChild?: boolean;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-[#1A5CFF] text-white',
    'hover:bg-[#1448D6]',
    'border border-[#1A5CFF]',
  ].join(' '),
  outline: [
    'bg-transparent text-white',
    'border border-white/60',
    'hover:border-white hover:bg-white/10',
  ].join(' '),
  ghost: [
    'bg-transparent text-[#0A0A0F]',
    'border border-transparent',
    'hover:bg-black/5',
  ].join(' '),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[13px] leading-none',
  md: 'px-6 py-[11px] text-[14px] leading-none',
  lg: 'px-8 py-[14px] text-[15px] leading-none',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  ...rest
}) => {
  const base = [
    'inline-flex items-center justify-center gap-2',
    'font-medium tracking-[0.01em]',
    'rounded-[6px]',
    'transition-all duration-200 ease-out',
    'cursor-pointer select-none',
    'whitespace-nowrap',
  ].join(' ');

  const classes = [base, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
