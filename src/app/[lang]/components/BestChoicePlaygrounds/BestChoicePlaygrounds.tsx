'use client';

import { Container } from '@/app/components/Container';
import { Video } from '@/app/components/ui/Video';
import { useDict } from '@/app/providers/LangProvider';
import { useMemo } from 'react';
import { FeaturedWrapper } from '@/app/components/ui/FeaturedWrapper';

const speed = 0.5;

const messageChart = '/gallery/message-chart.svg';

export const BestChoicePlaygrounds = () => {
  const dict = useDict();

  const items = useMemo(
    () => [
      {
        title: dict.bestChoicePlaygrounds.items[0].title,
        description: dict.bestChoicePlaygrounds.items[0].description,
        icon: messageChart,
      },
      {
        title: dict.bestChoicePlaygrounds.items[1].title,
        description: dict.bestChoicePlaygrounds.items[1].description,
        icon: messageChart,
      },
      {
        title: dict.bestChoicePlaygrounds.items[2].title,
        description: dict.bestChoicePlaygrounds.items[2].description,
        icon: messageChart,
      },
      {
        title: dict.bestChoicePlaygrounds.items[3].title,
        description: dict.bestChoicePlaygrounds.items[3].description,
        icon: messageChart,
      },
      {
        title: dict.bestChoicePlaygrounds.items[4].title,
        description: dict.bestChoicePlaygrounds.items[4].description,
        icon: messageChart,
      },
    ],
    [dict]
  );

  return (
    <div>
      <Container
        className="py-24 mx-auto w-full flex flex-col lg:gap-16 gap-12"
        id="about"
      >
        <h3 className="text-text-primary max-w-[768px] text-display-md-semibold">
          {dict.about.title}
        </h3>
        <div className="flex lg:flex-row flex-col gap-16">
          <div className="flex w-full lg:w-[434px] xl:w-[560px] flex-col gap-10 lg:gap-12">
            {items.map(({ title, description, icon }) => {
              return (
                <div key={title} className="flex gap-4">
                  <FeaturedWrapper src={icon} />
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
