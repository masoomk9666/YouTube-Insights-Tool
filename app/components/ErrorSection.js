'use client';

export default function ErrorSection({ error, onRetry }) {
  return (
    <section className="error-section flex justify-center items-center min-h-[50vh]">
      <div className="error-card bg-[#2e0f0f] p-8 rounded-xl text-center max-w-lg w-full border-l-4 border-red-500">
        <i className="fas fa-exclamation-triangle text-5xl text-red-500 mb-4"></i>
        <h2 className="text-2xl font-bold mb-4 text-red-400 font-orbitron">Error</h2>
        <p className="text-gray-300 mb-6">{error}</p>
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-1"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}