import { configureStore } from '@reduxjs/toolkit';
import jobs from './slices/jobs';

export const store = configureStore({
  reducer: {
    jobs,
  },
});
