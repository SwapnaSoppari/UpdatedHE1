import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
            Contact Us
          </h1>

          {/* General Department Contacts */}
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="text-left px-4 py-2">Department</th>
                  <th className="text-left px-4 py-2">Contact Number</th>
                  <th className="text-left px-4 py-2">Email</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900">
                <tr>
                  <td className="px-4 py-2">Customer Service</td>
                  <td className="px-4 py-2">8142740304</td>
                  <td className="px-4 py-2">Customerservice@hiscopeenterprises.com</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Human Resources</td>
                  <td className="px-4 py-2">8142740304</td>
                  <td className="px-4 py-2">HR@hiscopeenterprises.com</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Complaints</td>
                  <td className="px-4 py-2">8142740304</td>
                  <td className="px-4 py-2">complaints@hiscopeenterprises.com</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Suggestions</td>
                  <td className="px-4 py-2">8142740304</td>
                  <td className="px-4 py-2">Suggestions@hiscopeenterprises.com</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Investments</td>
                  <td className="px-4 py-2">8142740304</td>
                  <td className="px-4 py-2">CEO@hiscopeenterprises.com</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* HR Contacts by Service */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4">HR Contacts by Division</h2>

            <div>
              <h3 className="text-xl font-medium">Employment & Education Verification</h3>
              <p>Email: hr-verification@hiscopeenterprises.com</p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Job Portal</h3>
              <p>Email: hr-jobs@hiscopeenterprises.com</p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Healthcare Services (Verified Doctor / VDr)</h3>
              <p>Email: hr-vdr@hiscopeenterprises.com</p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Freelancer & Consultant Projects</h3>
              <p>Email: hr-freelancers@hiscopeenterprises.com</p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Customer Research / Survey</h3>
              <p>Email: hr-surveys@hiscopeenterprises.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
