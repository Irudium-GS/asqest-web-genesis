
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Link } from "react-router-dom";
import { Network, Shield, Settings, Cpu, Wrench, Zap, Building, Paintbrush, Monitor, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Structure Cabling",
      description: "Expert structured cabling services to ensure seamless connectivity and consistently reliable network performance.",
      icon: Network,
      link: "/structure-cabling",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Network Consulting",
      description: "Experienced networking consultants specialize in delivering tailored solutions for achieving unparalleled network performance and reliability.",
      icon: Cpu,
      link: "/network-consulting",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "CCTV / WiFi / Access",
      description: "From CCTV to access control and WiFi solutions, we ensure quality and reliability for diverse applications, including banks and libraries.",
      icon: Shield,
      link: "/cctv-wifi-access",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Annual Maintenance",
      description: "Stay worry-free with ASQest's Annual Maintenance Service. Our expert IT team ensures smooth operation of your infrastructure.",
      icon: Settings,
      link: "/annual-maintenance",
      color: "from-pink-400 to-red-500"
    },
    {
      title: "AC Maintenance",
      description: "Professional air conditioning maintenance and repair services to keep your systems running efficiently year-round.",
      icon: Wrench,
      link: "/ac-maintenance",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Electrical Maintenance",
      description: "Comprehensive electrical services including repairs, installations, and maintenance for residential and commercial properties.",
      icon: Zap,
      link: "/electrical-maintenance",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Commercial Building Maintenance",
      description: "Complete building maintenance solutions covering HVAC, electrical, plumbing, and general maintenance services.",
      icon: Building,
      link: "/commercial-maintenance",
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "Painting & Decorating",
      description: "Professional painting and decorating services to transform your space with high-quality finishes and expert craftsmanship.",
      icon: Paintbrush,
      link: "/painting-services",
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive business growth through innovative solutions.",
      icon: Monitor,
      link: "/digital-marketing",
      color: "from-cyan-400 to-teal-500"
    },
    {
      title: "Web Development",
      description: "Custom website development services including e-commerce platforms and business websites designed for success.",
      icon: Smartphone,
      link: "/web-development",
      color: "from-violet-400 to-purple-500"
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology and maintenance solutions for modern businesses
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="group block"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:animate-bounce`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
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
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us to discuss your specific requirements and get a tailored solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us"
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Contact Us
              </Link>
              <Link 
                to="/about-us"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
