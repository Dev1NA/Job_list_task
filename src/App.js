import React from 'react';
import { Route, Routes } from 'react-router';
import JobDetails from './components/JobDetails';
import JobList from './components/JobList';
import NotFound from './components/NotFound';

function App() {
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
