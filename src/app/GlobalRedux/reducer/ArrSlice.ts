'use client';

import { createSlice } from '@reduxjs/toolkit';

interface CardMain {
	name: string;
	lastModified: number | string;
	fileNums: number;
	type: string;
	id: number;
	size?: any;
}

interface Cards {
	ArrCards: CardMain[];
	arrAll: CardMain[];
	currentInput: string;
	NameValue: string;
	FolderID: number;
	NotAll: any;
	currentFileId: any;
	setSupOpen: any;
	currentFile: any;
}

const initialState: Cards = {
	ArrCards: [],
	arrAll: [],
	currentInput: '',
	NameValue: '',
	FolderID: NaN,
	currentFile: '',
	NotAll: [],
	currentFileId: NaN,
	setSupOpen: false,
};

export const ArrSlice = createSlice({
	name: 'ArrStates',
	initialState,
	reducers: {
		AddCard(state, action) {
			state.ArrCards = [
				...state.ArrCards,
				{
					name: '',
					lastModified: 'May 25, 2022, 11:20 AM',
					fileNums: 3.515,
					type: 'zip',
					id: state.ArrCards.slice(0).length,
				},
			];
		},
		AddInput(state, action) {
			state.currentInput = action.payload;
		},
		SetName(state, action) {
			state.ArrCards[state.ArrCards.length - 1].name = state.currentInput;
		},
		SetFolderId(state, action) {
			state.FolderID = action.payload;
		},
		DelCurrentNot(state) {
			state.NotAll.map((el: any, ind: any) => {
				if (el.id === state.currentFileId) {
					state.NotAll.splice(ind, 1);
				}
			});
		},
		CurrentElement(state, action) {
			state.currentFileId = action.payload;
		},
		//открытие окна поддержки
		SupWnd(state, action) {
			state.setSupOpen = action.payload;
		},
	},
});

export default ArrSlice.reducer;
