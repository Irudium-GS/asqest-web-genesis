
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Search, TrendingUp, BarChart, CheckCircle, ArrowRight, Mail, FileText, Target, Users, Globe, Palette, Smartphone, Code, Shield } from "lucide-react";

const DigitalMarketing = () => {
  const digitalMarketingServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your Google ranking and attract more organic traffic",
      icon: Search
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience across platforms like Instagram, X (formerly Twitter), LinkedIn, and TikTok",
      icon: TrendingUp
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Targeted ad campaigns to drive qualified leads instantly",
      icon: Target
    },
    {
      title: "Email Marketing",
      description: "Build and maintain customer relationships with automated, personalized email strategies",
      icon: Mail
    },
    {
      title: "Content Marketing",
      description: "Blogs, website content, and copywriting that convert and support SEO",
      icon: FileText
    },
    {
      title: "Analytics & Reporting",
      description: "Transparent performance tracking and continuous optimization",
      icon: BarChart
    }
  ];

  const brandingServices = [
    {
      title: "Logo design and brand identity development",
      icon: Palette
    },
    {
      title: "Marketing collateral: brochures, flyers, business cards",
      icon: FileText
    },
    {
      title: "Digital graphics for websites and social media",
      icon: Monitor
    },
    {
      title: "Packaging design that stands out on shelves",
      icon: Target
    },
    {
      title: "Brand guidelines to maintain consistency",
      icon: CheckCircle
    },
    {
      title: "Customized visual solutions aligned with your business goals",
      icon: Users
    }
  ];

  const webDevServices = [
    {
      title: "Custom website design and development (responsive and mobile-friendly)",
      icon: Globe
    },
    {
      title: "E-commerce platforms with secure payment integration",
      icon: Target
    },
    {
      title: "iOS and Android mobile app development",
      icon: Smartphone
    },
    {
      title: "Content Management Systems (CMS) for easy updates",
      icon: Code
    },
    {
      title: "API integration and third-party services",
      icon: Monitor
    },
    {
      title: "Ongoing support, maintenance, and performance optimization",
      icon: Shield
    }
  ];

  const industries = [
    "Retail & E-commerce",
    "Healthcare & Education", 
    "Financial Services",
    "Hospitality & Tourism",
    "Government & Public Sector"
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
              Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Drive Online Growth with Targeted, Data-Driven Marketing Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Digital Marketing Introduction */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-16">
            <p className="text-gray-300 leading-relaxed mb-6">
              In today's connected world, having a strong digital presence isn't optional — it's essential. At <strong className="text-white">ASQest</strong>, we offer end-to-end digital marketing solutions designed to grow your brand, increase visibility, and drive measurable results across the web.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're a startup, a corporate entity, or a government agency in Saudi Arabia, we tailor our strategies to align with your business goals and audience behaviors.
            </p>
          </div>

          {/* Digital Marketing Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Our Digital Marketing Services Include:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {digitalMarketingServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose ASQest - Digital Marketing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose ASQest?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Local market expertise in <strong className="text-white">Saudi Arabia's digital landscape</strong></p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Multilingual content creation (Arabic & English)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Tailored campaigns for your industry and target audience</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Certified marketing specialists and performance-focused strategies</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Transparent reporting and ROI-driven execution</p>
              </div>
            </div>
          </div>

          {/* Digital Marketing CTA */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30 mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Build Your Brand Online</h2>
            <p className="text-gray-300 mb-6">
              Reach the right audience at the right time — with the right message.
            </p>
            <p className="text-cyan-300 font-semibold">
              Contact ASQest today to launch a digital marketing strategy that delivers real growth.
            </p>
          </div>

          {/* Graphic Design & Branding Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Graphic Design & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Branding</span>
            </h1>
            <h2 className="text-2xl font-bold text-white mb-8">Create a Strong Visual Identity That Resonates and Converts</h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Your brand is more than just a logo — it's the story, personality, and promise you deliver to your audience. At <strong className="text-white">ASQest</strong>, we craft compelling graphic design and branding solutions that capture your unique value and set you apart in the Saudi Arabian market.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From startups to established enterprises, our creative team works closely with you to develop designs that communicate your brand message clearly and effectively across all platforms.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">Our Graphic Design & Branding Services Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {brandingServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <service.icon className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <p className="text-gray-300">{service.title}</p>
                </div>
              ))}
            </div>

            {/* Why Choose ASQest - Branding */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose ASQest?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Creative professionals with deep understanding of local culture and market trends</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">End-to-end branding solutions from concept to execution</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Focus on designs that enhance customer engagement and loyalty</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Timely delivery and open communication throughout the project</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Flexible packages tailored to businesses of all sizes</p>
                </div>
              </div>
            </div>

            {/* Branding CTA */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30 mb-16">
              <h3 className="text-2xl font-bold text-white mb-4">Build a Brand That Speaks Volumes</h3>
              <p className="text-gray-300 mb-4">
                Make your first impression count with a visually stunning brand identity.
              </p>
              <p className="text-purple-300 font-semibold">
                Contact ASQest today to start your branding journey.
              </p>
            </div>
          </div>

          {/* Web & App Development Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Web & App <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Development</span>
            </h1>
            <h2 className="text-2xl font-bold text-white mb-8">Custom Web and Mobile Solutions to Elevate Your Business</h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                In the digital era, a responsive website and intuitive mobile apps are vital for engaging customers and driving business growth. At <strong className="text-white">ASQest</strong>, we develop tailored web and app solutions that combine cutting-edge technology with user-friendly design — perfect for businesses in Saudi Arabia aiming to stand out online.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you need a sleek corporate website, an e-commerce platform, or a custom mobile app, our experienced developers deliver scalable, secure, and fast-performing products that align with your goals.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">Our Web and App Development Services Include:</h3>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {webDevServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <service.icon className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <p className="text-gray-300">{service.title}</p>
                </div>
              ))}
            </div>

            {/* Why Choose ASQest - Web Dev */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose ASQest?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Skilled developers versed in the latest technologies and frameworks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Focus on usability, accessibility, and seamless user experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Projects tailored to local business requirements and cultural preferences</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Agile development process with transparent communication</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Secure coding practices ensuring data protection and compliance</p>
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Industries We Serve:</h3>
              <div className="space-y-3">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <p className="text-gray-300">{industry}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Dev CTA */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-green-500/30 mb-16">
              <h3 className="text-2xl font-bold text-white mb-4">Bring Your Digital Vision to Life</h3>
              <p className="text-gray-300 mb-4">
                Whether launching a new digital platform or upgrading your existing one,
              </p>
              <p className="text-green-300 font-semibold">
                Contact ASQest today to discuss your web and app development needs.
              </p>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us today to discuss your digital marketing, branding, and development needs.
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
