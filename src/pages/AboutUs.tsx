
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Target, Heart, CheckCircle, Shield, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      title: "Integrity",
      description: "We operate with honesty and transparency in every project, building trust with our clients and partners.",
      icon: Shield
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in all our services, delivering quality solutions that exceed expectations.",
      icon: Award
    },
    {
      title: "Innovation",
      description: "We embrace the latest technologies and creative approaches to provide cutting-edge solutions tailored to your needs.",
      icon: Target
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen carefully and tailor our services to meet your unique requirements.",
      icon: Heart
    },
    {
      title: "Reliability",
      description: "Consistent, dependable service is at the heart of everything we do — ensuring your operations run smoothly.",
      icon: CheckCircle
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of the Saudi Arabian market enables us to deliver solutions that truly fit the local business environment.",
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Us</span>
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
          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:animate-bounce flex-shrink-0">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                        {index + 1}. {value.title}
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
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-center text-lg">
              To deliver innovative, reliable technology and facility management solutions that empower businesses across Saudi Arabia to operate efficiently, securely, and sustainably.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed text-center text-lg">
              To be the Kingdom's leading technology and facility services provider, recognized for excellence, innovation, and customer-centric solutions that drive growth and transformation.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Have questions or need expert solutions for your technology and maintenance needs? Contact our friendly team today — we're here to help you find the perfect solution tailored to your business.
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
