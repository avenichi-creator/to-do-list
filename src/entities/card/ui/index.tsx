import React, { useState } from 'react';
import { Card as CardProps } from 'shared/store/data/reducer';
import { EditMode } from './edit-mode';
import './styles.css';
import { ViewMode } from './view-mode';

export function Card(props: CardProps) {
	const [isEditMode, setIsEditMode] = useState(false);

	if (isEditMode)
		return (
			<article className="card">
				<EditMode onClick={() => setIsEditMode(false)} {...props} />
			</article>
		);

	return (
		<article className="card">
			<ViewMode onClick={() => setIsEditMode(true)} {...props} />
		</article>
	);
}
