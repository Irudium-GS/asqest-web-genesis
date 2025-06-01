
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Network, Shield, Settings, Cpu, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <NetworkBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4 animate-pulse">
                Boost Your Network
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Optimized Network interface<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse">
                Engineered for High-Speed Performance
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge network solutions, security systems, and maintenance services designed for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Link to="/contact-us">
                  Connect with Us Today! <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ASQest: Where Technology<br />
                <span className="text-cyan-400">Meets Success</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ali-Saleh Al-Qahthani is a leading technology consultancy firm operating primarily in Saudi Arabia. Our expertise lies in managing technology solutions for businesses of all sizes, ranging from Small and Medium Enterprises to large corporations. With a focus on clarity and efficient utilization of IT investments, Ali-Saleh Al-Qahthani strives to optimize the performance of organizations' IT infrastructure and core applications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">150+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                  <div className="text-gray-300 text-sm">Service Categories</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                  <Network className="h-24 w-24 text-cyan-400 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-white text-xl font-semibold">Network Excellence</h3>
                  <p className="text-gray-300 mt-2">Cutting-edge solutions for modern businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 text-lg">Comprehensive technology solutions for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Network,
                title: "Structure Cabling",
                description: "Expert structured cabling services to ensure seamless connectivity and consistently reliable network performance.",
                link: "/structure-cabling",
                color: "from-cyan-400 to-blue-500"
              },
              {
                icon: Cpu,
                title: "Network Consulting",
                description: "Experienced networking consultants specialize in delivering tailored solutions for achieving unparalleled network performance and reliability.",
                link: "/network-consulting",
                color: "from-blue-400 to-purple-500"
              },
              {
                icon: Shield,
                title: "CCTV / WiFi / Access",
                description: "From CCTV to access control and WiFi solutions, we ensure quality and reliability for diverse applications, including banks and libraries.",
                link: "/cctv-wifi-access",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: Settings,
                title: "Annual Maintenance",
                description: "Stay worry-free with ASQest's Annual Maintenance Service. Our expert IT team ensures smooth operation of your infrastructure.",
                link: "/annual-maintenance",
                color: "from-pink-400 to-red-500"
              }
            ].map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="group block"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:animate-bounce`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join with Ali Saleh Al Qahthani
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We are the pioneer in Network Cabling and IT Infrastructure Design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
              <Button 
                asChild
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/contact-us">
                  Chat with Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
