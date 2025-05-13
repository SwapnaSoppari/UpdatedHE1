import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const serviceDetails = [
  {
    id: "software",
    title: "Software Development",
    description: `At Hiscope Enterprises, we specialize in building modern, scalable software solutions tailored to meet the unique challenges of today’s businesses. Whether you're a startup needing an MVP or a large enterprise seeking robust digital transformation, our team of engineers delivers full-stack applications with strong UX/UI, secure backend systems, and seamless integrations. We work with a wide range of technologies including React, Node.js, Python, Flutter, and AWS to deliver responsive web apps, mobile apps, and cloud-based enterprise platforms. Our agile process ensures transparency, speed, and flexibility at every step of the development lifecycle.`,
    image: "/images/software.jpg",
    features: [
      "Web Applications - Cutting-edge web applications built using frameworks like React and Next.js, designed for performance and scalability.",
      "Mobile Apps - Cross-platform and native mobile solutions with high responsiveness and intuitive interfaces.",
      "Enterprise Software - Automation platforms, CRM systems, and custom tools to streamline business operations.",
      "API Integration - Integration with third-party APIs, including payment gateways, logistics, and enterprise tools.",
    ],
  },

  {
    id: "Insurance",
    title: "Insured by consulting by our Verified Doctors",
    description: `We are working on a project to provide insurance to our clients with the help of our verified doctors. The project is in its final stages, and we are looking for the best possible way to make it into the big market.`,
    image: "/images/AIML.jpg",
    features: [
      "Discounts  - Discounts on the regular consulataion of the doctor.",
      "Diagnostics - Claim on regular diagnostics when you get your tests don at our resgitered Diagnostics ceters.",
    ],
  },


  {
    id: "water",
    title: "Hiscope Hydra Naturals",
    description: `Hiscope Hydra Naturals is our proprietary bottled water brand under the label HIES – Hydration In Every Sip. We’re dedicated to delivering pure, mineral-rich water sourced from natural springs, processed and bottled in state-of-the-art facilities. Our packaging adheres to international safety standards, and we provide custom labeling services for businesses, events, and promotional campaigns. We also offer bulk and wholesale options, making our premium product accessible for hotels, offices, events, and retail stores. Our mission is to combine health, taste, and brand value in every drop.`,
    image: "/images/Waterandjuices.jpg",
    features: [
      "Natural Spring Water - Water sourced from naturally filtered springs to retain essential minerals and taste.",
      "Premium Bottling - Packaged using hygienic, food-grade PET and glass bottles with advanced filtration systems.",
      "Custom Labeling - Personalize bottles with your own brand or event logo—ideal for marketing and corporate gifting.",
      "Wholesale Options - Competitive pricing for bulk orders to supply retail chains, events, or institutional clients.",
    ],
  },
  {
    id: "events",
    title: "Event Management",
    description: `We bring your vision to life with professional event planning services that cover every detail—from concept to execution. At Hiscope Enterprises, we specialize in curating memorable experiences for corporate functions, product launches, conferences, and personal celebrations. Our team handles logistics, decor, venue management, guest services, entertainment, and digital event coverage. We focus on innovation, precision, and personalization, ensuring that your event runs smoothly and leaves a lasting impression. Whether you're planning a formal gala or an outdoor festival, we take care of everything so you can focus on your guests.`,
    image: "/images/event.jpg",
    features: [
      "Corporate Events - End-to-end planning for board meetings, seminars, team-building sessions, and networking mixers.",
      "Product Launches - Thematic, media-ready events to showcase new offerings with flair and professionalism.",
      "Conferences - AV setup, delegate kits, vendor coordination, and agenda scheduling for smooth execution.",
      "Social Gatherings - Weddings, birthdays, and cultural functions brought to life with custom decor and entertainment.",
    ],
  },
  {
    id: "automobile",
    title: "Automobile",
    description: `We are working on a visionary automotive project to design and manufacture a high-performance electric sports car that’s both eco-friendly and affordable. Our mission is to democratize luxury and innovation by combining advanced electric vehicle (EV) technology with sleek, futuristic designs. From concept sketching to prototyping and testing, our in-house design and engineering teams are focused on building a vehicle that delivers on speed, efficiency, and sustainability. We’re exploring battery optimization, lightweight composites, and AI-assisted driving systems to revolutionize the driving experience for the everyday consumer.`,
    image: "/images/automobile.jpg",
    features: [
      "Electric Sports Car R&D - Our prototype combines aerodynamic styling with high-speed EV propulsion and regenerative braking systems.",
      "Affordable EV Engineering - A cost-effective alternative to high-end EVs, using modular chassis design and recyclable materials.",
      "Eco-Conscious Manufacturing - Focused on minimizing carbon footprint with green assembly processes.",
      "Design Studio - Artistic automotive designs fused with engineering precision to deliver form and function.",
    ],
  },
  {
    id: "ai-healthcare",
    title: "AI & ML in Healthcare",
    description: `In the healthcare sector, we are leveraging the power of Artificial Intelligence and Machine Learning to drive innovation and improve lives. Our research initiatives are focused on developing intelligent diagnostic systems, wearable health monitoring devices, and AI-powered prosthetic limbs that mimic real human motion. By integrating deep learning algorithms with real-world patient data, we aim to assist healthcare professionals in early disease detection, predictive analysis, and personalized treatment planning. Our solutions are aligned with global health tech standards to ensure safety, accuracy, and scalability across medical institutions.`,
    image: "/images/AIML.jpg",
    features: [
      "AI Prosthetics - Smart prosthetics that adjust to user behavior, offering improved mobility and comfort.",
      "Early Diagnostics - Machine learning models trained to detect diseases like cancer, Parkinson’s, and cardiovascular issues.",
      "Predictive Analytics - Risk profiling and predictive reports for chronic disease management and treatment optimization.",
      "Smart Healthcare Apps - Mobile and desktop apps for self-monitoring vitals, scheduling, and real-time doctor-patient interaction.",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
            Our Services
          </h1>

          <p className="text-lg mb-12 max-w-3xl text-gray-700 dark:text-gray-300">
            At Hiscope Enterprises, we offer a wide spectrum of services—from digital innovations to lifestyle products—built around excellence, innovation, and impact.
          </p>

          <div className="space-y-16">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden`}
              >
                <div className="w-full md:w-1/2 h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>

                <div className="w-full md:w-1/2 p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-5">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-200">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
