'use client';

import { ChevronLeft, Equal, Plus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useContext, useState, type JSX } from 'react';
import { CartContext } from '@/context1/CartContextProvider';

const Header: React.FC<{ back: boolean }> = ({ back }): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { carts } = useContext(CartContext);

  if (back)
    return (
      <div className="fixed top-0 z-10 flex h-14 w-full items-center justify-between bg-white shadow-lg">
        <Link href="/">
          <ChevronLeft
            onClick={() => {
              setToggle(true);
            }}
            className="ml-12 cursor-pointer transition-all duration-150 ease-in-out active:scale-105"
            size={26}
          />
        </Link>
      </div>
    );

  return (
    <div className="fixed top-0 z-10 flex h-14 w-full items-center justify-between bg-white shadow-lg">
      {!toggle ? (
        <div className="ml-12 flex w-1/11 justify-between">
          <Equal
            onClick={() => {
              setToggle(true);
            }}
            className="cursor-pointer transition-all duration-150 ease-in-out active:scale-95"
            size={28}
          />
          <Plus className="cursor-pointer" size={28} />
        </div>
      ) : null}
      {toggle ? (
        <div className="ml-12 flex items-center justify-between gap-10">
          <ChevronLeft
            onClick={() => {
              setToggle(false);
            }}
            className="cursor-pointer transition-transform duration-300"
            size={28}
          />
          <ul className="flex gap-8 text-lg font-bold">
            <Link href="/support">
              <li className="cursor-pointer">SUPPORT</li>
            </Link>
            <Link href="/terms">
              <li className="cursor-pointer">TERMS</li>
            </Link>
            <Link href="/privacy">
              <li className="cursor-pointer">PRIVACY</li>
            </Link>
            <Link href="/accessibility">
              <li className="cursor-pointer">ACCESSIBILITY</li>
            </Link>
            <Link href="/cookies">
              <li className="cursor-pointer">COOKIES</li>
            </Link>
          </ul>
        </div>
      ) : null}
      <div className="relative mr-6">
        <Link href="/cart">
          <ShoppingBag
            className="cursor-pointer active:scale-95"
            absoluteStrokeWidth
          />
          {carts.length > 0 && (
            <span className="absolute -right-3 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {carts.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
