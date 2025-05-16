import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Healthcare AI Research",
    description: "Innovative AI solutions for the healthcare industry.",
    features: ["Diagnostics", "Predictive Analytics", "AI Assistants", "Medical Imaging"],
    image: "/images/healthcare.jpg",
    slug: "healthcare-ai",
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to business needs.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Integration"],
    image: "/images/software.jpg",
    slug: "software-development",
  },
  {
    title: "Automobile Services",
    description: "End-to-end automobile solutions for personal and commercial use.",
    features: ["Automobile Design", "EV Engine Development", "Customised Design", "Logistics"],
    image: "/images/auto.jpg",
    slug: "automobile-services",
  },
  {
    title: "HIES (Hydration In Every Sip) By Hiscope Enterprises",
    description: "Premium water products with our own unique branding.",
    features: ["Natural Spring Water", "Premium Bottling", "Custom Labeling", "Wholesale Options"],
    image: "/images/water.jpg",
    slug: "water-products",
  },
  {
    title: "Construction and Development",
    description: "Comprehensive real estate solutions with AI-enhanced designs.",
    features: ["Home Elevation Designs", "Interior Designing", "Community Development", "Area Development"],
    image: "/images/realestate.jpg",
    slug: "construction-development",
  },
  {
    title: "Event Management",
    description: "Professional event planning and execution services.",
    features: ["Corporate Events", "Weddings", "Concerts", "Product Launches"],
    image: "/images/event.jpg",
    slug: "event-management",
  },
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= services.length ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * currentIndex;
      container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }, [currentIndex]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="w-full px-4 max-w-[16 00px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What We Do at{" "}
          <span className="text-pink-600">Hiscope</span>{" "}
          <span className="text-orange-500">Enterprises</span>
        </h2>

        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] h-[400px] sm:w-[400px] sm:h-[00px] lg:w-[400px] lg:h-[400px] px-4"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link to={`/services/${service.slug}`} className="block h-full">
                <div
                  className="h-full rounded-2xl shadow-lg overflow-hidden bg-cover bg-center relative group transition-transform transform hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-2">
                      {service.description}
                    </p>
                    <ul className="list-disc ml-5 text-xs text-gray-300">
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
