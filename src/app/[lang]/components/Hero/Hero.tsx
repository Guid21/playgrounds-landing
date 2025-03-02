'use client';

import { Container } from '@/app/components/Container';
import { Button } from '@/app/components/ui/Button';
import { Video } from '@/app/components/ui/Video';
import { PATHS } from '@/app/constants/paths';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('HomePage.HeroBlock');
  return (
    <div className="lg:py-24 py-16 bg-brand-800">
      <Container className="mx-auto w-full flex flex-col gap-16 ">
        <div className="flex flex-col lg:gap-12 gap-8">
          <div className="flex flex-col lg:gap-6 gap-4">
            <h1 className="lg:text-display-xl-medium text-display-md-medium text-base-wite max-w-[1024px]">
              {t('title')}
            </h1>
            <h2 className="max-w-[590px] text-brand-200 text-custom-lg-regular lg:text-custom-xl-regular">
              {t('subtitle')}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <Link href={`${PATHS.CONSULTATION}`}>
              <Button variant="secondary" className="md:w-[284px] w-full">
                <span className="lg:text-custom-lg-semibold text-custom-md-semibold  text-brand-700">
                  {t('consultationButton')}
                </span>
              </Button>
            </Link>
            <Link href={`${PATHS.CATALOG}`}>
              <Button className="md:w-[284px] w-full">
                <span className="lg:text-custom-lg-semibold text-custom-md-semibold  text-base-wite">
                  {t('catalogButton')}
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Video
            videoSrc="/videos/children-on-a-swing.mp4"
            posterSrc="/gallery/girl-on-swing.jpg"
            width={1216}
            height={684}
          />
        </div>
      </Container>
    </div>
  );
};
