'use server';

import z from 'zod';
import { FeedbackFormStatus } from '@/constants';
import { escapeMarkdownV2 } from '@/utils';
import { createTranslator } from 'next-intl';
import { getMessages } from '@/i18n/request';

const getFeedbackFormSchema = async (locale: string) => {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return z.object({
    name: z
      .string()
      .min(2, t('HomePage.ContactFormBlock.NameField.minSimbolesErrorMessage'))
      .nonempty(t('HomePage.ContactFormBlock.NameField.nameErrorMessage')),

    email: z
      .string({})
      .email(t('HomePage.ContactFormBlock.EmailField.emailErrorMessage')),
    phone: z
      .string()
      .refine(
        (val) => /^\d{2} \d{3}-\d{2}-\d{2}$/.test(val),
        t('HomePage.ContactFormBlock.PhoneField.phoneErrorMessage')
      ),

    city: z
      .string()
      .min(2, t('HomePage.ContactFormBlock.CityField.minSimbolesErrorMessage'))
      .nonempty(t('HomePage.ContactFormBlock.CityField.cityErrorMessage')),
  });
};

export type FeedbackFormType = z.infer<
  Awaited<ReturnType<typeof getFeedbackFormSchema>>
>;
export type FeedbackState = {
  errors?: Partial<Record<keyof FeedbackFormType, string[]>>;
  form?: Partial<FeedbackFormType>;
  message?: string | null;
  status?: FeedbackFormStatus | null;
};

const formatTelegramMessage = (data: FeedbackFormType): string => {
  return encodeURIComponent(
    `*Новая заявка* 🚀\n\n` +
      `*Имя:* ${escapeMarkdownV2(data.name)}\n` +
      `*Почта:* ${escapeMarkdownV2(data.email)}\n` +
      `*Телефон:* ${escapeMarkdownV2(data.phone)}\n` +
      `*Город:* ${escapeMarkdownV2(data.city)}`
  );
};

const sendTelegramMessage = async (message: string) => {
  const url =
    `${process.env.TELEGRAM_API}${process.env.TELEGRAM_BOT}/sendMessage` +
    `?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${message}&parse_mode=MarkdownV2`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error('Ошибка Telegram API:', data);
      throw new Error('Ошибка при отправке сообщения в Telegram');
    }
  } catch (error) {
    console.error('Ошибка сети при отправке в Telegram:', error);
    throw error;
  }
};

export const feedbackRequest = async (
  _prevState: FeedbackState,
  formData: FormData
): Promise<FeedbackState> => {
  const locale = formData.get('locale')?.toString() || 'en';
  const FeedbackFormSchema = await getFeedbackFormSchema(locale);
  const form = {
    name: formData.get('name')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    phone: formData.get('phone')?.toString() || '',
    city: formData.get('city')?.toString() || '',
  };

  const validatedFields = FeedbackFormSchema.safeParse(form);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Пропущенные поля',
      form,
      status: FeedbackFormStatus.error,
    };
  }

  try {
    await sendTelegramMessage(formatTelegramMessage(validatedFields.data));
    return { errors: {}, form: {}, status: FeedbackFormStatus.success };
  } catch {
    return {
      message: 'Произошла ошибка',
      form,
      status: FeedbackFormStatus.error,
    };
  }
};
