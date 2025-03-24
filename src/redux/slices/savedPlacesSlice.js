// src/redux/slices/savedPlacesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const savedPlacesSlice = createSlice({
    name: 'savedPlaces',
    initialState: {
        places: [],
    },
    reducers: {
        addPlace: (state, action) => {
            const exists = state.places.find(place => place.id === action.payload.id);
            if (!exists) {
                state.places.push(action.payload);
            }
        },
        removePlace: (state, action) => {
            state.places = state.places.filter(place => place.id !== action.payload);
        },
    },
});

export const { addPlace, removePlace } = savedPlacesSlice.actions;

export const selectSavedPlaces = (state) => state.savedPlaces.places;

export default savedPlacesSlice.reducer;
