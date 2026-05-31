import React from 'react';

export default function Hero({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full overflow-hidden bg-espresso text-cream-100">
      {/* Background Image Banner with overlay */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200"
          alt="Kopi Srawung Cozy Cafe Interior"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent"></div>
      </div>

      {/* Floating Brand & Tagline Content */}
      <div className="relative -mt-16 px-4 pb-6 sm:px-6 md:px-8 max-w-4xl mx-auto text-center">
        <div className="glassmorphism-dark rounded-3xl p-5 sm:p-7 shadow-2xl border border-cream-100/10">
          {/* Cafe badge */}
          <span className="inline-block px-3 py-1 mb-2.5 text-[10px] uppercase tracking-wider font-extrabold bg-sage text-cream-50 rounded-full">
            Tembalang Cafe & Workspace
          </span>
          
          {/* Cafe Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-50 mb-2">
            Kopi Srawung
          </h1>
          
          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-cream-200/90 max-w-lg mx-auto leading-relaxed mb-5 font-medium">
            Tempat nongkrong estetik & hemat mahasiswa di Tembalang, Semarang.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <svg className="h-4.5 w-4.5 text-cream-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Cari menu kopi, matcha, atau camilan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-10 py-2.5 bg-cream-50/10 border border-cream-100/20 rounded-full text-cream-50 placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 text-xs sm:text-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-cream-300 hover:text-cream-50 cursor-pointer"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
