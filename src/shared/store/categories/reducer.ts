import { createSlice } from '@reduxjs/toolkit';
import { thunkGetCategories } from './thunks';

export interface Category {
	id: number;
	title: string;
}

interface InitialState {
	isLoading: boolean;
	categories: Category[];
}

const initialState: InitialState = {
	isLoading: false,
	categories: [],
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(thunkGetCategories.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(thunkGetCategories.fulfilled, (state, action) => {
				state.isLoading = false;
				state.categories = action.payload;
			});
	},
});

export default categoriesSlice.reducer;
