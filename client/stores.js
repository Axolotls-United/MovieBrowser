import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import searchReducer from './reducers/searchSlice';
import userReducer from './reducers/userSlice';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
export const store = configureStore({
  reducer: {
    searches: searchReducer,
    users: userReducer
  }
});