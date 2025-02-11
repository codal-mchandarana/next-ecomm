import { type JSX } from 'react';
import Header from '@/components/custom1/Header';
import CartPage from '@/pages/CartPage';

const Cart: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back />
      <CartPage />
    </>
  );
};

export default Cart;
