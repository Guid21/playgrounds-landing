import { Header } from './components/Header';
import { LangProvider } from '../providers/LangProvider';
import { Footer } from './components/Footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getLang } from '../lib/getLang';

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
  const lang = await getLang(params);

  return (
    <html
      lang={lang}
      className={`${inter.className} antialiased bg-base-wite overscroll-none`}
    >
      <body className="h-screen max-h-screen flex flex-col overscroll-none">
        <LangProvider params={params}>
          <div className="flex-1 pt-20">{children}</div>
          <Footer />
          <Header />
        </LangProvider>
      </body>
    </html>
  );
}
