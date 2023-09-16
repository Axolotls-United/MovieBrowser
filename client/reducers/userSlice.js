import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  username: '',
  password: '',
  favList: [],
  watchList: []
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload[0];
      state.favList = action.payload[0].favoriteMovies;
      state.watchList = action.payload[0].watchList;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
      console.log(state.username);
    },
    setPassword: (state, action) => {
      state.password = action.payload;
      console.log(state.password);
    },
    addFavList: (state, action) => {
      state.favList.push(action.payload)
    },
    addWatchList: (state, action) => {
      state.watchList.push(action.payload)
    },
  }
});

export const { setUser, setUsername, setPassword, setFavList, addFavList, setWatchList, addWatchList } = userSlice.actions;

export default userSlice.reducer;