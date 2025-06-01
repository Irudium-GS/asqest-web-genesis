
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ASQ</span>
              </div>
              <span className="text-white font-bold text-xl">ASQest</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ali Saleh Al Qahthani provides customers with sophisticated network solutions. These include IP telephony and complex new technology to large corporate and public sector organizations throughout Saudi Arabia and the broader region.
            </p>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/structure-cabling" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Structure Cabling</Link></li>
              <li><Link to="/network-consulting" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Network Consulting</Link></li>
              <li><Link to="/cctv-wifi-access" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">CCTV / WiFi Access</Link></li>
              <li><Link to="/annual-maintenance" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Annual Maintenance Service</Link></li>
            </ul>
          </div>

          {/* Maintenance Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Maintenance Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ac-maintenance" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AC Maintenance</Link></li>
              <li><Link to="/electrical-maintenance" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Electrical Maintenance</Link></li>
              <li><Link to="/commercial-maintenance" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Commercial Building Maintenance</Link></li>
              <li><Link to="/painting-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Painting Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact Now</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">+966 56134 6255</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">Business: jalal@asqest.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">Sales: ibrahim@asqest.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ASQest. All rights reserved. | Designed with ❤️ for excellence in technology solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
