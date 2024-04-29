import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Category {
	id: number;
	title: string;
}

export interface Card {
	id: number;
	text: string;
	category: Category;
}

interface InitialState {
	categories: Category[];
	cards: Card[];
}

const initialState: InitialState = {
	categories: [
		{
			id: 0,
			title: 'Opened',
		},
		{
			id: 1,
			title: 'Closed',
		},
	],
	cards: [],
};

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		addCard: {
			reducer(state, action: PayloadAction<Card>) {
				state.cards = [...state.cards, action.payload];
			},
			prepare(card: Card) {
				return { payload: card };
			},
		},
		deleteCard: {
			reducer(state, action: PayloadAction<number>) {
				state.cards = state.cards.filter((item) => item.id !== action.payload);
			},
			prepare(id: number) {
				return { payload: id };
			},
		},
		editCard: {
			reducer(state, action: PayloadAction<Card>) {
				const newCards = state.cards.filter((item) => item.id !== action.payload.id);
				state.cards = [...newCards, action.payload];
			},
			prepare(card: Card) {
				return { payload: card };
			},
		},
	},
});

export const { deleteCard, addCard, editCard } = dataSlice.actions;
export default dataSlice.reducer;
