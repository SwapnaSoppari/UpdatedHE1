import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Verified Doctor Web & Mobile App",
    status: "Ongoing",
    summary:
      "Verified Doctors is a worlds first and the best digital healthcare platform that put all the verified doctors and other healthcare professional and patients under one roof.",
    timeline: "Released Planned: 15/May/2025",
    image: "/images/VDrlogo.jpg",
  },
  {
    name: "Employment Verification and Academic Proofing",
    status: "Upcoming",
    summary:
      "A centralized platform to Candidate preverification of autheticity of employment and education documentation. This unique platfom is designed for companies and candidates to provide and get oppertunity to the most authentics candidate.",
    timeline: "Launching 25 June 2025",
    image: "/images/EVAAP.jpg",
  },

  {
    name: "VDr Insurance ",
    status: "Upcoming",
    summary:
     "Insure and claim small bills by consulting by our Verified Doctors",
     timeline: "Launching 25 June 2025",
    image: "/images/Insurance.jpg",
  },

  {
    name: "Driver Motor Documentation",
    status: "Upcoming",
    summary:
      "A centralized platform to manage and verify all motor vehicle documentation. Designed for both drivers, vehicle owners and transportation authorities to keepup and validate the autheticity of Documents and Challans. App is developed to decorrupt the system of trasportation all India",
    timeline: "Launching 25 June 2025",
    image: "/images/DMD.jpg",
  },
  {
    name: "Automobile Design & EV Engine Development",
    status: "Upcoming",
    summary:
      "Owning a highend designed sports car is a dream of many. We are working on a project to design and develop a highend sports car with EV engine at a very affordable rates.",
    timeline: "15 January 2026 ++",
    image: "/images/automobile.jpg",
  },
  {
    name: "AI & ML in Healthcare, Research & Development",
    status: "Ongoing",
    summary:
      "Our research team is continously working on the intergration of AI and ML in to helathcare and the Environmental science in benefit towards mankind in any possible way. Curently we are working on a prosthetic organ that can help the disabled to function normal with the muscle momery.",
    timeline: "Coming Q4 2025",
    image: "/images/AIML.jpg",
  },

  {
    name: "Research in enhancement of Energy sources (Solar, Wind, Hydro)",
    status: "Ongoing",
    summary:
      "Our research team is continously working on the intergration of AI and ML in to helathcare and the Environmental science in benefit towards mankind in any possible way. Curently we are working on a prosthetic organ that can help the disabled to function normal with the muscle momery.",
    timeline: "Coming Q4 2025",
    image: "/images/Energy.jpg",
  },

  {
    name: "Bottled ater and juices Fully organic and very less human touched",
    status: "Upcoming",
    summary:
      "We are stepping out in the Food and Bevarages industry with the bottled water branding named HIES (Hydration In Every Sip) and juices with very less human touch. The project is about to launch in days and we are looking for the best possible way to make it into the big market.",
    timeline: "Launching 1 June 2025",
    image: "/images/Waterandjuices.jpg",
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= projects.length ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: currentIndex * (container.scrollWidth / projects.length),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full px-2 mt-16">
      <h2 className="text-3xl font-bold text-center mb-6">
        <span className="text-green-500">Ongoing</span> &{" "}
        <span className="text-blue-500">Upcoming</span> Projects
      </h2>

      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[300px] sm:w-[400px] flex-shrink-0 px-2"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="rounded-xl text-black flex flex-col bg-white shadow-lg overflow-hidden h-full">
              {/* Image Section */}
              <div className="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-contain max-h-full max-w-full p-4"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-700">{project.summary}</p>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-gray-500 italic">
                    {project.timeline}
                  </p>
                  <span
                    className={`text-xs font-semibold ${
                      project.status === "Ongoing"
                        ? "text-green-500"
                        : "text-blue-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
