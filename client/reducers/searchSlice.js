import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  moviesList: []
};

export const searchSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setList: (state, action) => {
      state.moviesList = action.payload;
      console.log(state.moviesList);
    }
  }
});

export const { setSearch, setList } = searchSlice.actions;

export default searchSlice.reducer;