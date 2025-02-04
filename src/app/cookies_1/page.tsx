import { type JSX } from 'react';
import Header from '@/components/Custom/Header';
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
