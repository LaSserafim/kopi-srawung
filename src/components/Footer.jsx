import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream-100/90 py-10 mt-auto border-t border-sage/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          
          {/* Brand/About */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-cream-50">Kopi Srawung</h3>
            <p className="text-xs text-cream-200/80 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Titik kumpul favorit mahasiswa Semarang untuk bertukar pikiran, merangkai cerita, dan beristirahat sejenak di sela-sela kesibukan kampus.
            </p>
          </div>

          {/* Operating Info */}
          <div className="space-y-3">
            <h4 className="font-outfit text-sm font-bold uppercase tracking-wider text-sage-300">Jam Operasional</h4>
            <p className="text-sm font-medium text-cream-50">Setiap Hari: 09:00 - 00:00 WIB</p>
            <p className="text-xs text-cream-200/60 font-medium">Free High-Speed Wi-Fi & Banyak Colokan Listrik</p>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-outfit text-sm font-bold uppercase tracking-wider text-sage-300">Lokasi & Kontak</h4>
            <p className="text-xs leading-relaxed text-cream-100">
              Jl. Tembalang Raya No. 99, Kecamatan Tembalang, Kota Semarang, Jawa Tengah 50275
            </p>
            <p className="text-xs text-cream-200/80">
              Email: hello@kopisrawung.com<br />
              WA: +62 812-3456-7890
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-cream-100/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-200/50">
            &copy; {new Date().getFullYear()} Kopi Srawung Semarang. All rights reserved.
          </p>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded-full bg-cream-100/5 hover:bg-sage text-cream-200 hover:text-cream-50 flex items-center justify-center transition-all duration-300"
              title="Instagram"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded-full bg-cream-100/5 hover:bg-sage text-cream-200 hover:text-cream-50 flex items-center justify-center transition-all duration-300"
              title="TikTok"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.95-1.72-.1.65-.06 1.29-.06 1.94 0 2.89-.13 5.89-1.72 8.44-1.72 2.75-4.9 4.33-8.17 4.22-3.4-.1-6.66-2.18-7.98-5.32-1.37-3.24-.7-7.25 1.75-9.84 2.13-2.26 5.48-3.08 8.48-2.11V4.89c-2.02-.67-4.41-.05-5.83 1.48-1.54 1.67-1.77 4.36-.78 6.42 1 2.06 3.4 3.29 5.67 2.99 2.22-.3 4.1-2.22 4.19-4.46V.02z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
