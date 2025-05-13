import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobList from "@/components/JobList";
import JobApplicationForm from "@/components/JobApplicationForm";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (formData: any) => {
    // Here you would send the data to hr@hiscopetech.com
    // In a real application, you'd use an API endpoint or email service
    console.log("Sending application to hr@hiscopetech.com", formData);
    
    setShowForm(false);
    setShowThankYouDialog(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
            Join Our Team at Hiscope Enterprises
          </h1>
          
          {showForm && selectedJob ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 mb-10 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Apply for: {selectedJob.title}</h2>
                <Button variant="ghost" size="sm" onClick={handleCloseForm} aria-label="Close">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <JobApplicationForm job={selectedJob} onSubmit={handleFormSubmit} />
            </div>
          ) : (
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-lg mb-4">
                At Hiscope Enterprises, we're always looking for talented individuals to join our diverse teams. 
                Whether you're interested in software development, healthcare, automobile engineering, or hospitality management, 
                we have opportunities across our various business divisions.
              </p>
              <p className="text-lg mb-8">
                Browse our current openings below and find a position that matches your skills and career aspirations.
              </p>
            </div>
          )}

          <JobList onApply={handleApply} />
          
          <AlertDialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Application Submitted!</AlertDialogTitle>
                <AlertDialogDescription className="text-lg">
                  Thanks for considering Hiscope Enterprises as your next family, we will try to reach you soon.
                  Take a second and send your resume to hr@hiscopeenterprises.com, that way we can get back to you faster.
                  </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction onClick={() => setShowThankYouDialog(false)}>
                  Continue Exploring
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
