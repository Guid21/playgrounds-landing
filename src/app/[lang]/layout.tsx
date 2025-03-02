import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ToastContainer } from 'react-toastify';

const inter = Inter({
  display: 'swap',
  weight: ['700', '600', '500', '400'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  icons: {
    icon: '/gallery/favicon.ico',
    shortcut: '/gallery/favicon.ico',
  },
  title:
    'Детские игровые площадки в Узбекистане – Купить с доставкой и установкой',
  description:
    'Широкий выбор детских игровых площадок в Узбекистане: безопасные, качественные модели для двора, сада и парков. Доставка и установка. Заказывайте сейчас!',
};

type RootLayoutProps = {
  readonly children: React.ReactNode;
} & PageProps;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;
  if (!routing.locales.includes(lang as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={lang}
      className={`${inter.className} antialiased bg-base-wite overscroll-none`}
    >
      <body className="h-dvh max-h-dvh flex flex-col overscroll-none">
        <NextIntlClientProvider messages={messages}>
          <div className="flex-1 pt-20">{children}</div>
          <Footer />
          <Header />
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
