import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { addCard, Category } from 'shared/store/data/reducer';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import './styles.css';

export function CreateCard() {
	const { categories } = useAppSelector((state) => state.dataReducer);

	const dispatch = useAppDispatch();

	const [text, setText] = useState('');
	const [category, setCategory] = useState<Category>(categories[0]);

	const handleClick = () =>
		dispatch(
			addCard({
				id: Math.floor(Math.random() * 1000),
				text,
				category: category,
			}),
		);

	const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
		const newCategory = categories.find((item) => item.id === +e.currentTarget.value);

		if (newCategory) setCategory(newCategory);
	};

	return (
		<div className="create-card">
			<Input onInput={setText} value={text} placeholder="ex: Buy milk" />
			<select className="select" onChange={handleSelect}>
				{categories.map((item) => (
					<option key={item.id} value={item.id}>
						{item.title}
					</option>
				))}
			</select>
			<Button onClick={handleClick} text="Create" />
		</div>
	);
}
