'use client';
import { useSearchParams } from 'next/navigation';

export default function Goal() {
  const goal =
    useSearchParams().get('goal') ||
    '"A journey of a thousand miles begins with a single step."';

  return <h1 className='p-8 text-4xl'>{goal}</h1>;
}
