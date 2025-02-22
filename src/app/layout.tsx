/* eslint-disable camelcase -- needed to import font */
import type { Metadata } from 'next';
import { Roboto, Fira_Code } from 'next/font/google'; // Replacing invalid fonts
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'], // Specify font weights (e.g., regular and bold)
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  weight: ['400'], // Specify font weights (e.g., regular)
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}