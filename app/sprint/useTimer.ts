import { useEffect, useState } from 'react';

type Timer = {
  seconds: number;
  pause: () => void;
  run: () => void;
  reset: () => void;
};

type TimerConfig = {
  autoStart?: boolean;
};

export default function useTimer(
  config: TimerConfig = { autoStart: false },
): Timer {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActiveState] = useState(config.autoStart);

  function pause() {
    setActiveState(false);
  }

  function run() {
    setActiveState(true);
  }

  function reset() {
    setSeconds(0);
  }

  useEffect(() => {
    if (!isActive) return;
    const ONE_MINUTE: number = 1000;
    let interval: NodeJS.Timeout = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, ONE_MINUTE);
    return () => clearInterval(interval);
  }, [isActive]);

  return { seconds, pause, run, reset };
}
