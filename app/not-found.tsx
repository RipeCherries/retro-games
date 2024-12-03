import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retro Games | Страница не найдена',
  description: 'К сожалению, запрашиваемая страница не существует.'
};

const NotFound = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-[url('/images/not-found.png')] bg-cover">
      <div className="absolute top-0 left-0 h-screen w-full bg-primary/80" />
      <div className="flex flex-col text-center gap-6 z-10">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-3xl font-normal text-gray-200">Страница не найдена...</p>
        <Link
          className="flex items-center justify-center py-4 bg-accent hover:bg-accent/70 rounded-full font-medium text-xl"
          href="/"
        >
          На главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
