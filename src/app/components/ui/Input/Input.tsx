import clsx from 'clsx';
import { ComponentPropsWithoutRef, useMemo } from 'react';

type Size = 'md';

type InputProps = {
  size?: Size;
} & Omit<ComponentPropsWithoutRef<'input'>, 'size'>;

export const Input = ({ size = 'md', ...rest }: InputProps) => {
  const sizeClassName = useMemo(() => {
    switch (size) {
      case 'md':
        return 'py-[10px] px-[14px]';
    }
  }, [size]);

  const rounded = 'rounded-lg';

  return (
    <div className="relative group">
      <input
        {...rest}
        className={clsx(
          `w-full text-custom-md-regular ring-1 ring-gray-300 text-gray-900 placeholder-gray-500 hover:ring-brand-300 active:ring-brand-300 outline-none ${rounded}`,
          sizeClassName,
          rest.className
        )}
      />
      <div
        className={`content-[''] absolute right-0 top-0 bottom-0 left-0 group-focus-within:block hidden ${rounded}`}
        style={{
          boxShadow:
            '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(158, 119, 237, 0.24)',
        }}
      />
    </div>
  );
};
