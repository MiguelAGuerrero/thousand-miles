'use client';
import { Suspense } from 'react';
import Goal from '@/app/sprint/Goal';

export default function Page() {
  return (
    <section className='container flex min-h-dvh flex-col place-content-center place-items-center'>
      <Suspense>
        <Goal></Goal>
      </Suspense>
    </section>
  );
}
