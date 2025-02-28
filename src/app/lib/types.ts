import { dictionaries } from './constants';

export type DictionariesType = Awaited<
  ReturnType<(typeof dictionaries)[keyof typeof dictionaries]>
>;
