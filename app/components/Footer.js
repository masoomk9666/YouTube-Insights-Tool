export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] py-12 px-4 md:px-8 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-indigo-400 font-orbitron">TCU Tools</h3>
            <p className="text-gray-400 mt-2">Free YouTube Analytics for Creators</p>
          </div>
          
          <div className="footer-links flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
              API Documentation
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TCU Tools. All rights reserved. 
            This tool uses YouTube API Services and is not affiliated with YouTube LLC.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Data provided by YouTube API. Revenue estimates are approximations based on average RPM rates.
          </p>
        </div>
      </div>
    </footer>
  );
}