import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { navbarLoader } from 'shared/utils/loaders';
import { Navbar } from 'widgets/navbar';
import { CategoryPage } from './category-page';
import { PageNotFound } from './page-not-found';
import './styles.css';

function Layout() {
	return (
		<div className="layout">
			<Navbar />
			<div className="layout-content">
				<Outlet />
			</div>
		</div>
	);
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		loader: navbarLoader,
		children: [
			{
				path: '',
				element: <CategoryPage />,
			},
			{
				path: 'category/:categoryId',
				element: <CategoryPage />,
			},
		],
	},
	{
		path: '*',
		element: <PageNotFound />,
	},
]);
