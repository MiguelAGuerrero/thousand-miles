'use client';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const goal = useSearchParams().get('goal') || 'No goal set';

  return (
    <section className='container flex min-h-dvh flex-col place-content-center place-items-center'>
      <h1 className='p-8 text-xl'>{goal}</h1>
    </section>
  );
}
