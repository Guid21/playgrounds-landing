'use client';
import { clsx } from 'clsx';
import Image from 'next/image';
import xIcon from '../../assets/x-icon.svg';
import { Dialog } from 'radix-ui';
import { useState } from 'react';
import { Logo } from '../Logo';
import { VerticalMenu } from '../VerticalMenu';

type BurgerMenuProps = {
  className?: string;
};

export const BurgerMenu = ({ className }: BurgerMenuProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className={clsx('p-2', className)}>
          <Image
            src="/gallery/burger.svg"
            width={24}
            height={24}
            alt="menu"
            priority
          />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
        <Dialog.Content
          className="fixed top-0 right-0 md:w-[80%] w-full h-full bg-white shadow-lg"
          aria-describedby={undefined}
        >
          <div className="flex justify-between items-center py-5 pl-4 pr-3">
            <Dialog.Title>
              <Logo className="text-text-primary" />
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className={clsx('p-2', className)}>
                <Image src={xIcon} alt="menu" />
              </button>
            </Dialog.Close>
          </div>
          <VerticalMenu onClick={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
