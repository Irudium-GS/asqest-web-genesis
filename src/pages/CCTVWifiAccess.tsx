
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Camera, Wifi, Lock, CheckCircle, ArrowRight } from "lucide-react";

const CCTVWifiAccess = () => {
  const features = [
    {
      title: "Network IP Cameras",
      description: "State-of-the-art network IP cameras for crystal clear surveillance with remote monitoring capabilities.",
      icon: Camera
    },
    {
      title: "Analog CCTV Systems",
      description: "Traditional analog CCTV systems designed for reliable and cost-effective security monitoring.",
      icon: Shield
    },
    {
      title: "WiFi Solutions",
      description: "Comprehensive WiFi infrastructure for seamless connectivity across your facility.",
      icon: Wifi
    },
    {
      title: "Access Control",
      description: "Advanced access control systems to secure your premises and monitor entry points.",
      icon: Lock
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
              CCTV / WiFi / <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Access Control</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading provider of cutting-edge security solutions for comprehensive protection
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
                Comprehensive Security Solutions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ali Saleh Al Qahthani is a leading provider of cutting-edge security solutions, committed to delivering unparalleled protection across various sectors, including banks, educational institutions, hotels, restaurants, government buildings, and transportation hubs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our extensive portfolio of surveillance products includes state-of-the-art network IP cameras and traditional analog CCTV systems, all designed for seamless integration and optimal performance. Whether you require comprehensive monitoring for high-security areas or scalable solutions for growing businesses, our offerings are tailored to meet your specific needs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We pride ourselves on delivering innovative surveillance technology that ensures safety, efficiency, and peace of mind. With a focus on quality and reliability, Ali Saleh Al Qahthani stands out as a trusted partner in the field of security services.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <Shield className="h-32 w-32 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Security Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:animate-bounce">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
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
                Secure Your Business Today
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us to discuss your security requirements and get a customized solution.
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

export default CCTVWifiAccess;
