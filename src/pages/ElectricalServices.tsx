
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Link } from "react-router-dom";
import { Zap, Shield, Wrench, CheckCircle, Clock, Settings, Cable, Lightbulb } from "lucide-react";

const ElectricalServices = () => {
  const services = [
    {
      title: "Electrical Installation",
      description: "Professional electrical installation services for new constructions, renovations, and system upgrades.",
      icon: Zap,
      features: [
        "New electrical system installations",
        "Panel and circuit installations",
        "Lighting system setup",
        "Power distribution systems"
      ]
    },
    {
      title: "Electrical Repairs",
      description: "Quick and reliable electrical repair services for all types of electrical issues and emergencies.",
      icon: Wrench,
      features: [
        "Emergency electrical repairs",
        "Circuit breaker repairs",
        "Wiring fault repairs",
        "Electrical component replacements"
      ]
    },
    {
      title: "Lighting Solutions",
      description: "Complete lighting solutions including LED installations, smart lighting, and energy-efficient systems.",
      icon: Lightbulb,
      features: [
        "LED lighting installations",
        "Smart lighting systems",
        "Energy-efficient solutions",
        "Outdoor and indoor lighting"
      ]
    },
    {
      title: "Electrical Wiring",
      description: "Professional electrical wiring services for residential, commercial, and industrial properties.",
      icon: Cable,
      features: [
        "Complete rewiring services",
        "New construction wiring",
        "Electrical upgrades",
        "Safety compliance wiring"
      ]
    },
    {
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure compliance with Saudi electrical codes.",
      icon: Shield,
      features: [
        "Electrical safety audits",
        "Code compliance inspections",
        "Risk assessments",
        "Safety certifications"
      ]
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency electrical services for urgent electrical issues and power outages.",
      icon: Clock,
      features: [
        "24/7 emergency response",
        "Power restoration services",
        "Emergency repairs",
        "Safety emergency fixes"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <NetworkBackground />
      <Navigation />
      
      {/* Hero Section - Adjusted positioning */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Electrical <span className="text-transparent bg-clip-text bg-gradient-to-r from-moonlight-lightest to-moonlight-light">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional electrical services for residential, commercial, and industrial properties. From installations to repairs and emergency services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Electrical Services
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
              Need Electrical Services?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get professional electrical solutions for your property with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us"
                className="bg-moonlight-medium hover:bg-moonlight-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Contact Us Today
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

export default ElectricalServices;
