
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Link } from "react-router-dom";
import { Droplets, Wrench, Zap, Shield, CheckCircle, Clock } from "lucide-react";

const PlumbingServices = () => {
  const services = [
    {
      title: "Leak Detection and Repair",
      description: "Advanced leak detection technology, repair of pipe leaks, fixture leaks, and slab leaks with waterproofing and preventive measures.",
      icon: Droplets,
      features: [
        "Advanced leak detection technology",
        "Repair of pipe leaks, fixture leaks, and slab leaks",
        "Waterproofing and preventive measures",
        "Inspection and maintenance to prevent future leaks"
      ]
    },
    {
      title: "Drain Cleaning and Unclogging",
      description: "Professional drain cleaning services using high-pressure water jetting and mechanical snaking to keep drains flowing smoothly.",
      icon: Wrench,
      features: [
        "High-pressure water jetting",
        "Mechanical snaking and rooter services",
        "Removal of blockages and buildup",
        "Preventative maintenance plans"
      ]
    },
    {
      title: "Water Heater Services",
      description: "Comprehensive water heater services including installation, repair, maintenance, and energy-efficient upgrades.",
      icon: Zap,
      features: [
        "Installation of new water heaters (tank and tankless)",
        "Repair and maintenance of existing units",
        "Flushing and descaling services",
        "Energy-efficient upgrades and advice"
      ]
    },
    {
      title: "Fixture Installation and Repair",
      description: "Professional installation and repair of plumbing fixtures including sinks, faucets, toilets, showers, and water filtration systems.",
      icon: CheckCircle,
      features: [
        "Installation of sinks, faucets, toilets, and showers",
        "Repair and replacement of broken or outdated fixtures",
        "Assistance with selecting energy-efficient fixtures",
        "Installation of water filtration systems"
      ]
    },
    {
      title: "Pipe Installation and Repair",
      description: "Complete pipe services for new installations, repairs, replacements, and repiping services for older properties.",
      icon: Shield,
      features: [
        "Installation of new plumbing systems",
        "Repair and replacement of damaged pipes",
        "Repiping services for older properties",
        "Trenchless pipe repair options"
      ]
    },
    {
      title: "Emergency Plumbing Services",
      description: "24/7 emergency plumbing services with immediate response and comprehensive solutions for all urgent plumbing issues.",
      icon: Clock,
      features: [
        "24/7 emergency response",
        "Quick and effective repairs",
        "Comprehensive emergency solutions",
        "Preventive advice to avoid future emergencies"
      ]
    }
  ];

  const whyChooseUs = [
    "Experienced Plumbers: Licensed, insured, and highly trained plumbers with extensive experience",
    "Quality Workmanship: High-quality workmanship using the best materials and latest techniques",
    "Customer Satisfaction: Transparent pricing, clear communication, and exceptional customer service",
    "Fast and Reliable Service: Prompt and reliable service for quick issue resolution",
    "Comprehensive Solutions: Full range of plumbing services from minor repairs to major installations"
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
              Plumbing <span className="text-transparent bg-clip-text bg-gradient-to-r from-moonlight-lightest to-moonlight-light">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ali Saleh Al Qahthani, your trusted provider of comprehensive plumbing services. Our experienced and certified plumbers are dedicated to delivering top-quality solutions for all your plumbing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Plumbing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-moonlight-lightest/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-moonlight-lightest to-moonlight-light rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-moonlight-light mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-moonlight-medium/20 to-moonlight-dark/20 rounded-2xl p-8 backdrop-blur-sm border border-moonlight-light/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-moonlight-lightest mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-moonlight-medium/20 to-moonlight-dark/20 rounded-2xl p-8 backdrop-blur-sm border border-moonlight-light/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Professional Plumbing Services?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us for reliable, efficient plumbing solutions. From emergency repairs to new installations, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us"
                className="bg-moonlight-medium hover:bg-moonlight-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Contact Us Today
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

export default PlumbingServices;
