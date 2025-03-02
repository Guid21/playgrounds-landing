'use client';

import { usePathname, redirect } from '@/i18n/navigation';
import Error from 'next/error';
import { useEffect, useLayoutEffect } from 'react';

export default function NotFound() {
  useLayoutEffect(() => {
    redirect({ href: `/${document.location.pathname}`, locale: 'ru' });
  }, []);

  return (
    <html lang="ru">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
