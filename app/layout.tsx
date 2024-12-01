import React from 'react';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Retro Games',
  description: 'Retro Games - платформа для старых консольных игр.'
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ru">
    <body>{children}</body>
    </html>
  );
};

export default RootLayout;