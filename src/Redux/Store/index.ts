import UserReducer from './../Slices/User/index';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    UserReducer
  }
});
