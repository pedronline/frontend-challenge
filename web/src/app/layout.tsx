'use client';

import { Header } from '@/components/Header';
import './globals.css';
import { Saira } from 'next/font/google';
import { FilterContextProvider } from '@/contexts/filter-context';

const font = Saira({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Capputeeno',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}
