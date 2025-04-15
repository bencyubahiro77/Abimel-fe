import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close menu on window resize (to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black/90' : 'bg-transparent'
      }`}
    >
      <div className="flex lg:justify-evenly justify-between items-center px-6 py-4 md:px-16">
        <div className="text-white text-2xl font-medium tracking-widest">
          <img
            src="../Images/abimel_Logo-removebg-preview.png"
            alt="Logo"
            className="w-15 h-10 inline-block mr-2"
          />
        </div>

        {/* Toggle Icon */}
        <div
          className="text-white text-2xl md:hidden cursor-pointer border border-gray-400 p-2 z-[100]"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-15 text-white text-[12px] tracking-widest uppercase">
          <li className="cursor-pointer hover:text-white text-white/70">Home</li>
          <li className="cursor-pointer hover:text-white text-white/70">About</li>
          <li className="cursor-pointer hover:text-white text-white/70">Product</li>
          <li className="cursor-pointer hover:text-white text-white/70">Contact</li>
        </ul>
      </div>
    
        {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black text-white transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start justify-start px-8 pt-32 space-y-8 uppercase tracking-widest text-xl">
          <li className="list-none hover:text-white/80 cursor-pointer">Home</li>
          <li className="list-none hover:text-white/80 cursor-pointer">About</li>
          <li className="list-none hover:text-white/80 cursor-pointer">Product</li>
          <li className="list-none hover:text-white/80 cursor-pointer">Contact</li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
