const Jobs = () => {
    return (
      <>
        <main className="container mx-auto px-4 py-12 flex-grow">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Job Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Job Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Senior Software Engineer
              </h3>
              <p className="text-indigo-600 font-medium mb-4">
                Tech Solutions Inc.
              </p>
              <p className="text-gray-700 mb-4">
                We are looking for a passionate Senior Software Engineer to join
                our dynamic team...
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Full-time
                </span>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>

            {/* Placeholder Job Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Product Manager
              </h3>
              <p className="text-indigo-600 font-medium mb-4">
                Creative Innovations
              </p>
              <p className="text-gray-700 mb-4">
                Join our product team to drive the vision and roadmap for our
                next-gen products...
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Remote
                </span>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>

            {/* Placeholder Job Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                UX/UI Designer
              </h3>
              <p className="text-indigo-600 font-medium mb-4">
                Design Studios LLC
              </p>
              <p className="text-gray-700 mb-4">
                Shape intuitive and visually appealing user experiences across
                our platforms...
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Part-time
                </span>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>
          </div>
        </main>
      </>
    );
}

export default Jobs;