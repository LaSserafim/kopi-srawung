import React, { useState } from 'react';

export default function MenuSection({
  items,
  selectedCategory,
  setSelectedCategory,
  onAddToCart,
  tableNumber
}) {
  const categories = ['Semua', 'Coffee', 'Non-Coffee', 'Snacks & Meals'];
  const [imageErrors, setImageErrors] = useState({});

  // Helper to format IDR price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price).replace(/\u00A0/, ' '); // Ensure clean space
  };

  // Helper to create direct WhatsApp link based on spec
  const getWhatsAppLink = (itemName, itemPrice) => {
    const phoneNumber = '62895351229363'; // Specific WhatsApp Number
    const formattedPrice = formatPrice(itemPrice);
    const message = `Halo Kopi Srawung, saya sedang di meja ${tableNumber} dan mau pesan ${itemName} seharga ${formattedPrice}. Tolong diproses ya, terima kasih!`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="px-4 py-6 max-w-6xl mx-auto sm:px-6 lg:px-8">
      {/* Category Navigation Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex p-1 bg-cream-200/50 rounded-full border border-sage/10 shadow-sm overflow-x-auto max-w-full no-scrollbar">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap hover:scale-105 cursor-pointer ${
                  isActive
                    ? 'bg-sage text-white shadow-sm'
                    : 'text-charcoal/70 hover:text-espresso hover:bg-cream-200/30'
                }`}
              >
                {category === 'Semua' ? 'Semua Menu' : category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Grid */}
      {items.length === 0 ? (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-sage/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-base font-semibold text-espresso/80">Menu tidak ditemukan</h3>
          <p className="mt-1 text-xs text-charcoal/60">Coba kata kunci pencarian yang lain.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-sage/5"
            >
              {/* Product Image and Fallback */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
                {imageErrors[item.id] ? (
                  /* Fallback Beautiful Cafe SVG Placeholder */
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-cream-50 text-sage/60 select-none">
                    <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-[9px] font-bold uppercase tracking-wider">Kopi Srawung</span>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={() => handleImageError(item.id)}
                    className="h-full w-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                )}
                
                {/* Category Badge */}
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[8px] font-bold tracking-wider uppercase bg-espresso/80 text-white rounded bg-opacity-75 backdrop-blur-sm">
                  {item.category === 'Snacks & Meals' ? 'Snacks' : item.category}
                </span>

                {/* Promo tag */}
                {item.tag && (
                  <span className="absolute top-2 right-2 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide bg-sage text-white rounded shadow-sm">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1 p-3 sm:p-4">
                <div className="flex flex-col gap-1 mb-1.5">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-espresso group-hover:text-sage transition-colors duration-300 line-clamp-1">
                    {item.name}
                  </h3>
                  <span className="font-outfit font-extrabold text-xs sm:text-sm text-sage">
                    {formatPrice(item.price)}
                  </span>
                </div>
                
                <p className="text-[10px] sm:text-xs text-charcoal/80 leading-relaxed font-normal mb-3.5 flex-1 line-clamp-2">
                  {item.description}
                </p>

                {/* CTA Action Buttons */}
                <div className="flex items-center gap-1.5 mt-auto">
                  {/* Pesan via WA Button */}
                  <a
                    href={getWhatsAppLink(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-sage hover:bg-sage/95 text-white text-[10px] sm:text-xs font-bold rounded-xl shadow-sm hover:shadow active:scale-98 transition-all duration-300 text-center cursor-pointer"
                  >
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.79-11.388c.272.147 1.621.8 1.874.891.252.093.437.138.62.414.184.275.713 1.055.874 1.238.16.183.321.206.592.06 1.04-.519 1.776-.844 2.483-2.053.18-.306.18-.082.529-.631.14-.227.07-.417-.015-.588-.085-.171-.756-1.821-1.037-2.5-.273-.66-.553-.57-.756-.58l-.645-.01c-.223 0-.586.082-.893.414-.306.331-1.169 1.141-1.169 2.782 0 1.64 1.198 3.226 1.362 3.447.165.221 2.352 3.593 5.698 5.034.795.343 1.417.548 1.901.704.8.254 1.527.218 2.102.132.64-.096 1.621-.662 1.85-1.269.229-.607.229-1.129.16-1.239-.069-.11-.252-.175-.523-.308z" />
                    </svg>
                    Pesan via WA
                  </a>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => onAddToCart(item)}
                    className="inline-flex items-center justify-center p-2 bg-cream-200 hover:bg-sage/10 text-espresso hover:text-sage rounded-xl transition-all duration-300 cursor-pointer"
                    title="Tambah ke Keranjang"
                  >
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
