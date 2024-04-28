import clsx from 'clsx';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './styles.css';

interface LinkProps {
	to: string;
	text: string;
	className?: string;
}

export function Link(props: LinkProps) {
	const { to, text, className } = props;

	return (
		<RouterLink className={clsx('link', className)} to={to}>
			{text}
		</RouterLink>
	);
}
