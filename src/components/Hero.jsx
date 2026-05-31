import React from 'react';

export default function Hero({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full overflow-hidden bg-espresso text-cream-100">
      {/* Background Image Banner with overlay */}
      <div className="relative h-[280px] sm:h-[350px] md:h-[400px] w-full">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200"
          alt="Kopi Srawung Cafe Ambience"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-transparent"></div>
      </div>

      {/* Floating Brand & Tagline Content */}
      <div className="relative -mt-20 px-4 pb-8 sm:px-6 md:px-8 max-w-4xl mx-auto text-center">
        <div className="glassmorphism-dark rounded-3xl p-6 sm:p-8 shadow-2xl border border-cream-100/10">
          {/* Cafe badge */}
          <span className="inline-block px-3 py-1 mb-3 text-xs uppercase tracking-wider font-semibold bg-sage text-cream-100 rounded-full">
            Semarang Cafe & Creative Space
          </span>
          
          {/* Cafe Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream-50 mb-3">
            Kopi Srawung
          </h1>
          
          {/* Student Tagline */}
          <p className="font-outfit text-sm sm:text-base md:text-lg text-cream-200/90 max-w-xl mx-auto leading-relaxed mb-6">
            Nongkrong Srawung, Dompet Tenang. Tempat ternyaman untuk nugas kuliah, diskusi hangat, dan berbagi cerita seru di Semarang.
          </p>

          {/* Search bar inside the hero */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-cream-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Cari kopi, taro latte, atau camilan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 bg-cream-50/10 border border-cream-100/20 rounded-full text-cream-50 placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 text-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-cream-300 hover:text-cream-50"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
