
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowRight, Network, Shield, Settings, Cpu, CheckCircle, Users, Award, Briefcase, Send, Star, Quote } from "lucide-react";

const Index = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
    // Handle form submission here
  };

  return (
    <div className="min-h-screen relative bg-moonlight-dark">
      <NetworkBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-moonlight-medium/20 text-moonlight-lightest rounded-full text-sm font-medium mb-4 animate-pulse">
                Boost Your Network
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Optimized Network interface<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-moonlight-lightest to-moonlight-light animate-pulse">
                Engineered for High-Speed Performance
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge network solutions, security systems, and maintenance services designed for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-moonlight-medium hover:bg-moonlight-light text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Link to="/contact-us">
                  Connect with Us Today! <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-2 border-moonlight-lightest text-moonlight-lightest hover:bg-moonlight-lightest hover:text-moonlight-dark px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-moonlight-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Success Story</h2>
            <p className="text-gray-300 text-lg">Trusted by businesses across Saudi Arabia</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-moonlight-light/30 transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-moonlight-lightest to-moonlight-light rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-moonlight-dark" />
              </div>
              <div className="text-4xl font-bold text-moonlight-lightest mb-2">150+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-moonlight-light/30 transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-moonlight-light to-moonlight-medium rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-moonlight-lightest mb-2">200+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-moonlight-light/30 transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-moonlight-medium to-moonlight-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-moonlight-lightest mb-2">25+</div>
              <div className="text-gray-300">Expert Team Members</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-moonlight-light/30 transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-moonlight-dark to-moonlight-medium rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-moonlight-lightest mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ASQest: Where Technology<br />
                <span className="text-moonlight-lightest">Meets Success</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ali-Saleh Al-Qahthani is a leading technology consultancy firm operating primarily in Saudi Arabia. Our expertise lies in managing technology solutions for businesses of all sizes, ranging from Small and Medium Enterprises to large corporations. With a focus on clarity and efficient utilization of IT investments, Ali-Saleh Al-Qahthani strives to optimize the performance of organizations' IT infrastructure and core applications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-moonlight-lightest mb-2">10+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-moonlight-lightest mb-2">150+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-moonlight-lightest mb-2">3+</div>
                  <div className="text-gray-300 text-sm">Service Categories</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-moonlight-medium/20 to-moonlight-dark/20 rounded-lg backdrop-blur-sm border border-moonlight-light/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                  <Network className="h-24 w-24 text-moonlight-lightest mx-auto mb-4 animate-pulse" />
                  <h3 className="text-white text-xl font-semibold">Network Excellence</h3>
                  <p className="text-gray-300 mt-2">Cutting-edge solutions for modern businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 text-lg">Comprehensive technology solutions for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Network,
                title: "Structure Cabling",
                description: "Expert structured cabling services to ensure seamless connectivity and consistently reliable network performance.",
                link: "/structure-cabling",
                color: "from-moonlight-lightest to-moonlight-light"
              },
              {
                icon: Cpu,
                title: "Network Consulting",
                description: "Experienced networking consultants specialize in delivering tailored solutions for achieving unparalleled network performance and reliability.",
                link: "/network-consulting",
                color: "from-moonlight-light to-moonlight-medium"
              },
              {
                icon: Shield,
                title: "CCTV / WiFi / Access",
                description: "From CCTV to access control and WiFi solutions, we ensure quality and reliability for diverse applications, including banks and libraries.",
                link: "/cctv-wifi-access",
                color: "from-moonlight-medium to-moonlight-dark"
              },
              {
                icon: Settings,
                title: "Annual Maintenance",
                description: "Stay worry-free with ASQest's Annual Maintenance Service. Our expert IT team ensures smooth operation of your infrastructure.",
                link: "/annual-maintenance",
                color: "from-moonlight-dark to-moonlight-medium"
              }
            ].map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="group block"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-moonlight-light/20 hover:border-moonlight-lightest/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:animate-bounce`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-moonlight-lightest transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild
              className="bg-moonlight-medium hover:bg-moonlight-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/services">
                See More Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-moonlight-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-300 text-lg">Trusted by businesses across Saudi Arabia</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-moonlight-light/30 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-moonlight-lightest mb-4" />
              </div>
              <p className="text-gray-300 mb-6 italic">
                "ASQest transformed our network infrastructure completely. Their expertise in structured cabling is unmatched, and the results speak for themselves."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-moonlight-lightest to-moonlight-light rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-moonlight-dark" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Ahmed Al-Rashid</h4>
                  <p className="text-gray-400 text-sm">IT Director, Saudi Tech Corp</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-moonlight-light/30 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-moonlight-lightest mb-4" />
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Their annual maintenance service has kept our systems running smoothly for over 3 years. Professional, reliable, and always responsive."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-moonlight-light to-moonlight-medium rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Fatima Al-Zahra</h4>
                  <p className="text-gray-400 text-sm">Operations Manager, Gulf Industries</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-moonlight-light/30 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-moonlight-lightest mb-4" />
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Outstanding CCTV and security solutions. They delivered everything on time and within budget. Highly recommend their services."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-moonlight-medium to-moonlight-dark rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Omar Hassan</h4>
                  <p className="text-gray-400 text-sm">Security Manager, Riyadh Bank</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-moonlight-dark/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-300 text-lg">Ready to start your project? Contact us today!</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-moonlight-light/30">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <Input 
                    type="text" 
                    placeholder="Your full name"
                    className="bg-white/10 border-moonlight-light/30 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-moonlight-light/30 text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Phone</label>
                <Input 
                  type="tel" 
                  placeholder="+966 XXX XXX XXXX"
                  className="bg-white/10 border-moonlight-light/30 text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Service</label>
                <Input 
                  type="text" 
                  placeholder="Which service are you interested in?"
                  className="bg-white/10 border-moonlight-light/30 text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  className="bg-white/10 border-moonlight-light/30 text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-moonlight-medium hover:bg-moonlight-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-moonlight-medium/20 to-moonlight-dark/20 rounded-2xl p-8 backdrop-blur-sm border border-moonlight-light/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join with Ali Saleh Al Qahthani
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We are the pioneer in Network Cabling and IT Infrastructure Design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-moonlight-medium hover:bg-moonlight-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
              <Button 
                asChild
                className="bg-moonlight-dark hover:bg-moonlight-medium text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/contact-us">
                  Chat with Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
