import { useState } from 'react';
const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 border-b border-gray-200">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">CareerSync</a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:text-indigo-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Find Jobs</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Companies</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Post a Job</a>
            <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">Sign Up</a>
            <a href="#" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">Login</a>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-2 shadow-sm">
            <div className="flex flex-col items-center space-y-2 p-2">
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600 w-full text-center">Find Jobs</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600 w-full text-center">Companies</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600 w-full text-center">Post a Job</a>
              <a href="#" className="block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors w-full text-center">Sign Up</a>
              <a href="#" className="block px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors w-full text-center">Login</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Your Dream Job Awaits</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover thousands of opportunities from top companies. Start your journey with CareerSync today.
          </p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search by title, keyword, or company..."
              className="p-4 rounded-l-md w-full max-w-md text-gray-800 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-indigo-500 bg-white"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-8 py-4 rounded-r-md font-semibold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content - Job Listings Placeholder */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Job Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Job Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Software Engineer</h3>
            <p className="text-indigo-600 font-medium mb-4">Tech Solutions Inc.</p>
            <p className="text-gray-700 mb-4">
              We are looking for a passionate Senior Software Engineer to join our dynamic team...
            </p>
            <div className="flex justify-between items-center">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Full-time</span>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">View Details &rarr;</a>
            </div>
          </div>

          {/* Placeholder Job Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Manager</h3>
            <p className="text-indigo-600 font-medium mb-4">Creative Innovations</p>
            <p className="text-gray-700 mb-4">
              Join our product team to drive the vision and roadmap for our next-gen products...
            </p>
            <div className="flex justify-between items-center">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Remote</span>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">View Details &rarr;</a>
            </div>
          </div>

          {/* Placeholder Job Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">UX/UI Designer</h3>
            <p className="text-indigo-600 font-medium mb-4">Design Studios LLC</p>
            <p className="text-gray-700 mb-4">
              Shape intuitive and visually appealing user experiences across our platforms...
            </p>
            <div className="flex justify-between items-center">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Part-time</span>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">View Details &rarr;</a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} CareerSync. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;