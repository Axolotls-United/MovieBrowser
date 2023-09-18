import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  username: '',
  password: '',
  favList: [],
  watchList: [],
  isAuth: false
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload[0];
      state.favList = action.payload[0].favoriteMovies;
      state.watchList = action.payload[0].watchList;
      state.isAuth = true;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
      console.log(state.username);
    },
    resetUsername: (state, action) => {
      state.username = '';
    },
    setPassword: (state, action) => {
      state.password = action.payload;
      console.log(state.password);
    },
    resetPassword: (state, action) => {
      state.password = '';
    },
    addFavList: (state, action) => {
      state.favList.push(action.payload)
    },
    deleteFavList: (state, action) => {
      for(let i = 0; i < state.favList.length; i++) {
        if(state.favList[i].title === action.payload) {
          state.favList.splice(i,1);
        }
      }
    },
    addWatchList: (state, action) => {
      state.watchList.push(action.payload)
    },
    deleteWatchList: (state, action) => {
      for(let i = 0; i < state.watchList.length; i++) {
        if(state.watchList[i].title === action.payload) {
          state.watchList.splice(i,1);
        }
      }
    },
    logout: (state, action) => {
      state.user = null;
      state.favList = [];
      state.watchList = [];
      state.isAuth = false;
    }
  }
});

export const { 
  setUser, 
  setUsername, 
  resetUsername,
  setPassword, 
  resetPassword,
  setFavList, 
  addFavList, 
  deleteFavList, 
  setWatchList, 
  addWatchList, 
  deleteWatchList, 
  logout 
} = userSlice.actions;

export default userSlice.reducer;