import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

import JobDetailsBody from './JobDetailsBody';
import NotFound from './NotFound';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = React.useState(null);
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
        const { data } = await axios.get(baseURL, config);
        const detailedJob = data.find((item) => item.id === id);

        setJob(detailedJob);
      } catch {
        console.log('I catch mistake');
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
      {job === null && !error ? (
        <Loader />
      ) : job === null && error ? (
        <NotFound />
      ) : (
        <JobDetailsBody job={job} />
      )}
    </>
  );
};

export default JobDetails;
