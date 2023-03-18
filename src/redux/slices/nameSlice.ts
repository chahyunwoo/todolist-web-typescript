import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NameType {
	name?: string;
}

const initialState: NameType = {
	name: localStorage.getItem('userName') || '',
};

const nameSlice = createSlice({
	name: 'nameSlice',
	initialState,

	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
			localStorage.setItem('userName', action.payload);
		},
		removeName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
			localStorage.setItem('userName', '');
		},
	},
});

export const { setName, removeName } = nameSlice.actions;

export default nameSlice.reducer;
