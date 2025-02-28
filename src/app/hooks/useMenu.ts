import { useMemo } from 'react';
import { PATHS } from '../constants/paths';
import { useDict } from '../providers/LangProvider';

export const useMenu = () => {
  const dict = useDict();
  return useMemo(
    () => [
      {
        href: PATHS.ABOUT,
        label: dict.menu.about,
      },
      {
        href: PATHS.CATALOG,
        label: dict.menu.catalog,
      },
      {
        href: PATHS.WORKS,
        label: dict.menu.works,
      },
      {
        href: PATHS.CONTACT,
        label: dict.menu.contact,
      },
    ],
    [dict]
  );
};
