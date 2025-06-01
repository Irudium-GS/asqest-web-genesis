
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Link } from "react-router-dom";
import { Wrench, Zap, Building, Paintbrush, Droplets } from "lucide-react";

const MaintenanceServices = () => {
  const services = [
    {
      title: "AC Maintenance",
      description: "Professional air conditioning maintenance and repair services to keep your systems running efficiently year-round.",
      icon: Wrench,
      link: "/ac-maintenance",
      color: "from-moonlight-lightest to-moonlight-light"
    },
    {
      title: "Electrical Maintenance",
      description: "Comprehensive electrical services including repairs, installations, and maintenance for residential and commercial properties.",
      icon: Zap,
      link: "/electrical-maintenance",
      color: "from-moonlight-light to-moonlight-medium"
    },
    {
      title: "Commercial Building Maintenance",
      description: "Complete building maintenance solutions covering HVAC, electrical, plumbing, and general maintenance services.",
      icon: Building,
      link: "/commercial-maintenance",
      color: "from-moonlight-medium to-moonlight-dark"
    },
    {
      title: "Painting & Decorating Services",
      description: "Professional painting and decorating services to transform your space with high-quality finishes and expert craftsmanship.",
      icon: Paintbrush,
      link: "/painting-services",
      color: "from-moonlight-dark to-moonlight-medium"
    },
    {
      title: "Plumbing Services",
      description: "Expert plumbing services for installations, repairs, and maintenance of water and drainage systems.",
      icon: Droplets,
      link: "#",
      color: "from-moonlight-light to-moonlight-dark"
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
              Maintenance <span className="text-transparent bg-clip-text bg-gradient-to-r from-moonlight-lightest to-moonlight-light">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive maintenance solutions for all your facility needs
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
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-moonlight-lightest/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:animate-bounce`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-moonlight-lightest transition-colors">
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
          <div className="bg-gradient-to-r from-moonlight-medium/20 to-moonlight-dark/20 rounded-2xl p-8 backdrop-blur-sm border border-moonlight-light/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Professional Maintenance?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us to discuss your maintenance requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us"
                className="bg-moonlight-medium hover:bg-moonlight-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Contact Us
              </Link>
              <Link 
                to="/services"
                className="bg-moonlight-dark hover:bg-moonlight-medium text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaintenanceServices;
