
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative">
      <NetworkBackground />
      <Navigation />
      
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-moonlight-light/20">
            <div className="w-20 h-20 bg-gradient-to-r from-moonlight-medium to-moonlight-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-6xl font-bold text-moonlight-lightest mb-4">404</h1>
            <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="bg-moonlight-medium hover:bg-moonlight-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
              <Link 
                to="/services"
                className="border-2 border-moonlight-lightest text-moonlight-lightest hover:bg-moonlight-lightest hover:text-moonlight-dark px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
