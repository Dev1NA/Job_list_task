import React from 'react';
import { Route, Routes } from 'react-router';
import JobDetails from './components/JobDetails';
import JobList from './components/JobList';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <div className="min-h-[100vh]">
      <Routes>
        <Route path="/" element={<JobList />}/>
        <Route path="/jobs/:id" element={<JobDetails />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
