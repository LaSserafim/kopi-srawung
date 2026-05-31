import React, { useState } from 'react';

export default function Cart({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to format IDR price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Build bulk order message
  const getWhatsAppCartLink = () => {
    const phoneNumber = '6281234567890';
    let message = 'Halo Kopi Srawung, saya mau pesan:\n\n';
    
    cartItems.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})\n`;
    });
    
    message += `\n*Total: ${formatPrice(totalPrice)}*\n\nTerima kasih!`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  if (totalItems === 0) return null;

  return (
    <>
      {/* Floating Bottom Bar (Sticky trigger) */}
      <div className="fixed bottom-6 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none">
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto flex items-center justify-between w-full max-w-md px-6 py-4 bg-espresso text-cream-50 rounded-full shadow-2xl hover:bg-espresso-100 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-sage/20"
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sage text-cream-50 text-xs font-black animate-bounce">
              {totalItems}
            </span>
            <span className="text-sm font-semibold tracking-wide">Lihat Keranjang</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold font-outfit">{formatPrice(totalPrice)}</span>
            <svg className="h-5 w-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Cart Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-espresso/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Cart Drawer Panel */}
      <div
        className={`fixed right-0 bottom-0 left-0 sm:top-0 sm:left-auto sm:w-[420px] max-h-[85vh] sm:max-h-screen bg-cream rounded-t-[32px] sm:rounded-t-none sm:rounded-l-[32px] shadow-2xl z-50 flex flex-col transition-transform duration-500 ease-out transform ${
          isOpen ? 'translate-y-0 sm:translate-x-0' : 'translate-y-full sm:translate-x-full sm:translate-y-0'
        }`}
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-sage/10 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl font-bold text-espresso">Keranjang Belanja</h2>
            <p className="text-xs text-espresso/60">{totalItems} item dipilih</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-espresso/70 hover:text-espresso hover:bg-cream-200/50 rounded-full transition-all cursor-pointer"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Item List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 max-h-[40vh] sm:max-h-[calc(100vh-280px)]">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-cream-50 p-3.5 rounded-2xl border border-sage/5 hover:border-sage/20 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-espresso truncate">{item.name}</h4>
                <p className="text-xs text-sage-600 font-medium font-outfit mt-0.5">{formatPrice(item.price)}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-espresso/40 hover:text-red-500 transition-colors p-1"
                  title="Hapus"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <div className="flex items-center bg-cream-200/80 rounded-lg p-0.5 border border-sage/10">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-0.5 text-espresso/70 hover:text-espresso font-black cursor-pointer text-sm"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-bold text-espresso">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-0.5 text-espresso/70 hover:text-espresso font-black cursor-pointer text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer & Checkout */}
        <div className="p-6 border-t border-sage/10 bg-cream-50/60 rounded-t-3xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-espresso/70">Subtotal</span>
            <span className="text-xl font-bold font-outfit text-espresso">{formatPrice(totalPrice)}</span>
          </div>

          <div className="flex flex-col gap-2">
            {/* WhatsApp Bulk Order Button */}
            <a
              href={getWhatsAppCartLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-sage hover:bg-sage-600 text-cream-50 font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center text-sm cursor-pointer"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.79-11.388c.272.147 1.621.8 1.874.891.252.093.437.138.62.414.184.275.713 1.055.874 1.238.16.183.321.206.592.06 1.04-.519 1.776-.844 2.483-2.053.18-.306.18-.082.529-.631.14-.227.07-.417-.015-.588-.085-.171-.756-1.821-1.037-2.5-.273-.66-.553-.57-.756-.58l-.645-.01c-.223 0-.586.082-.893.414-.306.331-1.169 1.141-1.169 2.782 0 1.64 1.198 3.226 1.362 3.447.165.221 2.352 3.593 5.698 5.034.795.343 1.417.548 1.901.704.8.254 1.527.218 2.102.132.64-.096 1.621-.662 1.85-1.269.229-.607.229-1.129.16-1.239-.069-.11-.252-.175-.523-.308z" />
              </svg>
              Kirim Pesanan via WhatsApp
            </a>

            {/* Clear Cart Button */}
            <button
              onClick={() => {
                onClearCart();
                setIsOpen(false);
              }}
              className="w-full py-2.5 bg-transparent hover:bg-cream-200/40 text-espresso/60 hover:text-espresso text-xs font-semibold rounded-xl transition-all cursor-pointer text-center"
            >
              Kosongkan Keranjang
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
