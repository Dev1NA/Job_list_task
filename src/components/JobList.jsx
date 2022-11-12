import React from 'react';
import { useSelector } from 'react-redux';
import JobItem from './JobItem';
import Loader from './Loader';
import NotFound from './NotFound';

const JobList = () => {
  const { jobs, status } = useSelector((state) => state.jobs);
  return (
    <>
      {status === 'loading' ? <Loader /> : jobs.map((job) => <JobItem key={job.id} job={job} />)}
      {status === 'error' ? <NotFound /> : null}
    </>
  );
};

export default React.memo(JobList);
