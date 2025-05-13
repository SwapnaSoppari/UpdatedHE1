// src/components/JobList.tsx
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Job } from "@/pages/Career";
import { jobs } from "@/data/jobListings";
import { Badge } from "@/components/ui/badge";

interface JobListProps {
  onApply: (job: Job) => void;
}

const JobList: React.FC<JobListProps> = ({ onApply }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  
  const departments = Array.from(new Set(jobs.map(job => job.department)));
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment ? job.department === selectedDepartment : true;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <Input 
            placeholder="Search for jobs..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={selectedDepartment === null ? "default" : "outline"} 
            onClick={() => setSelectedDepartment(null)}
            size="sm"
          >
            All
          </Button>
          {departments.map(dept => (
            <Button 
              key={dept}
              variant={selectedDepartment === dept ? "default" : "outline"} 
              onClick={() => setSelectedDepartment(dept)}
              size="sm"
            >
              {dept}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card key={job.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                    <CardDescription>{job.department}</CardDescription>
                  </div>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <div className="text-sm flex items-center mb-1">
                    <span className="font-medium mr-2">Location:</span> {job.location}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="font-medium mr-2">Experience:</span> {job.experience}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={() => onApply(job)}
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <h3 className="text-xl font-semibold mb-2">No matching jobs found</h3>
            <p className="text-gray-600 dark:text-gray-300">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
