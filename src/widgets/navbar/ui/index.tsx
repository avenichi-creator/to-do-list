import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { thunkGetCategories } from 'shared/store/categories/thunks';
import { Link } from 'shared/ui/link';
import { NavbarSkeleton } from './navbar-skeleton';
import './styles.css';

export function Navbar() {
	const { isLoading, categories } = useAppSelector((state) => state.categoriesReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(thunkGetCategories());
	}, []);

	if (isLoading) return <NavbarSkeleton />;

	return (
		<nav className="navbar">
			<Link to="/" text="All" />
			{categories.map((item) => (
				<Link key={item.id} to={`category/${item.id}`} text={item.title} />
			))}
		</nav>
	);
}
