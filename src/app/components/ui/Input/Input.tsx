import clsx from 'clsx';
import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
} from 'react';

type Size = 'md';

const SIZE_CLASSNAMES: Record<Size, string> = {
  md: 'py-[10px] px-[14px]',
};

export type InputProps = {
  size?: Size;
  label?: string;
  error?: string;
  prefix?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<'input'>, 'size' | 'prefix'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', label, error, prefix, ...rest }, ref) => {
    const localRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMemo(() => ref || localRef, [ref]);
    const sizeClassName = SIZE_CLASSNAMES[size];
    const rounded = 'rounded-lg';

    const handleClick = useCallback(() => {
      if (mergedRef && 'current' in mergedRef && mergedRef.current) {
        mergedRef.current.focus();
      }
    }, [mergedRef]);

    return (
      <div className="flex flex-col gap-1.5 ">
        {label && (
          <label
            className="text-custom-sm-medium text-gray-700"
            htmlFor={rest.id || label}
          >
            {label}
          </label>
        )}
        <div
          className={clsx('relative group flex gap-1', sizeClassName)}
          onClick={handleClick}
        >
          <div
            className={clsx(
              `absolute inset-0 ring-1 ring-gray-300 hover:ring-brand-300 active:ring-brand-300 ${rounded}`,
              error && ' hover:ring-red-300 active:ring-red-300',
              rest.disabled && 'pointer-events-none bg-gray-50'
            )}
          />
          <div
            className={clsx(
              `content-[''] absolute inset-0 group-focus-within:block hidden shadow-active-input ${rounded}`,
              error && 'shadow-error-input'
            )}
          />
          {prefix}
          <div
            id={`${rest.id || label}-error`}
            aria-live="polite"
            aria-atomic="true"
            className="absolute bottom-0 left-0 translate-y-full"
          >
            {error && (
              <p className="text-red-500 text-custom-sm-regular">{error}</p>
            )}
          </div>
          <input
            {...rest}
            ref={mergedRef}
            id={rest.id || label}
            aria-describedby={`${rest.id || label}-error`}
            className={clsx(
              `relative text-custom-md-regular placeholder-gray-500 outline-none disabled:bg-transparent disabled:color-gray-500 disabled:placeholder-gray-500 ${rounded}`,
              rest.disabled ? 'text-gray-500' : 'text-gray-900',
              rest.className
            )}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
