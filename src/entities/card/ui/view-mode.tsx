import React from 'react';
import { useAppDispatch } from 'shared/store';
import { Card, deleteCard } from 'shared/store/data/reducer';
import { Button } from 'shared/ui/button';

interface ViewModeProps {
	onClick: () => void;
}

export function ViewMode(props: ViewModeProps & Pick<Card, 'text' | 'id'>) {
	const { id, text, onClick } = props;

	const dispatch = useAppDispatch();

	const handleDelete = () => {
		dispatch(deleteCard(id));
	};

	return (
		<>
			<p className="card__text">{text}</p>
			<Button onClick={handleDelete} text="Delete" />
			<Button onClick={onClick} text="Edit" />
		</>
	);
}
