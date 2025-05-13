import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-pink-500/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-orange-400/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-400/20 text-pink-600 dark:text-pink-400 text-sm font-medium mb-6 animate-fade-in">
            Your Technology Partner
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white max-w-4xl mb-6 animate-fade-in">
            Software Solutions & Services for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
              Modern Businesses
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 animate-fade-in">
            From custom software development to natural water products and event management, 
            Hiscope Enterprises brings innovation to every industry we touch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <button
              onClick={() => navigate("/Services")}
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium"
            >
              Explore Services
            </button>
            <button
              onClick={() => navigate("/Contact")}
              className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group font-medium flex items-center justify-center"
            >
              Contact Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
