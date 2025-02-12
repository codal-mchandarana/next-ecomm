// import Image from 'next/image';
'use client';
import { useContext, type JSX } from 'react';
import { Frown, ShoppingCart } from 'lucide-react';
import CartItem from '@/components/custom/CartItem';
import CartSummary from '@/components/custom/CartSummary';
import { CartContext } from '@/context/CartContextProvider';

const CartPage: React.FC = (): JSX.Element => {
  const { carts } = useContext(CartContext);

  if (carts.length === 0) {
    return (
      <div className=" flex h-full items-center justify-center">
        <div className="mr-3 font-bold xs:text-2xl sm:text-3xl">YOUR CART IS EMPTY</div>
        <Frown className="text-red-600" size={40} />
      </div>
    );
  }

  return (
    <section
      className={`mb-32 ${carts.length <= 0 ? 'h-screen' : ''} py-8 antialiased dark:bg-gray-900 md:py-16`}
    >
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex items-center justify-center">
          <h1 className="p-4 text-3xl font-bold">YOUR CART </h1>
          <ShoppingCart className="mb-1 text-red-500" size={30} />
        </div>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            {carts.map((item) => {
              return (
                <div key={item.id}>
                  <div className="space-y-6">
                    <CartItem cartItem={item} />
                  </div>
                  <hr className="my-10 h-0.5 w-full border-t-0 bg-neutral-200 dark:bg-white/10" />
                </div>
              );
            })}
          </div>
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
