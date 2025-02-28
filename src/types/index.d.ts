declare type LanguageType = 'uz' | 'ru';
declare type PageProps = {
  readonly params: Promise<{ readonly lang: LanguageType }>;
};
