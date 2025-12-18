export default function WhyUse() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white font-orbitron">
          Why Use Our YouTube Insights Tool?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-[#0f0f23] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-indigo-900">
            <div className="text-4xl text-indigo-500 mb-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Complete Analytics</h3>
            <p className="text-gray-300">
              Get comprehensive insights including subscriber growth, view counts, 
              engagement rates, and estimated revenue all in one dashboard.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#0f0f23] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-indigo-900">
            <div className="text-4xl text-indigo-500 mb-4">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Real-time Data</h3>
            <p className="text-gray-300">
              Access the most up-to-date channel statistics directly from 
              YouTube's API. No outdated or cached information.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#0f0f23] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-indigo-900">
            <div className="text-4xl text-indigo-500 mb-4">
              <i className="fas fa-lock-open"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">100% Free</h3>
            <p className="text-gray-300">
              No subscriptions, no credit card required, and no usage limits. 
              Our tool is completely free for all users.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#0f0f23] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-indigo-900">
            <div className="text-4xl text-indigo-500 mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Mobile Friendly</h3>
            <p className="text-gray-300">
              Optimized for all devices. Analyze YouTube channels on your 
              desktop, tablet, or mobile phone with perfect responsiveness.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-[#0f0f23] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-indigo-900">
            <div className="text-4xl text-indigo-500 mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Safe & Secure</h3>
            <p className="text-gray-300">
              We don't store any personal data. All searches are processed 
              securely through YouTube's official API.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-[#0f0f23] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-indigo-900">
            <div className="text-4xl text-indigo-500 mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">For Everyone</h3>
            <p className="text-gray-300">
              Perfect for creators, marketers, researchers, businesses, 
              or anyone interested in YouTube analytics.
            </p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-[#0f0f23] p-8 rounded-2xl border border-indigo-900">
          <h3 className="text-2xl font-bold mb-6 text-indigo-400">Who Can Benefit:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl text-indigo-500 mb-3">
                <i className="fas fa-video"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Content Creators</h4>
              <p className="text-gray-300 text-sm">
                Track your channel growth and compare with competitors
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl text-indigo-500 mb-3">
                <i className="fas fa-briefcase"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Marketers</h4>
              <p className="text-gray-300 text-sm">
                Analyze influencer performance for brand collaborations
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl text-indigo-500 mb-3">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Researchers</h4>
              <p className="text-gray-300 text-sm">
                Study YouTube trends and audience behavior patterns
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}