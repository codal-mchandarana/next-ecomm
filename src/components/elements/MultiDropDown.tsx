'use client';

import { useEffect, useRef, useState, type JSX } from 'react';
import type { TagFilterProps } from '@/lib/types';

interface MultiDropDownInterface extends TagFilterProps {
  Tags: string[];
  selectedTag?: string;
}

const MultiDropDown: React.FC<MultiDropDownInterface> = ({
  filters,
  Tags,
  selectedTag,
  fieldvalue,
  setFieldValue,
  handleFilters,
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
      className="relative z-[9] inline-flex shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
    >
      <button
        type="button"
        data-target="dropdown-with-check"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-black transition-all duration-500 hover:bg-white "
      >
        {selectedTag ? (
          selectedTag
        ) : (
          <>
            {Array.isArray(fieldvalue) && fieldvalue.length > 0
              ? `${fieldvalue.length.toString()} Selected`
              : 'Select Tags'}
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
          </>
        )}
      </button>
      {selectedTag ? null : (
        <div
          id="dropdown-with-check"
          className={`absolute top-full mt-2 w-72 rounded-xl bg-white p-6 shadow-lg ${!isOpen ? 'hidden' : ''}`}
          aria-labelledby="dropdown-with-check"
        >
          <div className="relative mb-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 15.75L14.25 14.25M15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25Z"
                  stroke="#6B7280"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-search"
              className="block w-full rounded-full border border-gray-300 px-4 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none "
              placeholder="Search in list.."
            />
          </div>
          <ul className="space-y-4">
            {Tags.map((tag: string, index: number) => {
              return (
                <li key={index}>
                  <div className="flex items-center">
                    <input
                      id="checkbox-example-1"
                      type="checkbox"
                      checked={fieldvalue.includes(tag)}
                      value=""
                      onChange={(event) => {
                        const isChecked: boolean = event.target.checked;

                        let tagsArray: string[] = fieldvalue;
                        if (isChecked) {
                          tagsArray.push(tag);
                        } else {
                          tagsArray = fieldvalue.filter((t) => t !== tag);
                        }

                        setFieldValue(tagsArray);
                        handleFilters(filters.search, tagsArray, filters.stock);
                      }}
                      className="mr-2 size-5 cursor-pointer appearance-none rounded-md border  border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                    />
                    <label
                      htmlFor="checkbox-example-1"
                      className="cursor-pointer text-base font-medium text-gray-900"
                    >
                      {tag}
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiDropDown;
