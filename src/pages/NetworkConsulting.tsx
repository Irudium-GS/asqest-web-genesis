
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Network, Settings, Monitor, Users, CheckCircle, ArrowRight } from "lucide-react";

const NetworkConsulting = () => {
  const capabilities = [
    {
      title: "Network Planning",
      description: "We assist in achieving your business goals by offering business case modeling, thorough network design, technology evaluation, and the creation of a detailed network and future roadmap.",
      icon: Network
    },
    {
      title: "Network Design",
      description: "We conduct meticulous system design, assess capacity, and develop comprehensive planning strategies to ensure optimal performance and scalability.",
      icon: Settings
    },
    {
      title: "Network Implementation",
      description: "We aid in network deployment by configuring networks, optimizing parameter settings, and thoroughly testing standalone network elements. Our expertise extends to integrating network elements across multiple systems.",
      icon: Monitor
    },
    {
      title: "Network Operation",
      description: "We provide Level 1, Level 2, and Tier 3 support, offering both onsite and remote personnel to address your network needs. Our network consulting services prioritize your requirements, objectives, and budget.",
      icon: Users
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
              Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive network solutions tailored to your business needs and objectives
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
                Single-Source Network Solutions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We provide a single-source solution, supporting a wide range of networking devices including routers, switches, and firewalls from leading manufacturers. Our network consulting services start with you—your needs, objectives, and budget.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ali-Saleh Al-Qahthani's experts take the time to understand your goals through a thorough needs assessment. During our site visits, we collaborate closely with your onsite staff, ensuring open communication and courteous interactions. We then design a plan that aligns with your objectives and fits within your budget, delivering tailored solutions that meet your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Link to="/contact-us">
                    Get Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <Network className="h-32 w-32 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* IT Support Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              IT Support for Businesses by Ali-Saleh Al-Qahthani
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experience the benefits of regular IT checks for your business or subscribe to a support contract. With our support specialists on standby, Ali-Saleh Al-Qahthani ensures prompt troubleshooting for all your IT and connectivity issues, keeping your operations running smoothly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400">IT CheckIT</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ali-Saleh Al-Qahthani offers scheduled IT maintenance checks, so you don't have to wait for problems to arise before seeking help. Our IT support specialists conduct comprehensive system checks, either remotely via web support or on-site, ensuring your systems are always in optimal condition.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400">24/7 Support</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Remote assistance available
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    On-site support when needed
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Proactive system monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Emergency response team
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Network Consulting Capabilities
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Our Network Consulting and Integration Services provide comprehensive network life cycle management for carrier networks, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:animate-bounce">
                      <capability.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                        {index + 1}. {capability.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {capability.description}
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
                Ready to Optimize Your Network?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Let our experts design and implement a network solution that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Link to="/contact-us">
                    Schedule Consultation
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

export default NetworkConsulting;
