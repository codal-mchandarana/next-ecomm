import { type JSX } from 'react';
import Header from '@/components/Custom/Header';

const Cart: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back />
      <h1 className="h-screen">No Items here</h1>
    </>
  );
};

export default Cart;
