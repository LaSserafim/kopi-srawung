import React from 'react';

export default function MenuSection({
  items,
  selectedCategory,
  setSelectedCategory,
  onAddToCart
}) {
  const categories = ['Semua', 'Coffee', 'Non-Coffee', 'Snacks'];

  // Helper to format IDR price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Helper to create direct WhatsApp link
  const getWhatsAppLink = (itemName) => {
    const phoneNumber = '6281234567890'; // Kopi Srawung WhatsApp Number
    const message = `Halo Kopi Srawung, saya mau pesan ${itemName}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="px-4 py-8 max-w-6xl mx-auto sm:px-6 lg:px-8">
      {/* Category Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-cream-200/60 rounded-full border border-sage/10 shadow-sm overflow-x-auto max-w-full no-scrollbar">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-sage text-cream-50 shadow-md transform scale-105'
                    : 'text-espresso/70 hover:text-espresso hover:bg-cream-200/40'
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
          <h3 className="mt-4 text-lg font-medium text-espresso/80">Menu tidak ditemukan</h3>
          <p className="mt-1 text-sm text-espresso/60">Coba kata kunci pencarian yang lain.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-cream-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sage/10"
            >
              {/* Product Image and Badges */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Category Badge (Top Left) */}
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-espresso text-cream-50 rounded-full bg-opacity-80 backdrop-blur-sm">
                  {item.category}
                </span>

                {/* Promotional tag (Top Right) */}
                {item.tag && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide bg-sage text-cream-50 rounded-full shadow-sm animate-pulse-slow">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-sage transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="font-outfit font-semibold text-base text-sage-600 whitespace-nowrap bg-sage-50 px-2 py-0.5 rounded-lg border border-sage/10">
                    {formatPrice(item.price)}
                  </span>
                </div>
                
                <p className="text-xs text-espresso/70 leading-relaxed font-normal mb-5 flex-1 line-clamp-3">
                  {item.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 mt-auto">
                  {/* Pesan Direct Button */}
                  <a
                    href={getWhatsAppLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-sage hover:bg-sage-600 text-cream-50 text-xs font-bold rounded-xl shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-center"
                  >
                    {/* WhatsApp Icon */}
                    <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.79-11.388c.272.147 1.621.8 1.874.891.252.093.437.138.62.414.184.275.713 1.055.874 1.238.16.183.321.206.592.06 1.04-.519 1.776-.844 2.483-2.053.18-.306.18-.082.529-.631.14-.227.07-.417-.015-.588-.085-.171-.756-1.821-1.037-2.5-.273-.66-.553-.57-.756-.58l-.645-.01c-.223 0-.586.082-.893.414-.306.331-1.169 1.141-1.169 2.782 0 1.64 1.198 3.226 1.362 3.447.165.221 2.352 3.593 5.698 5.034.795.343 1.417.548 1.901.704.8.254 1.527.218 2.102.132.64-.096 1.621-.662 1.85-1.269.229-.607.229-1.129.16-1.239-.069-.11-.252-.175-.523-.308z" />
                    </svg>
                    Pesan
                  </a>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => onAddToCart(item)}
                    className="inline-flex items-center justify-center p-2.5 bg-cream-200 hover:bg-sage/10 text-espresso hover:text-sage-600 rounded-xl transition-all duration-300 cursor-pointer"
                    title="Tambah ke Keranjang"
                  >
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
