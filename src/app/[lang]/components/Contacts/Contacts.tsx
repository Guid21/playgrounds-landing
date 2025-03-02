'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/app/components/Container';
import markerPoint from '@/app/[lang]/assets/marker-point.svg';
import Image from 'next/image';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FeaturedWrapper } from '@/app/components/ui/FeaturedWrapper';

const contactKeys = [
  'Contact-1',
  'Contact-2',
  'Contact-3',
  'Contact-4',
] as const;

export const Contacts = () => {
  const contactsBlock = useTranslations('HomePage.ContactsBlock');
  const contacts = useTranslations('HomePage.ContactsList');

  return (
    <Container
      className="mx-auto w-full flex flex-col lg:py-24 py-16"
      id="contacts"
    >
      <span className="lg:text-display-lg-semibold text-center  text-display-md-semibold lg:mb-16 mb-10">
        {contactsBlock('title')}
        {}
      </span>
      <div className="mt-6 relative bg-gray-50 pt-11 pb-8 px-5.5 w-full rounded-md items-center flex flex-col gap-1 lg:gap-2">
        <Image
          src={markerPoint}
          alt="Marker point icon"
          width={48}
          height={48}
          className="absolute top-[-24px] left-1/2 -translate-x-1/2"
        />
        <span className="text-custom-lg-semibold text-center">
          {contactsBlock('addressLabel')}
        </span>
        <span className="text-custom-md-regular text-gray-600 text-center">
          {contactsBlock('address')}
        </span>
      </div>
      <YMaps>
        <div className="w-full lg:h-[400px] h-[320px] lg:mt-10 mt-6">
          <Map
            defaultState={{
              center: [41.254309769602415, 69.39299915181071],
              zoom: 16,
            }}
            className="w-full lg:h-[400px] h-[320px] lg:mt-10 mt-6 rounded-md overflow-hidden"
          >
            <Placemark
              defaultGeometry={[41.254309769602415, 69.39299915181071]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '/gallery/brand-marker-point.svg',
                iconImageSize: [48, 62], // Размер иконки
                iconImageOffset: [-22, -62], // Смещение, чтобы маркер был по центру
              }}
            />
          </Map>
        </div>
      </YMaps>
      <div className="lg:mt-16 mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:gap-6 gap-x-8 gap-y-10">
        {contactKeys.map((key, index) => {
          const type = contacts(`${key}.type`);
          const label = contacts(`${key}.label`);
          const value = contacts(`${key}.value`);

          return (
            <div
              key={index}
              className="mt-6 relative bg-gray-50 pt-11 pb-8 px-5.5 w-full rounded-md items-center flex flex-col gap-1 lg:gap-2"
            >
              <FeaturedWrapper
                src={
                  type === 'phone'
                    ? '/gallery/phone.svg'
                    : '/gallery/message-chart.svg'
                }
                className="absolute  left-1/2 -top-0 -translate-x-1/2 -translate-y-1/2"
              />
              <span className="text-custom-lg-semibold text-center">
                {label}
              </span>
              <a href={(type === 'phone' ? 'tel:' : 'mailto:') + value}>
                <span className="text-custom-md-regular text-gray-600">
                  {value}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
