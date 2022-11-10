import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchJobs = createAsyncThunk('jobs/fetchJobsStatus', async () => {
  const baseURL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
  const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };
  const { data } = await axios.get(baseURL, config);
  return data;
});

const initialState = {
  jobs: [],
  selectedJob: {},
  days: 0,
  status: 'loading',
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
    },
    setSelectedJob(state, action) {
      state.selectedJob = action.payload;
    },
    setDays(state, action) {
      state.days = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.status = 'loading';
      state.jobs = [];
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.status = 'success';
      state.jobs = action.payload;
    });
    builder.addCase(fetchJobs.rejected, (state) => {
      state.status = 'error';
      state.jobs = [];
    });
  },
});

export const { setJobs, setSelectedJob, setDays } = jobsSlice.actions;
export default jobsSlice.reducer;
