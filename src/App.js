import React from 'react';
import JobDetails from './components/JobDetails';
import JobList from './components/JobList';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchJobs } from './redux/slices/jobs';

function App() {
  const dispatch = useDispatch();

  const getJobs = async () => {
    dispatch(fetchJobs());
  };

  React.useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="min-h-[100vh]">
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
