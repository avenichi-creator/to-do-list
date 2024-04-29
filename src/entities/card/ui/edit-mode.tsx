import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { Card, Category, editCard } from 'shared/store/data/reducer';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';

interface EditModeProps {
	onClick: () => void;
}

export function EditMode(props: EditModeProps & Card) {
	const { id, onClick } = props;

	const { categories } = useAppSelector((state) => state.dataReducer);

	const dispatch = useAppDispatch();

	const [text, setText] = useState(props.text);
	const [category, setCategory] = useState<Category>(categories[0]);

	const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
		const newCategory = categories.find((item) => item.id === +e.currentTarget.value);

		if (newCategory) setCategory(newCategory);
	};

	return (
		<>
			<Input value={text} onInput={setText} />
			<select className="select" onChange={handleSelect}>
				{categories.map((item) => (
					<option key={item.id} value={item.id}>
						{item.title}
					</option>
				))}
			</select>
			<Button
				onClick={() => {
					onClick();
					dispatch(editCard({ id, category, text }));
				}}
				text="Submit"
			/>
		</>
	);
}
