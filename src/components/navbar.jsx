import React, { useState } from 'react';
import Logo from '../assets/afritsy.jpg';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className={`bg-transparent relative z-10 border-b border-teal-500 border-opacity-25 lg:border-none lg:bg-transparent ${open ? 'bg-sky-900' : ''}`} aria-label="Dashboard">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-sky-800">
            <div className="flex items-center px-2 lg:px-0">
              <div className="flex-shrink-0">
                <img className="block h-8 w-auto" src={Logo} alt="Afritsy Logo" />
              </div>
              <div className="hidden lg:ml-6 lg:block lg:space-x-4">
                <div className="flex">
                  <a href="#" className="hover:bg-orange-600 bg-black bg-opacity-25 rounded-md py-2 px-6 m-3 text-sm font-medium text-white">Dashboard</a>
                  <a href="#" className="hover:bg-orange-600 bg-black bg-opacity-25 rounded-md py-2 px-3 m-3 text-sm font-medium text-white">Service</a>
                  <a href="#" className="hover:bg-orange-600 bg-black bg-opacity-25 rounded-md py-2 px-3 m-3 text-sm font-medium text-white">Member</a>
                  <a href="#" className="hover:bg-orange-600 bg-black bg-opacity-25 rounded-md py-2 px-3 m-3 text-sm font-medium text-white">Contry</a>
                  <a href="#" className="hover:bg-orange-600 bg-black bg-opacity-25 rounded-md py-2 px-3 m-3 text-sm font-medium text-white">Project</a>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative text-orange-100 focus-within:text-gray-400">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <input id="search" name="search" className="block w-full rounded-md border border-transparent bg-orange-500 bg-opacity-50 py-2 pl-10 pr-3 leading-5 placeholder-orange-100 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm" placeholder="Search" type="search" />
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-orange-200 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={open} onClick={toggleMenu}>
                <span className="sr-only">Open main menu</span>
                <svg className={`block h-6 w-6 flex-shrink-0 ${open ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <svg className={`hidden h-6 w-6 flex-shrink-0 ${open ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="hidden lg:ml-4 lg:block">
              <div className="flex items-center">
                <button type="button" className="flex-shrink-0 rounded-full p-1 text-orange-200 hover:bg-orange-600 hover:text-white focus:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-900">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                  </svg>
                </button>
                <div className="relative ml-4 flex-shrink-0">
                  <button type="button" className="flex rounded-full text-sm text-white focus:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-900" id="user-menu-button" aria-expanded={open} onClick={toggleMenu}>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=320&amp;h=320&amp;q=80" alt="" />
                  </button>
                  {open && (
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div className="bg-sky-900 lg:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a href="#" className="bg-black bg-opacity-25 block rounded-md py-2 px-3 text-base font-medium text-white">Dashboard</a>
              <a href="#" className="hover:bg-orange-600 block rounded-md py-2 px-3 text-base font-medium text-white">Jobs</a>
              <a href="#" className="hover:bg-orange-600 block rounded-md py-2 px-3 text-base font-medium text-white">Applicants</a>
              <a href="#" className="hover:bg-orange-600 block rounded-md py-2 px-3 text-base font-medium text-white">Company</a>
            </div>
            <div className="border-t border-sky-800 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=320&amp;h=320&amp;q=80" alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">Conchita Gonzales</div>
                  <div className="text-sm font-medium text-orange-200">conchita@example.net</div>
                </div>
              </div>
              <div className="mt-3 px-2">
                <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-orange-200 hover:bg-orange-600 hover:text-white">Your Profile</a>
                <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-orange-200 hover:bg-orange-600 hover:text-white">Settings</a>
                <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-orange-200 hover:bg-orange-600 hover:text-white">Sign out</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
