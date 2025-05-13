import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Career", href: "/career" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const openModal = () => {
    setModalOpen(true);
    closeMobileMenu();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-gray-800 dark:text-white hover:text-pink-500 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 px-6 rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          "fixed inset-x-0 top-[64px] bg-white dark:bg-gray-900 shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-gray-800 dark:text-white hover:text-pink-500 py-3 border-b border-gray-100 dark:border-gray-800 transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 px-6 rounded-full hover:opacity-90 transition-opacity font-medium w-full mt-4"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-xl w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              <X />
            </button>
            <h2 className="text-2xl font-semibold text-center mb-4">Let's Connect</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-md px-4 py-2 w-full"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border rounded-md px-4 py-2 w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-md px-4 py-2 w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Business Name (if any)"
                  className="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <select
                className="border rounded-md px-4 py-2 w-full"
                required
              >
                <option value="">Select a Service</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="verification">Background Verification</option>
                <option value="design">UI/UX Design</option>
                <option value="other">Other</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <select
                  className="border rounded-md px-4 py-2 w-full"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  {/* Add more countries */}
                </select>
                <select
                  className="border rounded-md px-4 py-2 w-full"
                  required
                >
                  <option value="">Select State</option>
                  <option value="MH">Maharashtra</option>
                  <option value="TX">Texas</option>
                  <option value="CA">California</option>
                  {/* Add more states */}
                </select>
              </div>
              <textarea
                placeholder="Brief about the service you need (250 - 10000 characters)"
                minLength={250}
                maxLength={10000}
                rows={5}
                className="border rounded-md px-4 py-2 w-full"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 px-6 rounded-full hover:opacity-90 transition-opacity font-medium w-full"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
