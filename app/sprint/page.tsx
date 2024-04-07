'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function Page() {
  const goal =
    useSearchParams().get('goal') ||
    '"A journey of a thousand miles begins with a single step."';

  return (
    <Suspense fallback='...'>
      <section className='container flex min-h-dvh flex-col place-content-center place-items-center'>
        <h1 className='p-8 text-4xl'>{goal}</h1>
      </section>
    </Suspense>
  );
}
