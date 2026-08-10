import { useState, useRef, useCallback, useEffect } from 'react';

interface UseStopwatchOptions {
  onSessionComplete?: (duration: number) => void;
}

export function usePomodoroTimer({ onSessionComplete }: UseStopwatchOptions = {}) {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);
  const accumulatedRef = useRef<number>(0);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (isRunning) return;
    startTimeRef.current = Date.now();
    accumulatedRef.current = elapsedSeconds;
    setIsRunning(true);
    clearTimer();
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsed = accumulatedRef.current + Math.floor((now - startTimeRef.current) / 1000);
      setElapsedSeconds(elapsed);
    }, 1000);
  }, [isRunning, elapsedSeconds, clearTimer]);

  const pause = useCallback(() => {
    if (!isRunning) return;
    clearTimer();
    accumulatedRef.current = elapsedSeconds;
    setIsRunning(false);
  }, [isRunning, elapsedSeconds, clearTimer]);

  const finish = useCallback(() => {
    clearTimer();
    const duration = elapsedSeconds;
    setIsRunning(false);
    setElapsedSeconds(0);
    accumulatedRef.current = 0;
    if (duration > 0) {
      onSessionComplete?.(duration);
    }
    return duration;
  }, [clearTimer, elapsedSeconds, onSessionComplete]);

  const reset = useCallback(() => {
    clearTimer();
    setIsRunning(false);
    setElapsedSeconds(0);
    accumulatedRef.current = 0;
  }, [clearTimer]);

  // Cleanup on unmount
  useEffect(() => clearTimer, [clearTimer]);

  return {
    isRunning,
    elapsedSeconds,
    start,
    pause,
    finish,
    reset,
  };
}
