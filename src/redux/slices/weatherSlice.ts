import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeatherData } from '../../api/weatherAPI';

interface WeatherState {
	currentWeather: IWeatherData | null;
}

const initialState: WeatherState = {
	currentWeather: null,
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState,

	reducers: {
		setCurrentWeather: (state, action: PayloadAction<IWeatherData | null>) => {
			state.currentWeather = action.payload;
		},
	},
});

export const { setCurrentWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
