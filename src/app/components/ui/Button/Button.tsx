import { ComponentPropsWithRef, useMemo } from 'react';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'secondary';
type Size = '2xl' | 'xl';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: Size;
} & ComponentPropsWithRef<'button'>;

export const Button = ({
  variant = 'primary',
  size = 'xl',
  ...rest
}: ButtonProps) => {
  const variantClassName = useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'lg:px-6 bg-brand-600 ring-1 ring-brand-600 text-base-wite rounded-lg hover:bg-brand-700 hover:ring-brand-700 active:bg-brand-500 active:ring-brand-500 disabled:bg-border-disabled_subtle disabled:ring-border-disabled_subtle disabled:text-fg-disabled';
      case 'secondary':
        return 'lg:px-6 bg-base-wite ring-1 ring-base-wite text-brand-700 rounded-lg hover:bg-brand-50 hover:ring-brand-50 hover:text-brand-800 active:bg-base-wite active:ring-brand-500 active:text-brand-700  disabled:text-fg-disabled';
    }
  }, [variant]);
  const sizeClassName = useMemo(() => {
    switch (size) {
      case '2xl':
        return 'py-4 px-[22px]';
      case 'xl':
        return 'py-3 px-[18px] ';
    }
  }, [size]);
  return (
    <button
      {...rest}
      className={clsx(variantClassName, sizeClassName, rest.className)}
    />
  );
};
