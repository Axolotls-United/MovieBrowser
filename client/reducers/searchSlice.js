import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  moviesList: [],
  plot: '',
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
    },
    setPlot: (state, action) => {
      state.plot = action.payload
    }
  }
});

export const { setSearch, setList, setPlot } = searchSlice.actions;

export default searchSlice.reducer;