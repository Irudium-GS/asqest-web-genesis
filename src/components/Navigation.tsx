
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [maintenanceOpen, setMaintenanceOpen] = useState(false);
  const [webDevOpen, setWebDevOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-purple-900/95 to-indigo-800/95 backdrop-blur-md z-50 border-b border-purple-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">ASQ</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">ASQest</span>
          </Link>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-purple-500 hover:bg-purple-400 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Connect with Us Today!
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white hover:text-purple-400 transition-colors duration-300 ${isActive('/') ? 'text-purple-400' : ''}`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-purple-400 transition-colors duration-300">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  <Link to="/structure-cabling" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors">Structure Cabling</Link>
                  <Link to="/network-consulting" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors">Network Consulting</Link>
                  <Link to="/cctv-wifi-access" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors">CCTV/WIFI/Access</Link>
                  <Link to="/annual-maintenance" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors">Annual Maintenance</Link>
                </div>
              </div>
            </div>

            {/* Maintenance Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-purple-400 transition-colors duration-300">
                Maintenance Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  <Link to="/ac-maintenance" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors">AC Maintenance</Link>
                  <Link to="/electrical-maintenance" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors">Electrical Maintenance</Link>
                  <Link to="/commercial-maintenance" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors">Commercial Building Maintenance</Link>
                  <Link to="/painting-services" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors">Painting and Decorating Services</Link>
                </div>
              </div>
            </div>

            {/* Web Development Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-purple-400 transition-colors duration-300">
                Web Development <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  <Link to="/web-development" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors">Web Development</Link>
                  <Link to="/digital-marketing" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors">Digital Marketing</Link>
                </div>
              </div>
            </div>

            <Link 
              to="/about-us" 
              className={`text-white hover:text-purple-400 transition-colors duration-300 ${isActive('/about-us') ? 'text-purple-400' : ''}`}
            >
              About Us
            </Link>
            <Link 
              to="/contact-us" 
              className={`text-white hover:text-purple-400 transition-colors duration-300 ${isActive('/contact-us') ? 'text-purple-400' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-purple-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-white hover:text-purple-400">Home</Link>
              
              <div>
                <button 
                  className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-purple-400"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown className={`h-4 w-4 transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-1">
                    <Link to="/structure-cabling" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Structure Cabling</Link>
                    <Link to="/network-consulting" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Network Consulting</Link>
                    <Link to="/cctv-wifi-access" className="block px-3 py-2 text-gray-300 hover:text-purple-400">CCTV/WIFI/Access</Link>
                    <Link to="/annual-maintenance" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Annual Maintenance</Link>
                  </div>
                )}
              </div>

              <div>
                <button 
                  className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-purple-400"
                  onClick={() => setMaintenanceOpen(!maintenanceOpen)}
                >
                  Maintenance Services <ChevronDown className={`h-4 w-4 transform transition-transform ${maintenanceOpen ? 'rotate-180' : ''}`} />
                </button>
                {maintenanceOpen && (
                  <div className="ml-4 space-y-1">
                    <Link to="/ac-maintenance" className="block px-3 py-2 text-gray-300 hover:text-purple-400">AC Maintenance</Link>
                    <Link to="/electrical-maintenance" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Electrical Maintenance</Link>
                    <Link to="/commercial-maintenance" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Commercial Building Maintenance</Link>
                    <Link to="/painting-services" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Painting and Decorating Services</Link>
                  </div>
                )}
              </div>

              <div>
                <button 
                  className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-purple-400"
                  onClick={() => setWebDevOpen(!webDevOpen)}
                >
                  Web Development <ChevronDown className={`h-4 w-4 transform transition-transform ${webDevOpen ? 'rotate-180' : ''}`} />
                </button>
                {webDevOpen && (
                  <div className="ml-4 space-y-1">
                    <Link to="/web-development" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Web Development</Link>
                    <Link to="/digital-marketing" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Digital Marketing</Link>
                  </div>
                )}
              </div>

              <Link to="/about-us" className="block px-3 py-2 text-white hover:text-purple-400">About Us</Link>
              <Link to="/contact-us" className="block px-3 py-2 text-white hover:text-purple-400">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
