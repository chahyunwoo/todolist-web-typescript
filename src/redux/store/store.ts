import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import nameSlice from '../slices/nameSlice';

export const store = configureStore({
	reducer: {
		setName: nameSlice,
		auth: authSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
