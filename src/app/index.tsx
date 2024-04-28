import { router } from 'pages';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { withProviders } from './providers';

function App() {
	return (
		<div className="app">
			<RouterProvider router={router} />
		</div>
	);
}

export default withProviders(<App />);
