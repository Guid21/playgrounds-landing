'use client';

import { Container } from '@/app/components/Container';
import Image from 'next/image';
import examplePartnerLogo from '../../assets/example-partner-logo.svg';
import { useTranslations } from 'next-intl';

export const OurPartners = () => {
  const t = useTranslations('HomePage.OurPartnersBlock');

  return (
    <div className="lg:pb-24 pb-16 bg-brand-800">
      <Container className="mx-auto w-full flex flex-col gap-16 ">
        <span className="mx-auto text-brand-200 text-custom-md-medium">
          {t('title')}
        </span>
        <div className="flex flex-wrap justify-center gap-6">
          <Image src={examplePartnerLogo} alt="Partner logo" />
          <Image src={examplePartnerLogo} alt="Partner logo" />
          <Image src={examplePartnerLogo} alt="Partner logo" />
          <Image src={examplePartnerLogo} alt="Partner logo" />
          <Image src={examplePartnerLogo} alt="Partner logo" />
        </div>
      </Container>
    </div>
  );
};
