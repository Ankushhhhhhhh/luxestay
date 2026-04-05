import { Search, Globe, Menu, User as UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          <div className="flex flex-row items-center gap-3 relative" ref={menuRef}>
            <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              Luxestay your home
            </div>
            <div 
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <Menu size={18} />
              <div className="hidden md:block">
                <div className="bg-gray-500 rounded-full text-white p-1">
                  <UserIcon size={18} />
                </div>
              </div>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-14 right-0 w-64 bg-white border rounded-xl shadow-xl py-2 z-50">
                {user ? (
                  <>
                    <div className="px-4 py-2 font-semibold text-sm border-b mb-1">
                      {user.email}
                    </div>
                    <Link to="/" className="block px-4 py-2 hover:bg-neutral-100 text-sm">Messages</Link>
                    <Link to="/" className="block px-4 py-2 hover:bg-neutral-100 text-sm">Trips</Link>
                    <Link to="/" className="block px-4 py-2 hover:bg-neutral-100 text-sm">Wishlists</Link>
                    <hr className="my-1" />
                    <Link to="/" className="block px-4 py-2 hover:bg-neutral-100 text-sm">Manage listings</Link>
                    <Link to="/" className="block px-4 py-2 hover:bg-neutral-100 text-sm">Account</Link>
                    <hr className="my-1" />
                    <button 
                      onClick={() => {
                        signOut();
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-neutral-100 text-sm"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/signup" 
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 hover:bg-neutral-100 text-sm font-semibold"
                    >
                      Sign up
                    </Link>
                    <Link 
                      to="/login" 
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 hover:bg-neutral-100 text-sm"
                    >
                      Log in
                    </Link>
                    <hr className="my-1" />
                    <Link to="/" className="block px-4 py-2 hover:bg-neutral-100 text-sm">Luxestay your home</Link>
                    <Link to="/" className="block px-4 py-2 hover:bg-neutral-100 text-sm">Help Center</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
