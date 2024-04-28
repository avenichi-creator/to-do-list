import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from 'shared/utils/get-categories';

export const thunkGetCategories = createAsyncThunk('categories/get-categories', async () => {
	return await getCategories();
});
