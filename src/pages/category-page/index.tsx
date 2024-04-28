import React from 'react';
import { useParams } from 'react-router-dom';

export function CategoryPage() {
	const { categoryId } = useParams();

	if (!categoryId) return <div className="category-page">all todos</div>;

	return <div className="category-page">category {categoryId} todos</div>;
}
