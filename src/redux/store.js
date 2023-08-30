import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from './messageSlice';

const store = configureStore({
  reducer: {
    messages: messagesSlice.reducer,
  },
});

export default store;
