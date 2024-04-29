import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'entities/card';
import { CreateCard } from 'features/create-card';
import { useAppSelector } from 'shared/store';
import { Card as CardInterface } from 'shared/store/data/reducer';
import './styles.css';

export function CardList() {
	const { categoryId } = useParams();

	const { cards } = useAppSelector((state) => state.dataReducer);

	const [curretnCategoryCards, setCurrentCategoryCards] = useState<CardInterface[]>([]);

	useEffect(() => {
		if (categoryId === undefined) setCurrentCategoryCards(cards);
		else setCurrentCategoryCards(cards.filter((item) => item.category.id === +categoryId));
	}, [categoryId, cards]);

	const Content = () => {
		if (curretnCategoryCards.length < 1) return <p>Empty here</p>;
		else
			return (
				<>
					{curretnCategoryCards.map((item) => (
						<Card key={item.id} {...item} />
					))}
				</>
			);
	};

	return (
		<div className="card-list">
			<Content />
			<CreateCard />
		</div>
	);
}
