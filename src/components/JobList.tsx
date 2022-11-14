import axios from 'axios';
import React from 'react';
import JobItem from './JobItem';
import Loader from './Loader';
import NotFound from './NotFound';

interface JobList {
  id: string,
  name: string,
  email: string,
  phone: string,
  title: string,
  salary: string,
  address: string,
  benefits: string[],
  location: {
    lat: number,
    long: number,
  },
  pictures: string[],
  createdAt: string,
  updatedAt: string,
  description: string,
  employment_type: string[],
}

const JobList: React.FC = () => {
  const [jobs, setJobs] = React.useState<JobList[]>();
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getJobs = async () => {
      try {
        const baseURL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
        const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
        const config = {
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        };
        const { data } : {data: JobList[]}= await axios.get(baseURL, config);

        setLoading(false);
        setJobs(data);
      } catch {
        setError(true);
        setLoading(false);
      }
    };
    getJobs();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <NotFound />
      ) : (
        jobs!.map((job) => <JobItem key={job.id} {...job} />)
      )}
    </>
  );
};

export default React.memo(JobList);
