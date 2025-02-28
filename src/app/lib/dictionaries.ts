import { getLang } from './getLang';
import { dictionaries } from './constants';
import { DictionariesType } from './types';

export const getDictionary = async (locale: LanguageType) => {
  return dictionaries[locale]() as unknown as DictionariesType;
};
