import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export const getMessages = async (locale: string): Promise<IntlMessages> =>
  (await import(`../../messages/${locale}.json`)).default;

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await getMessages(locale),
  };
});
