
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cable, Network, Wifi, Shield, CheckCircle, ArrowRight } from "lucide-react";

const StructureCabling = () => {
  const cableTypes = [
    {
      title: "Overhead Tray",
      description: "Cables are placed beneath raised floors using trays specifically designed for this purpose. This approach is often used in data centers and offices, keeping cables out of sight while providing easy access for adjustments and repairs.",
      icon: Cable
    },
    {
      title: "Below False Floor Tray", 
      description: "Cables are placed beneath raised floors using trays specifically designed for this purpose. This approach is often used in data centers and offices, keeping cables out of sight while providing easy access for adjustments and repairs.",
      icon: Network
    },
    {
      title: "Trenches",
      description: "Cables are routed through trenches that are cut into the floor. This method is typically used in industrial environments or large facilities, protecting cables from physical damage while maintaining a clean appearance.",
      icon: Shield
    },
    {
      title: "Raceways",
      description: "Cables are enclosed in raceways, which are mounted to walls, floors, or ceilings. Raceways provide a protective, organized pathway for cables and can be easily accessed for upgrades or maintenance, making them suitable for a variety of settings.",
      icon: Wifi
    }
  ];

  return (
    <div className="min-h-screen relative">
      <NetworkBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Structure <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Cabling</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive Network Cabling Solutions for Modern Businesses
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Comprehensive Network Cabling Solutions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Businesses aiming for growth require robust and adaptable voice and data networks. These networks must be scalable and flexible to accommodate future expansion. Ali-Saleh Al-Qahthani specializes in providing top-tier network cabling solutions for companies of all sizes, including enterprises with extensive networks spanning hundreds or thousands of locations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our expertise ensures that we adhere to the latest standards, best practices, and technological advancements in cabling and communications. This commitment guarantees reliable and efficient results for our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Link to="/contact-us">
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <Network className="h-32 w-32 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Fiber Optic Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Reliable Fiber Optic Cabling Solutions for Modern Communications
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              For superior communication quality in everything from voice and video to high-speed internet access, fiber optic cabling is the go-to solution. Installing or upgrading a fiber optic system requires specialized expertise to ensure a communications infrastructure that is both scalable and reliable.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ali-Saleh Al-Qahthani has delivered fiber optic cabling services to hundreds of companies across various industries, addressing their current needs while preparing them for future opportunities. Our team receives ongoing training to stay updated on the latest fiber optic technologies and the evolving communication needs of different industries and applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you need to provide wireless coverage on your premises, troubleshoot existing wireless networks, or need guidance on whether wireless is the right choice for you and how to address security concerns, we are here to help with all your wireless needs.
            </p>
          </div>

          {/* Cable Types Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Types of Cable Routing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cableTypes.map((type, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:animate-bounce">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                        {index + 1}. {type.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Upgrade Your Network Infrastructure?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us today to discuss your structured cabling needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Link to="/contact-us">
                    Contact Us
                  </Link>
                </Button>
                <Button 
                  asChild
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Link to="/services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StructureCabling;
