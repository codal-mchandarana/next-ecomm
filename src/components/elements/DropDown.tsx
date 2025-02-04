'use client';
import { useEffect, useRef, useState, type JSX } from 'react';

const DropDown: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent):void => {
    if (dropdown.current && !dropdown.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={dropdown}
      className="relative inline-flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
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
        Select{' '}
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
        className={`absolute top-full mt-2 w-72 rounded-xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${!isOpen ? 'hidden' : ''}`}
        aria-labelledby="dropdown-default"
      >
        <ul className="py-2">
          <li>
            <span className="block cursor-pointer px-6 py-2 font-medium text-gray-900 hover:bg-gray-100">
              {' '}
              In Stock{' '}
            </span>
          </li>
          <li>
            <span className="block cursor-pointer px-6 py-2 font-medium text-gray-900 hover:bg-gray-100">
              {' '}
              Out of Stock{' '}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
