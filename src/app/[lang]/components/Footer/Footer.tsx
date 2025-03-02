'use client';
import { Container } from '@/app/components/Container';
import { Logo } from '../Logo';
import { HorizontalMenu } from '../HorizontalMenu';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations();
  return (
    <div className="py-12 bg-brand-800">
      <Container className="mx-auto w-full flex justify-between flex-wrap">
        <Logo />
        <HorizontalMenu className="mt-8 lg:mt-0" />
        <span className="text-brand-300 w-full xl:w-auto mt-12 xl:mt-0 text-custom-md-regular">
          {t('legalNotice')}
        </span>
      </Container>
    </div>
  );
};
