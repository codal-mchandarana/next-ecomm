import { type JSX } from 'react';
import type { FilterProps } from '@/lib/types';

const SearchBar: React.FC<FilterProps> = ({
  filters,
  handleFilters,
  fieldvalue,
  setFieldValue,
}): JSX.Element => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const { value }: { value: string } = event.target;
    setFieldValue(value);
    handleFilters(value, filters.stock);
  };

  return (
    <div className=" w-1/3 max-w-md rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="relative flex h-12 w-full items-center overflow-hidden rounded-lg bg-white focus-within:shadow-lg">
        <div className="grid h-full w-12 place-items-center text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="peer size-full pr-2 text-sm text-gray-700 outline-none"
          name="search"
          type="text"
          id="search"
          placeholder="Enter Product name.."
          value={fieldvalue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
