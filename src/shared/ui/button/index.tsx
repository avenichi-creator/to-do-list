import React from 'react';
import './styles.css';

interface ButtonProps {
	text: string;
	onClick: () => void;
}

export function Button(props: ButtonProps) {
	const { text, onClick } = props;

	return (
		<button className="button" onClick={onClick}>
			{text}
		</button>
	);
}
