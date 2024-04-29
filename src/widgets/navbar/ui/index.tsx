import clsx from 'clsx';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'shared/store';
import { Link } from 'shared/ui/link';
import './styles.css';

export function Navbar() {
	const { categoryId } = useParams();

	const { categories } = useAppSelector((state) => state.dataReducer);

	return (
		<nav className="navbar">
			<Link className={clsx({ active: categoryId === undefined })} to="/" text="All" />
			{categories.map((item) => (
				<Link
					className={clsx({ active: categoryId !== undefined && +categoryId === item.id })}
					key={item.id}
					to={`category/${item.id}`}
					text={item.title}
				/>
			))}
		</nav>
	);
}
