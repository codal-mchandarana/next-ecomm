import { Equal, Plus, ShoppingBag } from 'lucide-react';
import type { JSX } from 'react';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center justify-between bg-white shadow-lg">
      <div className='ml-12 flex w-1/11 justify-between'>
        <Equal className='cursor-pointer' size={28} />
        <Plus className='cursor-pointer' size={28} />
      </div>
      <div className='mr-6'>
        <ShoppingBag className='cursor-pointer' absoluteStrokeWidth />
      </div>
    </div>
  );
};

export default Header;
