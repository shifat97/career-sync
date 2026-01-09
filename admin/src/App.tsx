import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 border-b border-gray-200">
          <nav className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600">
              CareerSync
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:text-indigo-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMobileMenuOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }
                  ></path>
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-4 items-center">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Find Jobs
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Companies
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Post a Job
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
              >
                Login
              </a>
            </div>
          </nav>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white py-2 shadow-sm">
              <div className="flex flex-col items-center space-y-2 p-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:text-indigo-600 w-full text-center"
                >
                  Find Jobs
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:text-indigo-600 w-full text-center"
                >
                  Companies
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:text-indigo-600 w-full text-center"
                >
                  Post a Job
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors w-full text-center"
                >
                  Sign Up
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors w-full text-center"
                >
                  Login
                </a>
              </div>
            </div>
          )}
        </header>

        <Outlet />

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} CareerSync. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
