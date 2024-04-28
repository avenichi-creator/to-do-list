import { categories } from 'shared/mocks/categories';
import { Category } from 'shared/store/categories/reducer';

export const getCategories = async (): Promise<Category[]> => {
	return new Promise((resolve) => setTimeout(() => resolve(categories), 1000));
};
