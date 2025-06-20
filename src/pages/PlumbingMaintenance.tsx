
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Link } from "react-router-dom";
import { Droplets, Wrench, Shield, CheckCircle, Clock, Settings } from "lucide-react";

const PlumbingMaintenance = () => {
  const services = [
    {
      title: "Preventive Maintenance",
      description: "Regular inspections and maintenance to prevent plumbing issues before they occur, extending system life and reducing costs.",
      icon: Shield,
      features: [
        "Regular system inspections",
        "Pipe condition assessments",
        "Water pressure testing",
        "Preventive repairs and replacements"
      ]
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency plumbing maintenance services for urgent issues that can't wait for regular business hours.",
      icon: Clock,
      features: [
        "24/7 emergency response",
        "Burst pipe repairs",
        "Blocked drain clearing",
        "Water heater emergency fixes"
      ]
    },
    {
      title: "System Upgrades",
      description: "Modernize your plumbing systems with energy-efficient fixtures and improved water management solutions.",
      icon: Settings,
      features: [
        "Water-efficient fixture upgrades",
        "Pipe system modernization",
        "Smart water management systems",
        "Energy-efficient water heaters"
      ]
    },
    {
      title: "Routine Maintenance",
      description: "Scheduled maintenance services to keep your plumbing systems running efficiently and prevent unexpected breakdowns.",
      icon: Wrench,
      features: [
        "Scheduled inspections",
        "Drain cleaning and maintenance",
        "Water heater servicing",
        "Fixture maintenance and adjustments"
      ]
    },
    {
      title: "Water Quality Management",
      description: "Maintain optimal water quality with filtration system maintenance and water testing services.",
      icon: Droplets,
      features: [
        "Water filtration system maintenance",
        "Water quality testing",
        "Pipe cleaning and sanitization",
        "Water treatment system servicing"
      ]
    },
    {
      title: "Annual Maintenance Contracts",
      description: "Comprehensive annual maintenance plans covering all aspects of your plumbing systems with priority service.",
      icon: CheckCircle,
      features: [
        "Complete system coverage",
        "Priority emergency response",
        "Scheduled maintenance visits",
        "Discounted repair services"
      ]
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
              Plumbing <span className="text-transparent bg-clip-text bg-gradient-to-r from-moonlight-lightest to-moonlight-light">Maintenance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional plumbing maintenance services to keep your water systems running efficiently. Preventive care, emergency repairs, and comprehensive maintenance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Plumbing Maintenance Services
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

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-moonlight-medium/20 to-moonlight-dark/20 rounded-2xl p-8 backdrop-blur-sm border border-moonlight-light/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Plumbing Maintenance?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Keep your plumbing systems in perfect condition with our professional maintenance services.
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

export default PlumbingMaintenance;
