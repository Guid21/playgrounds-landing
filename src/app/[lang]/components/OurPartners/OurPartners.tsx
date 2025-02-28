'use client';

import { Container } from '@/app/components/Container';
import { useDict } from '@/app/providers/LangProvider';
import Image from 'next/image';
import examplePartnerLogo from '../../assets/example-partner-logo.svg';

export const OurPartners = () => {
  const dict = useDict();

  return (
    <div className="lg:pb-24 pb-16 bg-brand-800">
      <Container className="mx-auto w-full flex flex-col gap-16 ">
        <span className="mx-auto text-brand-200 text-custom-md-medium">
          {dict.ourPartners.title}
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
