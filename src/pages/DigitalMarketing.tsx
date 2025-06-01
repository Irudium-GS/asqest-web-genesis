
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Search, TrendingUp, BarChart, CheckCircle, ArrowRight } from "lucide-react";

const DigitalMarketing = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and increase organic traffic to your website.",
      icon: Search
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across social media platforms.",
      icon: TrendingUp
    },
    {
      title: "Analytics & Reporting",
      description: "Track performance and gain insights with comprehensive analytics and reporting.",
      icon: BarChart
    },
    {
      title: "Website Optimization",
      description: "Optimize your website for better user experience and conversion rates.",
      icon: Monitor
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
              Comprehensive digital marketing strategies to boost your online presence
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
                Drive Business Growth Online
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive digital marketing strategies to boost your online presence and drive business growth through innovative solutions. Our expert team creates data-driven campaigns that deliver measurable results.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From search engine optimization to social media marketing, we provide end-to-end digital marketing services that help businesses reach their target audience and achieve their growth objectives in the digital landscape.
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

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Grow Your Business Online?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us today to discuss your digital marketing needs and strategy.
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
                    Web Development
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
