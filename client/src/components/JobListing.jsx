import React from "react";

const JobListing = () => {
  const Jobs = [
    {
      id: 1,
      job_role: "Web Developer",
      job_description: "Responsible for building websites for client",
      application_opens: "June 15, 2025",
      application_closes: "June 31, 2025",
    },
    {
      id: 2,
      job_role: "Mobile App Developer",
      job_description: "Responsible for building applications for client",
      application_opens: "August 20, 2025",
      application_closes: "August 30, 2025",
    },
    {
      id: 3,
      job_role: "Graphic Designer",
      job_description: "Responsible for designing graphics for client",
      application_opens: "June 15, 2025",
      application_closes: "June 31, 2025",
    },
  ];
  return (
    <>
      <div>
        <h1>Welcome to Job Board Platform </h1>
        {Jobs.map((job) => {
          return (
            <div key={job.id}>
              <h4>{job.job_role}</h4>
              <h4>{job.job_description}</h4>
              <h4>{job.application_opens}</h4>
              <h4>{job.application_closes}</h4>
              <button type="submit">Apply</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default JobListing;
