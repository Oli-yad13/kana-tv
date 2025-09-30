export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-black text-black tracking-tight">KANA TV</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-900 hover:text-pink-600 font-medium transition-colors">
              Home
            </button>
            <button className="text-gray-900 hover:text-pink-600 font-medium transition-colors">
              Shows
            </button>
            <button className="text-gray-900 hover:text-pink-600 font-medium transition-colors">
              About
            </button>
            <button className="text-gray-900 hover:text-pink-600 font-medium transition-colors">
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors">
              Watch Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-900 hover:text-pink-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}