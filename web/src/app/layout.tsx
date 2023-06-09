import './globals.css';
import { Saira } from 'next/font/google';

const font = Saira({ subsets: ['latin'] });

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
