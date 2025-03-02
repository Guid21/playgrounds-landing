import { useMask } from '@react-input/mask';
import { Input, InputProps } from '../ui/Input';
import clsx from 'clsx';

export const NumberInput = (props: InputProps) => {
  const inputRef = useMask({
    mask: '__ ___-__-__',
    replacement: { _: /\d/ },
  });
  return (
    <Input
      {...props}
      prefix={
        <span
          className={clsx(
            props.disabled ? 'text-gray-500' : 'text-gray-900',
            'text-custom-md-regular relative pointer-events-none'
          )}
        >
          +998
        </span>
      }
      ref={inputRef}
    />
  );
};
