'use client';

import { Logo as LogoSvg } from '../../assets/logo';
import { PATHS } from '@/app/constants/paths';
import { Link } from '@/i18n/navigation';
import { clsx } from 'clsx';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={`${PATHS.HOME}`} className={clsx('text-base-wite', className)}>
      <LogoSvg className="h-8" />
    </Link>
  );
};
