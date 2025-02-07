'use client';
import { useEffect, useRef, useState, type JSX } from 'react';
import type { FilterProps } from '@/lib/types';

const DropDown: React.FC<FilterProps> = ({
  filters,
  handleFilters,
  fieldvalue,
  setFieldValue,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdown = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdown.current && !dropdown.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div
      ref={dropdown}
      className="relative z-[9] inline-flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
    >
      <button
        type="button"
        data-target="dropdown-default"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-black transition-all duration-500 hover:bg-white "
      >
        {' '}
        {fieldvalue}{' '}
        <svg
          className="dropdown-open:rotate-180 size-2.5 text-black"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        id="dropdown-default"
        className={`absolute top-full mt-2 w-40 rounded-xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${!isOpen ? 'hidden' : ''}`}
        aria-labelledby="dropdown-default"
      >
        <ul className="py-2">
          <li>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setFieldValue('In Stock');
                handleFilters(filters.search,filters.tags, 1);
              }}
              className="block w-full cursor-pointer px-6 py-2 text-left font-medium text-gray-900 hover:bg-gray-100"
            >
              {' '}
              In Stock{' '}
            </button>
          </li>
          <li>
            <button
              type="button"
              className="block w-full cursor-pointer px-6 py-2 text-left font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => {
                setIsOpen(false);
                setFieldValue('Out of Stock');
                handleFilters(filters.search,filters.tags, 2);
              }}
            >
              {' '}
              Out of Stock{' '}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
