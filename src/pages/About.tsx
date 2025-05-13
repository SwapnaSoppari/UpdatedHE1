import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
            About Hiscope Enterprises
          </h1>

          <div className="prose max-w-none dark:prose-invert text-lg leading-relaxed">
            <p>
              <strong>Hiscope Enterprises</strong> is a multifaceted organization committed to delivering excellence across diverse sectors including software development, premium water and beverage products, event management, automobile innovation, and AI-driven healthcare solutions.
            </p>

            <p>
              We combine visionary thinking, cutting-edge technology, and a customer-centric approach to solve real-world problems and drive sustainable growth. Our goal is to create solutions that not only address today’s challenges but also shape the innovations of tomorrow.
            </p>

            <p>
              With deep industry expertise and a passion for innovation, we cater to both businesses and consumers by delivering top-tier products and services. From robust software platforms to clean hydration, stunning events to futuristic automotive design, and AI-enhanced healthcare — Hiscope is where innovation meets impact.
            </p>

            <p>
              Founded with a mission to redefine quality and trust, we are proud to lead initiatives that enhance lifestyles and elevate industries. Our dynamic team of professionals is driven by creativity, integrity, and a relentless pursuit of excellence.
            </p>
          </div>

          {/* Founders Section */}
          <h2 className="text-2xl font-semibold text-pink-600 mt-12 mb-4">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md flex flex-col items-center">
              <img
                src="/images/founder1.jpg"
                alt="Founder 1"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Swapna Soppari
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                Founder & CEO with a passion for innovation, Swapna leads the charge in software development and event management, ensuring excellence in every project.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md flex flex-col items-center">
              <img
                src="/images/founder2.jpg"
                alt="Founder 2"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Saikrishna Madiraju
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                Co-Founder & Visionary leader driving business innovation, Tech evangelist and AI expert leading product
                architecture, R&D, and innovation in the healthcare and mobility sectors.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;