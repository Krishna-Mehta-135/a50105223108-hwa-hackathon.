import { forwardRef, cloneElement } from 'react';
import type { ButtonHTMLAttributes, ReactElement } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', asChild = false, children, disabled, ...props }, ref) => {
    const baseStyles = 'font-heading rounded-full font-medium transition-all active:scale-95';
    const variants = {
      primary: 'bg-golden text-navy button-shadow hover:scale-105',
      outline: 'border-2 border-golden text-navy bg-transparent hover:bg-golden',
      ghost: 'text-navy hover:bg-butter/50',
    };
    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-8 py-3 text-sm',
      lg: 'px-12 py-4 text-base',
    };
    const mergedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (asChild) {
      const child = children as unknown as ReactElement;
      return cloneElement(child, {
        className: `${mergedClassName} ${(child.props as any).className ?? ''}`,
        ...(disabled ? { disabled: true } : {}),
      } as any);
    }

    return (
      <button
        ref={ref}
        className={mergedClassName}
        disabled={disabled}
        {...(props as any)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
