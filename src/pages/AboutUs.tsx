
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Target, Heart, CheckCircle, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations.",
      icon: Award
    },
    {
      title: "Innovation",
      description: "We embrace innovation and stay ahead of technological trends to provide cutting-edge solutions.",
      icon: Target
    },
    {
      title: "Reliability",
      description: "Our clients trust us to deliver consistent, reliable services that keep their operations running smoothly.",
      icon: CheckCircle
    },
    {
      title: "Customer Focus",
      description: "We put our customers at the center of everything we do, ensuring their success is our priority.",
      icon: Heart
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ASQest</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in technology solutions and maintenance services
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
                Excellence in Technology Solutions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ali Saleh Al Qahthani provides customers with sophisticated network solutions. These include IP telephony and complex new technology to large corporate and public sector organizations throughout Saudi Arabia and the broader region.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With years of experience in the technology industry, we have built a reputation for delivering reliable, innovative solutions that help businesses grow and succeed. Our team of experts is committed to providing exceptional service and support to all our clients.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From network infrastructure to maintenance services, we offer comprehensive solutions that are tailored to meet the unique needs of each client, ensuring optimal performance and long-term success.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <Users className="h-32 w-32 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:animate-bounce">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-center text-lg">
              To provide exceptional technology solutions and maintenance services that empower businesses to achieve their goals. 
              We are committed to delivering reliable, innovative solutions that create lasting value for our clients and contribute 
              to their long-term success in an ever-evolving technological landscape.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us today to discuss how we can help your business succeed.
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
                    View Our Services
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

export default AboutUs;
