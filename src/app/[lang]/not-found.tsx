'use client';

import Link from 'next/link';
import { useLocal } from '../providers/LangProvider/LangProvider';
import { PATHS } from '../constants/paths';

export default function NotFound() {
  const local = useLocal();
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href={`/${local}${PATHS.HOME}`}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}
