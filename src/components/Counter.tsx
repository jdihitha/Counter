import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  // Optional keyboard navigation for enhanced UX
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid triggering when user is in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === '+' || e.key === '=' || e.key === 'ArrowUp') {
        e.preventDefault();
        increment();
      } else if (e.key === '-' || e.key === '_' || e.key === 'ArrowDown') {
        e.preventDefault();
        decrement();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        reset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 max-w-sm w-full bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-200">
      <span className="text-xs uppercase tracking-widest font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
        Current Count
      </span>

      {/* Large readable number */}
      <div
        className="text-7xl sm:text-8xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-mono tabular-nums select-none my-4"
        aria-live="polite"
        aria-atomic="true"
      >
        {count}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 sm:gap-4 mt-6 w-full justify-center">
        <button
          type="button"
          onClick={decrement}
          aria-label="Decrement count by 1"
          className="flex-1 flex items-center justify-center h-14 min-w-12 text-2xl font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 rounded-2xl transition-colors cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500"
        >
          −
        </button>

        <button
          type="button"
          onClick={reset}
          aria-label="Reset count to 0"
          className="flex-1 flex items-center justify-center h-14 px-4 text-base font-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 rounded-2xl transition-colors cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500"
        >
          Reset
        </button>

        <button
          type="button"
          onClick={increment}
          aria-label="Increment count by 1"
          className="flex-1 flex items-center justify-center h-14 min-w-12 text-2xl font-medium text-white bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-950 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 dark:active:bg-white rounded-2xl transition-colors cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-200"
        >
          +
        </button>
      </div>

      <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-500 text-center select-none">
        Shortcuts: <kbd className="font-mono px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">+</kbd> / <kbd className="font-mono px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">−</kbd> or <kbd className="font-mono px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">R</kbd>
      </p>
    </div>
  );
}
