
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Link } from "react-router-dom";
import { Network, Shield, Settings, Cpu, Wrench, Zap, Building, Paintbrush, Monitor, Smartphone, Droplets, Sparkles, ShieldCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Structured Cabling Solutions",
      description: "Reliable and scalable structured cabling installations designed to support your business's data, voice, and video communications with maximum efficiency and future-proofing.",
      icon: Network,
      link: "/structure-cabling",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Expert Network Consulting Services",
      description: "Optimize your business network with tailored consulting solutions. We analyze, design, and implement efficient, secure, and scalable networks that drive performance and reduce downtime.",
      icon: Cpu,
      link: "/network-consulting",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "CCTV, WiFi & Access Control Solutions",
      description: "Enhance security and connectivity with our integrated CCTV surveillance, reliable WiFi installations, and advanced access control systems — tailored to protect and connect your business efficiently.",
      icon: Shield,
      link: "/cctv-wifi-access",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Comprehensive Annual Maintenance Services",
      description: "Keep your critical systems running smoothly year-round with our reliable annual maintenance plans — covering HVAC, electrical, plumbing, IT infrastructure, and more to minimize downtime and extend equipment life.",
      icon: Settings,
      link: "/annual-maintenance",
      color: "from-pink-400 to-red-500"
    },
    {
      title: "HVAC & AC Maintenance and Repair Services",
      description: "Ensure year-round comfort and efficiency with our expert HVAC and AC maintenance and repair services. We handle everything from routine inspections to emergency repairs, helping businesses and facilities in Saudi Arabia maintain optimal indoor climate, improve air quality, and reduce energy costs.",
      icon: Wrench,
      link: "/ac-maintenance",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Professional Electrical Maintenance & Service",
      description: "Ensure safety and reliability with our comprehensive electrical maintenance and service solutions. From routine inspections to emergency repairs, we keep your electrical systems efficient and compliant with Saudi Arabia's regulations.",
      icon: Zap,
      link: "/electrical-maintenance",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Commercial building maintenance",
      description: "Maintain a safe, efficient, and welcoming environment with our full-service commercial building maintenance. We handle everything from HVAC and electrical to cleaning, plumbing, and facility upkeep tailored for businesses across Saudi Arabia.",
      icon: Building,
      link: "/commercial-maintenance",
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "Professional Painting & Interior Decorating Services",
      description: "Enhance your space with expert painting and interior decorating solutions. From fresh coats to stylish designs, we transform commercial and residential properties across Saudi Arabia to reflect your brand and style.",
      icon: Paintbrush,
      link: "/painting-services",
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "Reliable Plumbing Services",
      description: "From routine repairs to full installations, our expert plumbing services ensure your commercial or residential facilities in Saudi Arabia run smoothly with safe and efficient water systems.",
      icon: Droplets,
      link: "/plumbing-services",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Professional Cleaning & Housekeeping Services",
      description: "We provide professional cleaning and housekeeping solutions for hotels, offices, companies, tourist villas, and residential properties across Saudi Arabia — wherever you need us, we ensure spotless, hygienic, and welcoming environments.",
      icon: Sparkles,
      link: "/cleaning-services",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Reliable Fire Safety Services",
      description: "Protect your business and property with our comprehensive fire safety solutions — including fire alarm installation, suppression systems, inspections, and emergency planning — serving clients across Saudi Arabia.",
      icon: ShieldCheck,
      link: "/fire-safety-services",
      color: "from-red-400 to-orange-500"
    },
    {
      title: "Results-Driven Digital Marketing Services",
      description: "Boost your brand's online presence with our tailored digital marketing solutions — including SEO, social media, PPC, content marketing, and more — designed to grow your business across Saudi Arabia.",
      icon: Monitor,
      link: "/digital-marketing",
      color: "from-cyan-400 to-teal-500"
    },
    {
      title: "Creative Graphic Design & Branding Services",
      description: "Elevate your brand with our professional graphic design and branding solutions. From logos to marketing materials, we create impactful visuals that resonate with your audience across Saudi Arabia.",
      icon: Smartphone,
      link: "/web-development",
      color: "from-violet-400 to-purple-500"
    },
    {
      title: "Custom Web & App Development Services",
      description: "Build powerful, user-friendly websites and mobile apps tailored to your business needs. Our expert development team delivers scalable, secure, and innovative digital solutions across Saudi Arabia.",
      icon: Smartphone,
      link: "/web-development",
      color: "from-violet-400 to-purple-500"
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology and maintenance solutions for modern businesses
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="group block"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:animate-bounce`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today to discuss your unique business requirements and receive a tailored web or app development solution designed to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us"
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Contact Us
              </Link>
              <Link 
                to="/about-us"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
