'use client';

import { Logo as LogoSvg } from '../../assets/logo';
import Link from 'next/link';
import { PATHS } from '@/app/constants/paths';
import { clsx } from 'clsx';
import { useLocal } from '@/app/providers/LangProvider/LangProvider';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  const local = useLocal();
  return (
    <Link
      href={`/${local}${PATHS.HOME}`}
      className={clsx('text-base-wite', className)}
    >
      <LogoSvg className="h-8" />
    </Link>
  );
};
