
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Link } from "react-router-dom";
import { Sparkles, Building2, Home, CheckCircle, MapPin } from "lucide-react";

const CleaningServices = () => {
  const services = [
    {
      title: "Deep Cleaning Services",
      description: "Detailed deep cleaning to eliminate dust, bacteria, and grime from hard-to-reach areas. Perfect for seasonal cleaning, move-in/move-out, or post-construction cleanup.",
      icon: Sparkles,
    },
    {
      title: "Office & Commercial Cleaning",
      description: "Keep your workplace clean and productive with our expert office and commercial cleaning services. We provide flexible cleaning schedules that don't interrupt your business operations.",
      icon: Building2,
    },
    {
      title: "Housekeeping Services",
      description: "Enjoy a neat and organized home with our trusted housekeeping team. We provide regular cleaning, dishwashing, laundry, dusting, mopping, and more.",
      icon: Home,
    }
  ];

  const whyChooseUs = [
    "Professional & Trained Cleaners",
    "Eco-Friendly Cleaning Products",
    "Customized Cleaning Packages",
    "Available Across All Major Cities in Saudi Arabia",
    "100% Satisfaction Guaranteed"
  ];

  const cities = [
    "Riyadh", "Jeddah", "Dammam", "Khobar", "Mecca", "Medina", "Tabuk"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-moonlight-lightest to-moonlight-light">Cleaning Services</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-moonlight-lightest mb-4">
              Ali Saleh Al Qahthani Cleaning Service
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Best Cleaning Service in Saudi Arabia. We provide professional, reliable, and high-quality cleaning services across Saudi Arabia using advanced techniques and eco-friendly products.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cleaning Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-moonlight-lightest/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-moonlight-lightest to-moonlight-light rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-moonlight-dark" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-moonlight-lightest flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-moonlight-medium/20 to-moonlight-dark/20 rounded-2xl p-8 backdrop-blur-sm border border-moonlight-light/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-moonlight-lightest" />
                Serving All Over Saudi Arabia
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                    <span className="text-moonlight-lightest font-semibold">{city}</span>
                  </div>
                ))}
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <span className="text-moonlight-lightest font-semibold">...and more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-moonlight-medium/20 to-moonlight-dark/20 rounded-2xl p-8 backdrop-blur-sm border border-moonlight-light/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Professional Cleaning Services?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us for a spotless, hygienic environment for your home, office, or commercial space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us"
                className="bg-moonlight-medium hover:bg-moonlight-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Contact Us
              </Link>
              <Link 
                to="/maintenance-services"
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

export default CleaningServices;
