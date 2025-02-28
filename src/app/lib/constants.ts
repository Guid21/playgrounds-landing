export const dictionaries = {
  ru: () =>
    import('@/app/dictionaries/ru.json').then((module) => module.default),
  uz: () =>
    import('@/app/dictionaries/uz.json').then((module) => module.default),
};
