
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Link } from "react-router-dom";
import { Shield, AlertTriangle, Settings, Zap, CheckCircle, Phone } from "lucide-react";

const FireSafetyServices = () => {
  const services = [
    {
      title: "Fire Alarm System Installation",
      description: "We design and install custom fire alarm systems using cutting-edge technology to suit your building's layout and safety requirements.",
      icon: Shield,
      features: [
        "Addressable & Conventional Systems",
        "Smoke, Heat & Flame Detectors",
        "Manual Call Points, Sounders, and Beacons",
        "Saudi Civil Defense Approved Equipment"
      ]
    },
    {
      title: "Fire Alarm Testing & Commissioning",
      description: "Ensure your system works when it matters most. We perform comprehensive testing and commissioning according to national and international safety standards.",
      icon: AlertTriangle,
      features: [
        "Pre-occupancy approval support",
        "Signal verification and device response check",
        "Final system performance certification"
      ]
    },
    {
      title: "Fire Alarm Maintenance & Annual Contracts",
      description: "Regular maintenance of fire alarm systems is essential for long-term safety and regulatory compliance. We offer Annual Maintenance Contracts (AMCs) for peace of mind.",
      icon: Settings,
      features: [
        "Preventive Maintenance Visits",
        "Emergency Support 24/7",
        "System Upgrades & Fault Repair"
      ]
    },
    {
      title: "Fire Alarm System Upgrades",
      description: "Already have a system but need better performance or compliance with new codes? We offer retrofits and upgrades to enhance older systems with modern technology.",
      icon: Zap,
      features: []
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-moonlight-lightest to-moonlight-light">Fire Safety Partner</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-moonlight-lightest mb-4">
              Ali Saleh Al Qahthani Fire Alarm Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We specialize in providing complete fire detection and alarm solutions for residential, commercial, and industrial properties across Saudi Arabia. Our certified technicians ensure your property is protected with the latest technology in compliance with Saudi Civil Defense regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Fire Alarm Services
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-moonlight-lightest/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-moonlight-lightest to-moonlight-light rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-moonlight-dark" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">
                  {index + 1}. {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.features.length > 0 && (
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-moonlight-lightest flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Support Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-r from-moonlight-medium/20 to-moonlight-dark/20 rounded-2xl p-8 backdrop-blur-sm border border-moonlight-light/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-moonlight-lightest" />
                Compliance & Standards
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-moonlight-lightest flex-shrink-0" />
                  <span className="text-gray-300">Saudi Civil Defense Approved</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-moonlight-lightest flex-shrink-0" />
                  <span className="text-gray-300">International Safety Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-moonlight-lightest flex-shrink-0" />
                  <span className="text-gray-300">Certified Technicians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-moonlight-lightest flex-shrink-0" />
                  <span className="text-gray-300">Latest Technology Solutions</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-moonlight-dark/20 to-moonlight-medium/20 rounded-2xl p-8 backdrop-blur-sm border border-moonlight-light/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Phone className="h-6 w-6 mr-2 text-moonlight-lightest" />
                24/7 Emergency Support
              </h3>
              <p className="text-gray-300 mb-6">
                Fire safety emergencies don't wait for business hours. Our emergency support team is available around the clock to ensure your fire alarm systems are always operational.
              </p>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-moonlight-lightest font-semibold">Immediate Response</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-moonlight-lightest font-semibold">Expert Technicians</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-moonlight-lightest font-semibold">Emergency Repairs</span>
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
              Protect Your Property Today
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Don't wait for an emergency. Contact us now to ensure your fire safety systems are up to Saudi Civil Defense standards.
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

export default FireSafetyServices;
