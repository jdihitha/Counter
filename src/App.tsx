import Counter from './components/Counter.tsx';

export default function App() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-900">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight mb-8 text-neutral-800 dark:text-neutral-200">
          Counter App
        </h1>
        <Counter />
      </div>
    </main>
  );
}
