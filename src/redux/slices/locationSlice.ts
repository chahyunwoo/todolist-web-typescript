import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface locationType {
	currentLocation: any;
}

const initialState: locationType = {
	currentLocation: null,
};

const locationSlice = createSlice({
	name: 'locationSlice',
	initialState,

	reducers: {
		setCurrentLocation: (state, action: PayloadAction<string>) => {
			state.currentLocation = action.payload;
		},
	},
});

export const { setCurrentLocation } = locationSlice.actions;

export default locationSlice.reducer;
