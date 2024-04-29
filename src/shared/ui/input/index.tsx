import React, { useEffect, useState } from 'react';
import './styles.css';

interface InputProps {
	value: string;
	placeholder?: string;
	onInput: (value: string) => void;
}
export function Input(props: InputProps) {
	const { placeholder, onInput } = props;

	const [value, setValue] = useState(props.value);

	useEffect(() => {
		onInput(value);
	}, [value]);

	return (
		<input
			placeholder={placeholder ?? ''}
			type="text"
			value={value}
			className="input"
			onInput={(e) => setValue(e.currentTarget.value)}
		/>
	);
}
