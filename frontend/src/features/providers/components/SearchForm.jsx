import React from "react";
import { IoClose, IoSearch } from "react-icons/io5";

export const SearchForm = ({ setSearch, search }) => {
  return (
    <div className="relative  mt-10 sm:rounded-lg">
      <div className="flex flex-col  sm:flex-row  space-y-4 sm:space-y-0 items-center justify-end pb-4">
        {/* Search Bar */}
        <label htmlFor="table-search" className="sr-only">
          Buscar
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
            <IoSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>

          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            id="table-search"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar proveedor por nombre de empresa"
          />

          {
            search.length > 0 && (
              <button
                onClick={() => setSearch("")}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
              >
                <IoClose size={20} />
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};
