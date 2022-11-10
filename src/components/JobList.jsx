import React from 'react';
import { useSelector } from 'react-redux';
import JobItem from './JobItem';
import Loader from './Loader';

const JobList = () => {
  const { jobs, status } = useSelector((state) => state.jobs);

  return (
    <>{status === 'loading' ? <Loader /> : jobs.map((job) => <JobItem key={job.id} job={job} />)}</>
  );
};

export default JobList;
