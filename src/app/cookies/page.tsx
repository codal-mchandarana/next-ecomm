import { type JSX } from 'react';
import Header from '@/components/custom1/Header';
import CookiesPage from '@/pages/CookiesPage';

const Cookies: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back />
      <CookiesPage />
    </>
  );
};

export default Cookies;
