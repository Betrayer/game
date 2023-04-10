import { createSlice } from '@reduxjs/toolkit';
import { IState } from './types';

const initialState: IState = {
	score: 0,
};

const scoreSlice = createSlice({
	name: 'scoreSlice',
	initialState,
	reducers: {
		addScore: (state) => {
			state.score = state.score + 1;
		},
	},
	extraReducers: {},
});

export const { addScore } = scoreSlice.actions;

export default scoreSlice.reducer;
