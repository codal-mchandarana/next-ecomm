/* eslint-disable camelcase -- needed to import font */
import type { Metadata } from 'next';
import { Roboto, Inter } from 'next/font/google';
import './globals.css';
import type { JSX } from 'react';
import Footer from '@/components/custom1/Footer';
import CartContextProvider from '@/context1/CartContextProvider';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'], // Specify font weights (e.g., regular and bold)
});

const inter = Inter({ subsets: ['latin'], weight: ['300'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat ${roboto.variable} antialiased`}
      >
        <CartContextProvider>
          <>
            {children}
            <Footer />
          </>
        </CartContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
