'use client';

import { Container } from '@/app/components/Container';
import { Video } from '@/app/components/ui/Video';
import { FeaturedWrapper } from '@/app/components/ui/FeaturedWrapper';
import { useTranslations } from 'next-intl';

const speed = 0.5;

const messageChart = '/gallery/message-chart.svg';
const bestChoicesKeys = [
  'Choice-1',
  'Choice-2',
  'Choice-3',
  'Choice-4',
  'Choice-5',
] as const;

export const BestChoicePlaygrounds = () => {
  const bestChoices = useTranslations('HomePage.BestChoicePlaygrounds');

  return (
    <div>
      <Container
        className="py-24 mx-auto w-full flex flex-col lg:gap-16 gap-12"
        id="about"
      >
        <h3 className="text-text-primary max-w-[768px] text-display-md-semibold">
          {bestChoices('title')}
        </h3>
        <div className="flex lg:flex-row flex-col gap-16">
          <div className="flex w-full lg:w-[434px] xl:w-[560px] flex-col gap-10 lg:gap-12">
            {bestChoicesKeys.map((key) => {
              const title = bestChoices(`${key}.title`);
              const description = bestChoices(`${key}.description`);
              return (
                <div key={title} className="flex gap-4">
                  <FeaturedWrapper src={messageChart} />
                  <div className="pt-2.5 flex flex-col gap-2">
                    <span className="text-custom-lg-semibold lg:text-custom-xl-semibold text-text-primary">
                      {title}
                    </span>
                    <span className="text-custom-md-regular text-text-primary">
                      {description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:flex hidden flex-1">
            <Video
              videoSrc="/videos/girl-riding-on-a-swing-in-autumn.mp4"
              posterSrc="/gallery/boy-on-playgrounds.png"
              width={592}
              height={852}
              speed={speed}
            />
          </div>
        </div>
      </Container>

      <Video
        videoSrc="/videos/girl-riding-on-a-swing-in-autumn.mp4"
        posterSrc="/gallery/boy-on-playgrounds.png"
        className="block lg:hidden w-100% h-[416px] rounded-none"
        speed={speed}
      />
    </div>
  );
};
