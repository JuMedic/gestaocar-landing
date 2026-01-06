import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 p-2 rounded-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              GestãoCar
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection('whatsapp')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              WhatsApp
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Baixar App
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection('whatsapp')}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
              >
                WhatsApp
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection('footer')}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
              >
                Contato
              </button>
              <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
                Baixar App
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
