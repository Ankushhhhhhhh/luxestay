import { Search, Globe, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <div className="bg-[#FF385C] p-1.5 rounded-lg">
              <div className="w-6 h-6 text-white flex items-center justify-center font-bold text-xl">
                L
              </div>
            </div>
            <span className="text-[#FF385C] font-bold text-xl hidden md:block tracking-tight">
              luxestay
            </span>
          </Link>

          {/* Search Bar */}
          <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
              <div className="text-sm font-semibold px-6">
                Anywhere
              </div>
              <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                Any week
              </div>
              <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                <div className="hidden sm:block">Add guests</div>
                <div className="p-2 bg-[#FF385C] rounded-full text-white">
                  <Search size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex flex-row items-center gap-3">
            <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              Luxestay your home
            </div>
            <div className="p-3 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
              <Menu size={18} />
              <div className="hidden md:block">
                <div className="bg-gray-500 rounded-full text-white p-1">
                  <User size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
