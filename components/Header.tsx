
import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'História', href: '#historia' },
    { label: 'Comprar Café', href: '#comprar' },
    { label: 'Regiões', href: '#regioes' },
    { label: 'Assinatura', href: '#assinatura' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Coffee className={`w-8 h-8 transition-colors ${isScrolled ? 'text-amber-800' : 'text-white'}`} />
          <span className={`text-2xl font-bold uppercase tracking-widest serif transition-colors ${
            isScrolled ? 'text-stone-900' : 'text-white'
          }`}>
            Bahia <span className="text-amber-600">Cafés</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold uppercase tracking-wider hover:text-amber-600 transition-colors ${
                isScrolled ? 'text-stone-700' : 'text-stone-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-stone-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 p-6 flex flex-col gap-4 shadow-xl">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-800 font-semibold uppercase tracking-wider py-2 border-b border-stone-50"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
