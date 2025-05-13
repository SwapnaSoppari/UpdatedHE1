import { useEffect, useRef, useState } from "react";

const services = [

  {
    title: "Healthcare AI Research",
    description: "Innovative AI solutions for the healthcare industry.",
    features: ["Diagnostics", "Predictive Analytics", "AI Assistants", "Medical Imaging"],
    image: "/images/healthcare.jpg",
  },

  {
    title: "Software Development",
    description: "Custom software solutions tailored to clients need business needs.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Integration"],
    image: "/images/software.jpg",
  },

  

  {
    title: "Automobile Services",
    description: "End-to-end automobile solutions for personal and commercial use.",
    features: ["Automobile Design", "EV Engine Development", "Customised Design", "Logistics"],
    image: "/images/auto.jpg",
  },

  {
    title: "HIES (Hydration In Every Sip) By Hiscope Enterprises",
    description: "Premium water products with our own unique branding.",
    features: ["Natural Spring Water", "Premium Bottling", "Custom Labeling", "Wholesale Options"],
    image: "/images/water.jpg",
  },

  {
    title: "Real Estate",
    description: "With highly qualified Civil engineers and experts wea re also steppin to real estate builing and constratcion Soon. Our thoughts aere to bring comprehensive real estate solutions for  build the futurist homes using the international methods and AI Inventory.",
    features: ["Corporate Events", "Weddings", "Concerts", "Product Launches"],
    image: "/images/realestate.jpg",
  },

  {
    title: "Event Management",
    description: "Professional event planning and execution services.",
    features: ["Corporate Events", "Weddings", "Concerts", "Product Launches"],
    image: "/images/event.jpg",
  },

  
];

export default function ServicesSection() {
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
      container.scrollTo({
        left: currentIndex * (container.scrollWidth / services.length),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full px-2">
      <h2 className="text-3xl font-bold text-center mb-6">
        What We Do at <span className="text-pink-500">Hiscope</span> <span className="text-orange-500">Enterprises</span>
      </h2>

      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth"
        style={{
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
        }}
      >
        {services.map((service, index) => (
          <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2"
          style={{ scrollSnapAlign: "start" }}
        >
          
            <div
              className="h-[350px] rounded-xl text-white flex flex-col justify-end bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              <div className="bg-black bg-opacity-60 p-4 rounded-b-xl">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm mb-2">{service.description}</p>
                <ul className="list-disc ml-5 text-xs">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
