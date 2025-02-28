'use client';

import { DictionariesType } from '@/app/lib/types';
import { createContext, ReactNode, useContext } from 'react';

const LangProviderContext = createContext<DictionariesType | null>(null);

export const useDict = () => {
  const dict = useContext(LangProviderContext);

  if (!dict) {
    throw new Error('useDict must be used within a LangProvider');
  }
  return dict;
};

const LocalContext = createContext<LanguageType | null>(null);

export const useLocal = () => {
  const local = useContext(LocalContext);

  if (!local) {
    throw new Error('useLocal must be used within a LangProvider');
  }
  return local;
};

type ProviderProps = {
  children: ReactNode;
  dict: DictionariesType;
  locale: LanguageType;
};

export const Provider = ({ dict, children, locale }: ProviderProps) => {
  return (
    <LangProviderContext.Provider value={dict}>
      <LocalContext.Provider value={locale}>{children}</LocalContext.Provider>
    </LangProviderContext.Provider>
  );
};
