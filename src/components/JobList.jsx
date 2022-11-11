import React from 'react';
import { useSelector } from 'react-redux';
import JobItem from './JobItem';
import Loader from './Loader';

const JobList = () => {
  const { jobs, status } = useSelector((state) => state.jobs);

  return (
    <>
      {status === 'loading' ? <Loader /> : jobs.map((job) => <JobItem key={job.id} job={job} />)}
      {status === 'error' ? (
        <h1 className="flex justify-center items-center h-[100vh] text-[36px]">
          Error happened while fetching jobs. Please try later.
        </h1>
      ) : null}
    </>
  );
};

export default JobList;
