'use client';
import { Container } from '@/app/components/Container';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { useDict } from '@/app/providers/LangProvider';
import Image from 'next/image';

export const ContactForm = () => {
  const dict = useDict();
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
        <h3 className="text-display-md-semibold">{dict.contactForm.title}</h3>
        <div className="flex flex-col gap-8">
          <div>
            <Input placeholder="Ваше имя" />
          </div>
          <div className="flex flex-col gap-3">
            <Button>
              <span className="text-custom-md-semibold">
                {dict.contactForm.sendButton}
              </span>
            </Button>
            <span className="text-custom-sm-regular text-gray-500">
              {dict.contactForm.agreement}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};
