'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  type State = 'INITIAL_STATE' | 'GOAL_SUBMITTED' | 'GOAL_REJECTED';

  const [state, setState] = useState<State>('INITIAL_STATE');
  const [goal, setGoal] = useState<string>('');

  const router = useRouter();

  async function submitGoal(event: { key: string }) {
    if (event.key !== 'Enter') return;
    if (goal.length === 0) {
      setState('GOAL_REJECTED');
      return;
    }
    setState('GOAL_SUBMITTED');
    router.push(`/sprint?goal=${goal}`);
  }

  return (
    <main className='mx-auto flex min-h-dvh max-w-7xl flex-col place-content-center gap-4 p-8 text-white'>
      <input
        type='text'
        placeholder='I want to...'
        className='w-full border-b-2 p-4 text-center text-4xl md:text-8xl'
        onChange={(event) => setGoal(event.target.value)}
        onKeyDown={submitGoal}
      />
    </main>
  );
}
