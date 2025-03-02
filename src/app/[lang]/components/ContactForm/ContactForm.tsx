'use client';
import { Container } from '@/app/components/Container';
import { NumberInput } from '@/app/components/NumberInput';
import { Spinner } from '@/app/components/Spinner';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { FeedbackFormStatus } from '@/constants';
import { feedbackRequest, type FeedbackState } from '@/lib/actions/feedback';
import clsx from 'clsx';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { useActionState, useEffect } from 'react';
import { toast } from 'react-toastify';

const formId = 'contact-form';

export const ContactForm = () => {
  const locale = useLocale();
  const t = useTranslations('HomePage.ContactFormBlock');
  const initialState: FeedbackState = {
    message: null,
    errors: {},
    form: {},
    status: null,
  };

  const [state, formAction, isPending] = useActionState(
    feedbackRequest,
    initialState
  );

  useEffect(() => {
    if (state.status === FeedbackFormStatus.success) {
      toast.success('Заявка принята. Мы с вами свяжемся в ближайшее время');
    }
  }, [state.status]);

  return (
    <Container
      className="lg:py-24 py-16 mx-auto w-full lg:gap-16 flex gap-16"
      id="consultation"
    >
      <div className="lg:w-[388px] xl:w-auto xl:flex-1 lg:block hidden">
        <Image
          src="/gallery/woman-sitting-by-the-window.jpg"
          alt="Картинка контактов"
          height={640}
          width={576}
          className="rounded-2xl w-full xl:aspect-[576/649] lg:aspect-[388/640] object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <h3 className="text-display-md-semibold">{t('title')}</h3>
        <div className="flex flex-col gap-8">
          <form
            className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1  gap-6"
            action={formAction}
            id={formId}
          >
            <input type="hidden" name="locale" value={locale} />
            <Input
              placeholder={t('NameField.placeholder')}
              label={t('NameField.label')}
              id="name"
              name="name"
              error={state?.errors?.name?.[0]}
              defaultValue={state.form?.name}
              className="w-full"
              disabled={isPending}
            />
            <Input
              placeholder={t('EmailField.placeholder')}
              label={t('EmailField.label')}
              id="email"
              name="email"
              error={state?.errors?.email?.[0]}
              defaultValue={state.form?.email}
              className="w-full"
              disabled={isPending}
            />
            <NumberInput
              placeholder={t('PhoneField.placeholder')}
              label={t('PhoneField.label')}
              id="phone"
              name="phone"
              error={state?.errors?.phone?.[0]}
              defaultValue={state.form?.phone}
              className="w-full"
              disabled={isPending}
            />
            <Input
              placeholder={t('CityField.placeholder')}
              label={t('CityField.label')}
              id="city"
              name="city"
              error={state?.errors?.city?.[0]}
              defaultValue={state.form?.city}
              className="w-full"
              disabled={isPending}
            />
          </form>
          <div className="flex flex-col gap-3">
            <Button form={formId} disabled={isPending} className="relative">
              <span
                className={clsx(
                  'text-custom-md-semibold',
                  isPending && 'invisible'
                )}
              >
                {t('sendButton')}
              </span>
              {isPending && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Spinner />
                </div>
              )}
            </Button>
            <span className="text-custom-sm-regular text-gray-500">
              {t('agreement')}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};
