
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, Phone, Mail, Monitor, CheckCircle, ArrowRight } from "lucide-react";

const AnnualMaintenance = () => {
  const supportChannels = [
    {
      title: "Remote Assistance",
      description: "Quick resolution of issues through secure remote access to your systems.",
      icon: Monitor
    },
    {
      title: "Phone Consultations",
      description: "Direct phone support for immediate assistance and technical guidance.",
      icon: Phone
    },
    {
      title: "Email Communications",
      description: "Detailed email support for documentation and non-urgent issues.",
      icon: Mail
    },
    {
      title: "On-Site Visits",
      description: "Professional technicians available for complex issues requiring physical presence.",
      icon: Settings
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
              Annual <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Maintenance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT maintenance services for seamless business operations
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
                Stay Worry-Free with Our Maintenance Service
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ali Saleh Al Qahthani offers comprehensive annual maintenance services, ensuring the seamless operation of your IT infrastructure, encompassing both passive and active components.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With over 7 years of expertise in managing small and medium-sized business networks, we guarantee prompt responses to all your support requests. Our dedicated IT specialists provide support through various channels, including remote assistance, phone consultations, email communications, and on-site visits.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Trust Ali Saleh Al Qahthani to maintain and optimize your IT systems, delivering reliable and efficient service tailored to your business needs.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <Settings className="h-32 w-32 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Support Channels Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Multiple Support Channels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportChannels.map((channel, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:animate-bounce">
                      <channel.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                        {channel.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Why Choose Our Annual Maintenance?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">7+ Years Experience</h3>
                <p className="text-gray-300 text-sm">Proven expertise in managing business networks</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">Prompt Response</h3>
                <p className="text-gray-300 text-sm">Quick resolution to minimize downtime</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-300 text-sm">Both passive and active IT components</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Secure Your IT Infrastructure?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us today to discuss your annual maintenance needs and get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Link to="/contact-us">
                    Contact Us
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

export default AnnualMaintenance;
