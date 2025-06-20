
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Link } from "react-router-dom";
import { Zap, Shield, Wrench, CheckCircle, Clock, Settings } from "lucide-react";

const ElectricalMaintenanceServices = () => {
  const services = [
    {
      title: "Preventive Electrical Maintenance",
      description: "Regular inspections and maintenance to prevent electrical failures, ensuring safety and system reliability.",
      icon: Shield,
      features: [
        "Electrical system inspections",
        "Circuit breaker testing",
        "Wiring condition assessments",
        "Safety compliance checks"
      ]
    },
    {
      title: "Emergency Electrical Repairs",
      description: "24/7 emergency electrical maintenance for power outages, electrical faults, and urgent safety issues.",
      icon: Clock,
      features: [
        "24/7 emergency response",
        "Power restoration services",
        "Electrical fault diagnosis",
        "Emergency safety repairs"
      ]
    },
    {
      title: "Electrical System Upgrades",
      description: "Modernize electrical systems with energy-efficient solutions and enhanced safety features.",
      icon: Settings,
      features: [
        "Panel upgrades and replacements",
        "Energy-efficient lighting systems",
        "Smart electrical controls",
        "Power distribution improvements"
      ]
    },
    {
      title: "Routine Electrical Servicing",
      description: "Scheduled electrical maintenance to keep systems running efficiently and prevent unexpected failures.",
      icon: Wrench,
      features: [
        "Regular system checkups",
        "Electrical component cleaning",
        "Connection tightening",
        "Performance optimization"
      ]
    },
    {
      title: "Electrical Safety Audits",
      description: "Comprehensive electrical safety assessments to ensure compliance with Saudi electrical codes and standards.",
      icon: Zap,
      features: [
        "Safety compliance audits",
        "Electrical code adherence",
        "Risk assessment and mitigation",
        "Safety certification support"
      ]
    },
    {
      title: "Annual Maintenance Contracts",
      description: "Comprehensive electrical maintenance plans with regular inspections and priority emergency service.",
      icon: CheckCircle,
      features: [
        "Complete electrical system coverage",
        "Priority emergency response",
        "Scheduled maintenance visits",
        "Discounted repair and upgrade services"
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
              Electrical <span className="text-transparent bg-clip-text bg-gradient-to-r from-moonlight-lightest to-moonlight-light">Maintenance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional electrical maintenance services to ensure safety, reliability, and efficiency of your electrical systems. From preventive care to emergency repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Electrical Maintenance Services
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
              Need Electrical Maintenance?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Ensure electrical safety and reliability with our professional maintenance services.
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

export default ElectricalMaintenanceServices;
