const Hero = () => {
    return (
      <>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Your Dream Job Awaits
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover thousands of opportunities from top companies. Start your
              journey with CareerSync today.
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
      </>
    );
}

export default Hero;