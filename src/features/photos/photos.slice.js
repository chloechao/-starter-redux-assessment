import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/search.slice';
import photos from './photos.data.js';

const initialState = {
  photos,
};

const options = {
  name: 'photos',
  initialState,
  reducers: {
    // Task 1: Create an `addPhoto()` case reducer that adds a photo to state.photos.
    addPhoto: (state, action) => {
      state.photos.unshift(action.payload);
    },
    // Task 6: Create an `removePhoto()` case reducer that removes a photo from state.photos
    removePhoto: (state, action) => {
      const index = state.photos.findIndex(photo => photo.id === action.payload);
      if (index !== -1) {
        state.photos.splice(index, 1);
      }
    },
  },
};

const photosSlice = createSlice(options);

export const { addPhoto, removePhoto } = photosSlice.actions;

export default photosSlice.reducer;

export const selectAllPhotos = (state) => state.photos.photos;

export const selectFilteredPhotos = (state) => {
  const searchTerm = selectSearchTerm(state);
  return state.photos.photos.filter(photo =>
      photo.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
