
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Search, Building2, Code, Shield, Cloud, Smartphone, Palette, Scale } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.navbar')) {
        setIsMenuOpen(false);
        setIsSolutionsDropdownOpen(false);
        setIsServicesDropdownOpen(false);
        setIsSearchOpen(false);
      }
    };

    if (isMenuOpen || isSolutionsDropdownOpen || isServicesDropdownOpen || isSearchOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, isSolutionsDropdownOpen, isServicesDropdownOpen, isSearchOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false);
      setIsSearchOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  // Toggle dropdown functions
  const toggleSolutionsDropdown = () => {
    setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
    setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsSolutionsDropdownOpen(false);
  };

  // Check if current page is active
  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`navbar fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-slate-50/95 to-gray-50/95 backdrop-blur-xl shadow-xl border-b border-slate-200/50' 
          : 'bg-gradient-to-r from-slate-50/90 to-gray-50/90 backdrop-blur-lg border-b border-slate-200/30'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a 
            className="flex items-center group" 
            href="/"
            aria-label="Panva Technology - Home"
          >
            <img 
              src="https://www.panvatech.com/wp-content/uploads/2018/08/Panva_final.svg" 
              alt="Panva Technology" 
              className="h-8 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
                         <a 
               className={`relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                 isActivePage('/') 
                   ? 'text-primary-600 bg-primary-50' 
                   : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
               }`}
               href="/"
             >
               Home
             </a>
             
             <a 
               className={`relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                 isActivePage('/about') 
                   ? 'text-primary-600 bg-primary-50' 
                   : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
               }`}
               href="/about"
             >
               About
             </a>
            
            {/* IT Solutions Dropdown */}
            <div className="relative">
                             <button
                 className={`flex items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                   isActivePage('/it-solutions') 
                     ? 'text-primary-600 bg-primary-50' 
                     : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                 }`}
                 onClick={toggleSolutionsDropdown}
                 aria-expanded={isSolutionsDropdownOpen}
               >
                IT Solutions
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    isSolutionsDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {isSolutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-secondary-200/50 p-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid gap-2">
                    
                    
                    <a 
                      href="/it-solutions#healthcare"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-200"
                      onClick={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Shield size={20} className="text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-secondary-900">Healthcare IT</div>
                        <div className="text-sm text-secondary-500">Secure healthcare solutions</div>
                      </div>
                    </a>
                    
                    <a 
                      href="/it-solutions#fintech"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-200"
                      onClick={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Code size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-secondary-900">Fintech Solutions</div>
                        <div className="text-sm text-secondary-500">Financial technology platforms</div>
                      </div>
                    </a>
                    
                    <a 
                      href="/it-solutions#ai-ml"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-200"
                      onClick={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Smartphone size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-secondary-900">AI & Machine Learning</div>
                        <div className="text-sm text-secondary-500">Intelligent automation</div>
                      </div>
                    </a>
                    <a 
                      href="/it-solutions#legal"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-200"
                      onClick={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Scale size={20} className="text-yellow-600" />
                      </div>
                      <div>
                        <div className="font-medium text-secondary-900">Legal Services Platform</div>
                        <div className="text-sm text-secondary-500">Legal management systems</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* IT Services Dropdown */}
            <div className="relative">
                             <button
                 className={`flex items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                   isActivePage('/services') 
                     ? 'text-primary-600 bg-primary-50' 
                     : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                 }`}
                 onClick={toggleServicesDropdown}
                 aria-expanded={isServicesDropdownOpen}
               >
                IT Services
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-secondary-200/50 p-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid gap-2">
                    
                    
                    <a 
                      href="/services#managed-it"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-200"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Cloud size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-secondary-900">Managed IT</div>
                        <div className="text-sm text-secondary-500">24/7 IT management</div>
                      </div>
                    </a>
                    
                    <a 
                      href="/services#cyber-security"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-200"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Shield size={20} className="text-red-600" />
                      </div>
                      <div>
                        <div className="font-medium text-secondary-900">Cyber Security</div>
                        <div className="text-sm text-secondary-500">Protect your business</div>
                      </div>
                    </a>
                    
                    <a 
                      href="/ui-services"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-200"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Palette size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-secondary-900">UI/UX Services</div>
                        <div className="text-sm text-secondary-500">Beautiful user experiences</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
                         <a 
               className={`relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                 isActivePage('/contact') 
                   ? 'text-primary-600 bg-primary-50' 
                   : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
               }`}
               href="/contact"
             >
               Contact Us
             </a>
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden lg:flex lg:items-center">
            <a 
              href="tel:1-800-916-2459" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
              aria-label="Call us at 1-800-916-2459"
            >
              <Phone size={16} className="group-hover:animate-pulse" />
              <span>1-800-916-2459</span>
            </a>
          </div>
          
          {/* Mobile Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Search Button */}
            <button 
              className="p-2 text-secondary-700 hover:text-primary-500 transition-colors rounded-lg hover:bg-primary-50"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <button 
              className="p-2 border-0 rounded-lg hover:bg-secondary-100 transition-colors" 
              type="button"
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}
              aria-controls="navbarNav" 
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        
        {/* Search Bar - Mobile */}
        {isSearchOpen && (
          <div className="w-full mt-3 lg:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="flex">
              <input 
                type="text" 
                className="flex-1 px-4 py-3 text-base border-2 border-secondary-300 rounded-l-xl transition-all duration-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/25 focus:outline-none"
                placeholder="Search..."
                autoFocus
              />
              <button className="px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-r-xl hover:shadow-lg transition-all duration-300">
                <Search size={16} />
              </button>
            </div>
          </div>
        )}
        
        {/* Mobile Navigation Menu */}
        <div 
          className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden animate-in slide-in-from-top-2 duration-300`}
          id="navbarNav"
        >
          <div className="mt-4 pb-6 space-y-2">
            <a 
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                isActivePage('/') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            
            <a 
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                isActivePage('/about') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            
            <div className="px-4 py-3">
              <button
                className={`flex items-center justify-between w-full text-base font-medium rounded-xl transition-all duration-300 ${
                  isActivePage('/it-solutions') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={toggleSolutionsDropdown}
              >
                <span>IT Solutions</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    isSolutionsDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {isSolutionsDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
                  
                  <a 
                    href="/it-solutions#healthcare"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Healthcare IT
                  </a>
                  <a 
                    href="/it-solutions#fintech"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Fintech Solutions
                  </a>
                  <a 
                    href="/it-solutions#ai-ml"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI & Machine Learning
                  </a>
                </div>
              )}
            </div>
            
            <div className="px-4 py-3">
              <button
                className={`flex items-center justify-between w-full text-base font-medium rounded-xl transition-all duration-300 ${
                  isActivePage('/services') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={toggleServicesDropdown}
              >
                <span>IT Services</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
                  <a 
                    href="/services"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All IT Services
                  </a>
                  <a 
                    href="/services#managed-it"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Managed IT
                  </a>
                  <a 
                    href="/services#cyber-security"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cyber Security
                  </a>
                  <a 
                    href="/ui-services"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    UI/UX Services
                  </a>
                </div>
              )}
            </div>
            
            <a 
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                isActivePage('/contact') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
            
            {/* Mobile CTA Button */}
            <div className="px-4 pt-4">
              <a 
                href="tel:1-800-916-2459" 
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Call us at 1-800-916-2459"
              >
                <Phone size={16} />
                <span>1-800-916-2459</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
