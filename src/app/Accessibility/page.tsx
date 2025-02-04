import { type JSX } from 'react';
import Header from '@/components/Custom/Header';
import AccessibilityPage from '@/pages/AccessibilityPage';

const Accessibility: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back />
      <AccessibilityPage />
    </>
  );
};

export default Accessibility;
