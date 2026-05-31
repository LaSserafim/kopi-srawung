import React, { useState, useMemo } from 'react';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { menuData } from './menuData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [tableNumber, setTableNumber] = useState('1'); // Global table number state

  // Filter items based on selected category and search input
  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Trigger temporary success notification
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Add item to cart handler
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        showToast(`${item.name} ditambahkan (+1)`);
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      showToast(`${item.name} berhasil dimasukkan keranjang!`);
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Update item quantity handler
  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Remove item handler
  const handleRemoveItem = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      showToast(`${item.name} dihapus dari keranjang.`);
    }
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Clear cart handler
  const handleClearCart = () => {
    setCartItems([]);
    showToast('Keranjang berhasil dikosongkan.');
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans select-none selection:bg-sage/10 selection:text-sage">
      
      {/* Sticky Header Nav */}
      <header className="sticky top-0 z-30 w-full bg-cream/80 backdrop-blur-md border-b border-sage/10 py-3.5 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            <span className="w-8.5 h-8.5 rounded-full bg-sage flex items-center justify-center text-cream-50 font-serif font-black text-sm shadow-sm">
              S
            </span>
            <span className="font-serif text-lg font-bold tracking-tight text-espresso">
              Kopi Srawung
            </span>
          </div>

          {/* Table Selector & Status Badges */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Table Selector Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-sage/20 rounded-full px-3 py-1.5 shadow-sm text-xs font-semibold text-espresso">
              <span className="text-charcoal/70">Meja:</span>
              <select
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-espresso font-bold cursor-pointer pr-1"
                title="Pilih Nomor Meja Anda"
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Badge */}
            <span className="text-[10px] sm:text-xs font-bold text-sage bg-sage-50 px-3 py-1.5 rounded-full border border-sage/10 whitespace-nowrap">
              🟢 Buka (09:00 - 23:00)
            </span>
          </div>

        </div>
      </header>

      {/* Floating Action Notifications (Toasts) */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-espresso text-cream-50 text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl border border-sage/20 flex items-center gap-2">
            <svg className="h-4 w-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
            {toastMessage}
          </div>
        </div>
      )}

      {/* Hero Banner Component */}
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Menu Grid and Filters */}
        <MenuSection
          items={filteredItems}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          tableNumber={tableNumber}
        />
      </main>

      {/* Cart Drawer Component */}
      <Cart
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        tableNumber={tableNumber}
      />

      {/* Footer Details Component */}
      <Footer />
    </div>
  );
}

export default App;
