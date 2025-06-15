import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Software Engineering Portfolio',
  description: 'Professional portfolio showcasing software engineering projects and skills',
  keywords: 'software engineer, web developer, react, node.js, typescript, portfolio',
  authors: [{ name: 'Software Engineer' }],

};
export const viewport={
  width:"device-width",
  initialScale:1,
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}