import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const services = [
  "Custom Software Development",
  "Cloud Solutions",
  "Mobile App Development",
  "UI/UX Design",
  "IT Consulting",
  "Maintenance & Support"
];

const countries = ["United States", "India", "United Kingdom", "Canada", "Australia"];
const statesByCountry: Record<string, string[]> = {
  "United States": ["California", "New York", "Texas", "Florida"],
  "India": ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi"],
  "United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
  "Canada": ["Ontario", "Quebec", "British Columbia", "Alberta"],
  "Australia": ["New South Wales", "Victoria", "Queensland", "Western Australia"]
};

const GetStartedModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    service: "",
    country: "",
    state: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // TODO: Send to backend
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl p-6 z-10 relative">
          <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 dark:text-gray-300">
            <X size={24} />
          </button>
          <Dialog.Title className="text-xl font-bold text-gray-800 dark:text-white mb-4">Let’s Connect</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Full Name" required className="input" onChange={handleChange} />
              <input type="text" name="phone" placeholder="Phone Number" required className="input" onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" required className="input" onChange={handleChange} />
              <input type="text" name="businessName" placeholder="Business Name (optional)" className="input" onChange={handleChange} />
              <select name="service" required className="input" onChange={handleChange} defaultValue="">
                <option value="" disabled>Select a Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              <select name="country" required className="input" onChange={handleChange} defaultValue="">
                <option value="" disabled>Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <select
                name="state"
                required
                className="input"
                onChange={handleChange}
                value={formData.state}
              >
                <option value="" disabled>Select State</option>
                {(statesByCountry[formData.country] || []).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <textarea
              name="description"
              placeholder="Brief about your service needs (250 to 10000 characters)"
              minLength={250}
              maxLength={10000}
              required
              className="input h-32"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 px-6 rounded-full font-semibold hover:opacity-90 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default GetStartedModal;
