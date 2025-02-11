import { type JSX } from 'react';
import Header from '@/components/custom1/Header';
import TermsAndConditionsPage from '@/pages/TermsAndConditionsPage';

const Terms: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back />
      <TermsAndConditionsPage />
    </>
  );
};

export default Terms;
