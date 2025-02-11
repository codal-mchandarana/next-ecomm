import { type JSX } from 'react';
import Header from '@/components/custom1/Header';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';

const Privacy: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back />
      <PrivacyPolicyPage />
    </>
  );
};

export default Privacy;
