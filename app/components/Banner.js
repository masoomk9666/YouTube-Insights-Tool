'use client';

export default function Banner({ onSearch, isLoading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements['channel-search'];
    onSearch(input.value.trim());
  };

  return (
    <section className="banner bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] py-16 px-4 md:px-8 rounded-2xl text-center mb-12 shadow-2xl">
      <h4 className="text-lg font-semibold mb-2">TCU Tools</h4>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-orbitron">
        YouTube Insights Tool – Free Analytics for Creators
      </h1>
      <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
        Get detailed insights into any YouTube channel using TCU Youtube Insights Tool
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="channel-search"
            placeholder="Enter YouTube channel name or URL"
            className="flex-1 px-6 py-4 rounded-full border border-blue-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-4 bg-indigo-600 hover:bg-white text-gray-900 rounded-full font-bold transition-all duration-300 font-orbitron disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Loading...
              </>
            ) : (
              'See Analytics'
            )}
          </button>
        </div>
      </form>
    </section>
  );
}