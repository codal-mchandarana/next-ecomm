import { type JSX } from 'react';
import Header from '@/components/Custom/Header';
import SupportPage from '@/pages/SupportPage';

const Support: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back />
      <SupportPage />
    </>
  );
};

export default Support;
