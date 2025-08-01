
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Search, Share2, Target, TrendingUp, ArrowRight, Mail } from "lucide-react";

const DigitalMarketing = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility and ranking on search engines to attract more organic traffic.",
      icon: Search
    },
    {
      title: "Social Media Marketing",
      description: "Engage with your audience across all major social media platforms and build brand awareness.",
      icon: Share2
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Targeted advertising campaigns that deliver immediate results and measurable ROI.",
      icon: Target
    },
    {
      title: "Content Marketing",
      description: "Create valuable, relevant content that attracts and retains your target audience.",
      icon: TrendingUp
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
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Marketing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Results-driven digital marketing services to grow your business online
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
                Boost Your Online Presence
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Boost your brand's online presence with our tailored digital marketing solutions — including SEO, social media, PPC, content marketing, and more — designed to grow your business across Saudi Arabia.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our data-driven approach ensures that every marketing dollar is spent effectively, delivering measurable results that contribute to your business growth and success.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <Monitor className="h-32 w-32 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Digital Marketing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:animate-bounce">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
              <Mail className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Contact for Digital Services</h3>
              <p className="text-gray-300 mb-6">
                For digital marketing and digital services inquiries, reach out to our specialized team:
              </p>
              <a 
                href="mailto:Shyed@asqest.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-lg font-semibold transition-colors"
              >
                Shyed@asqest.com
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Grow Your Business Online?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us today for comprehensive digital marketing services.
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
                  <Link to="/web-development">
                    View Web Development
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

export default DigitalMarketing;
