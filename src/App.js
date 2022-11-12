import React from 'react';
import JobDetails from './components/JobDetails';
import JobList from './components/JobList';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchJobs, setJobs } from './redux/slices/jobs';
import NotFound from './components/NotFound';

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
        <Route path="/" element={<JobList />} exact />
        <Route path="/jobs/:id" element={<JobDetails />} exact />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </div>
  );
}

export default App;
