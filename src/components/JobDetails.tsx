import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

import JobDetailsBody from './JobDetailsBody';
import NotFound from './NotFound';

interface DetailedJob {
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

const JobDetails: React.FC = () => {
  const { id } = useParams();
  const [job, setJob] = React.useState<DetailedJob>();
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const getDetailed = async () => {
      try {
        const baseURL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
        const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
        const config = {
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        };
        const { data } : {data: DetailedJob[]} = await axios.get(baseURL, config);
        const detailedJob = data.find((item) => item.id === id);

        setJob(detailedJob);
      } catch {
        setError(true);
      }
    };
    if (id && id.length === 24) {
      getDetailed();
      setError(false);
    } else {
      setError(true);
    }
  }, []);

  return (
    <>
      {job === undefined && !error ? (
        <Loader />
      ) : job === undefined && error ? (
        <NotFound />
      ) : (
        <JobDetailsBody {...job!} />
      )}
    </>
  );
};

export default JobDetails;
