import { getCategories } from '../get-categories';

export const navbarLoader = () => {
	return { categories: getCategories() };
};
