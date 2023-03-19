import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import locationSlice from '../slices/locationSlice';
import nameSlice from '../slices/nameSlice';
import weatherSlice from '../slices/weatherSlice';

export const store = configureStore({
	reducer: {
		setName: nameSlice,
		auth: authSlice,
		weather: weatherSlice,
		currentLocation: locationSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
