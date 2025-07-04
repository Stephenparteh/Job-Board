import React from "react";

const JobListing = () => {
  const Jobs = [
    {
      job_role: "Web Developer",
      job_description: "Responsible for building websites for client",
      application_opens: "June 15, 2025",
      application_closes: "June 31, 2025",
    },
    {
      job_role: "Mobile App Developer",
      job_description: "Responsible for building applications for client",
      application_opens: "August 20, 2025",
      application_closes: "August 30, 2025",
    },
    {
      job_role: "Graphic Designer",
      job_description: "Responsible for designing for client",
      application_opens: "June 15, 2025",
      application_closes: "June 31, 2025",
    },
  ];
  return (
    <>
      <div>
        <h1>Welcome to Job Board Platform </h1>
      </div>
    </>
  );
};

export default JobListing;
