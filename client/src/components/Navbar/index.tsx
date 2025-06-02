import React from 'react';
import { Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state';



const Navbar = () => {
    const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
      );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black border-b border-gray-200 dark:border-gray-700">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        )}
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400 dark:text-gray-500" />
          <input
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-2 pl-9 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-400"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
        {/* Icons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          ) : (
            <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          )}
        </button>
        <Link
          href="/settings"
          className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Settings"
        >
          <Settings className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </Link>
        <div className="ml-2 mr-5 hidden h-8 w-[1px] bg-gray-200 dark:bg-gray-600 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
