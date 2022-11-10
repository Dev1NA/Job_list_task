import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs, setSelectedJob, setDays }) => {
  console.log('jobs: ', jobs);

  return (
    <>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} setSelectedJob={setSelectedJob} setDays={setDays} />
      ))}
    </>
  );
};

export default JobList;
