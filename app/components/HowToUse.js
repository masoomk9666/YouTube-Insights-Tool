export default function HowToUse() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-400 font-orbitron">
          How to Use YouTube Insights Tool
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-[#1a1a2e] p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
            <div className="text-5xl font-bold text-indigo-500 mb-4">1</div>
            <h3 className="text-xl font-bold mb-4 text-white">Enter Channel Information</h3>
            <p className="text-gray-300">
              Enter the YouTube channel name, URL, or channel ID in the search box above. 
              You can use:
              • Channel URL (youtube.com/channel/...)
              • Custom URL (youtube.com/c/...)
              • Channel name directly
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#1a1a2e] p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
            <div className="text-5xl font-bold text-indigo-500 mb-4">2</div>
            <h3 className="text-xl font-bold mb-4 text-white">Click "See Analytics"</h3>
            <p className="text-gray-300">
              Click the search button or press Enter. Our tool will fetch 
              real-time data from YouTube's API and process it to provide you 
              with comprehensive analytics.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#1a1a2e] p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
            <div className="text-5xl font-bold text-indigo-500 mb-4">3</div>
            <h3 className="text-xl font-bold mb-4 text-white">Analyze Insights</h3>
            <p className="text-gray-300">
              View detailed analytics including subscriber growth, video performance, 
              estimated revenue, audience demographics, and engagement metrics. 
              All data is presented in easy-to-understand charts and graphs.
            </p>
          </div>
        </div>

        {/* Additional Tips */}
        <div className="mt-12 bg-[#1a1a2e] p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-indigo-400">Pro Tips:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <i className="fas fa-check-circle text-green-500 mt-1"></i>
              <p className="text-gray-300">
                For private channels, only public information will be displayed
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-check-circle text-green-500 mt-1"></i>
              <p className="text-gray-300">
                Revenue estimates are based on average RPM rates per country
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-check-circle text-green-500 mt-1"></i>
              <p className="text-gray-300">
                Data is updated in real-time using YouTube's official API
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-check-circle text-green-500 mt-1"></i>
              <p className="text-gray-300">
                All analytics are completely free with no usage limits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}