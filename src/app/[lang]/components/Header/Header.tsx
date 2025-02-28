'use client';

import { Container } from '@/app/components/Container';
import { HorizontalMenu } from '../HorizontalMenu';
import Link from 'next/link';
import { Logo } from '../Logo';
import Image from 'next/image';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header = () => {
  return (
    <header className="py-6 bg-brand-800 top-0 fixed w-full">
      <Container className="mx-auto w-full flex gap-10 ">
        <Logo />
        <HorizontalMenu className="hidden lg:flex" />
        <div className="ml-auto gap-2 items-center hidden lg:flex">
          <Image
            src={'/gallery/ringing-phone.svg'}
            alt="phone"
            width={24}
            height={24}
          />
          <Link href="tel:+998998444307">
            <span className="hover:text-brand-200 text-custom-md-semibold text-base-wite">
              +998998444307
            </span>
          </Link>
        </div>
        <BurgerMenu className="inline lg:hidden ml-auto" />
      </Container>
    </header>
  );
};
