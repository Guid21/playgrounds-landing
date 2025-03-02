export const escapeMarkdownV2 = (text: string) => {
  return text.replace(/[_*[\]()~`>#+-=|{}.!]/g, '\\$&'); // Экранирование символов
};
