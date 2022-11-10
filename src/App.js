import React from 'react';
import axios from 'axios';
import JobDetails from './components/JobDetails';
import JobList from './components/JobList';
import { Route, Routes } from 'react-router';

function App() {
  const [jobs, setJobs] = React.useState([]);
  const [selectedJob, setSelectedJob] = React.useState({});
  const [days, setDays] = React.useState();
  const baseURL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
  const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(baseURL, config);
        setJobs(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchData();
  }, []);

  console.log('selectedJob: ', selectedJob);

  return (
    <div className="min-h-[100vh]">
      <Routes>
        <Route
          path="/"
          element={<JobList jobs={jobs} setSelectedJob={setSelectedJob} setDays={setDays} />}
        />
        <Route path="/jobs" element={<JobDetails selectedJob={selectedJob} days={days} />} />
      </Routes>
    </div>
  );
}

export default App;
