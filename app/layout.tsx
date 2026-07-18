import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ujjwal Sharma | Full Stack & AI Engineer Portfolio',
  description: 'Professional portfolio of Ujjwal Sharma, an AI Full-Stack Developer Intern & CS Student specializing in TypeScript, Python, FastAPI, and GenAI.',
  keywords: 'Ujjwal Sharma, software engineer, full stack developer, AI engineer, RAG, MCP, React, Next.js, FastAPI, portfolio',
  authors: [{ name: 'Ujjwal Sharma' }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}