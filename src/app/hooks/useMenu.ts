import { useMemo } from 'react';
import { PATHS } from '../constants/paths';
import { useTranslations } from 'next-intl';

export const useMenu = () => {
  const t = useTranslations('Menu');
  return useMemo(
    () => [
      {
        href: PATHS.ABOUT,
        label: t('about'),
      },
      {
        href: PATHS.CATALOG,
        label: t('catalog'),
      },
      {
        href: PATHS.WORKS,
        label: t('works'),
      },
      {
        href: PATHS.CONTACT,
        label: t('contact'),
      },
    ],
    [t]
  );
};
