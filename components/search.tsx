'use client';

import React, { useState } from 'react';
import { Joystick } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form className="flex-1 max-w-xl mx-auto" onSubmit={onFormSubmit}>
      <div className="flex items-center gap-2">
        <input
          className="w-full bg-main rounded-lg border-2 border-accent px-4 py-2"
          type="text"
          placeholder="Ищите свои любимые игры, например, Super Mario"
          value={searchQuery}
          onChange={onInputChange}
        />
        <button className="p-2 rounded-lg border-2 border-accent bg-accent hover:bg-accent/70" type="submit">
          <Joystick />
        </button>
      </div>
    </form>
  );
};

export { Search };
