'use client';

import { createSlice } from '@reduxjs/toolkit';

interface CardMain {
	name: string;
	lastModified: number;
	fileNums: number;
	type: string;
	id: number;
}

interface Cards {
	ArrCards: CardMain[];
	arrAll: CardMain[];
	currentInput: string;
	NameValue: string;
	FolderID: number; 
}

const initialState: Cards = {
	ArrCards: [
		{
			name: 'ПапкаДокументы.zip',
			lastModified: 1701202439674,
			fileNums: 1.322,
			type: 'image',
			id: 0,
		},
		{
			name: 'ПапкаФото.png',
			lastModified: 1701202439674,
			fileNums: 8.442,
			type: 'image',
			id: 1,
		},
		{
			name: 'ПапкаНовый год22.jpg',
			lastModified: 1701202439674,
			fileNums: 1.0,
			type: 'image',
			id: 2,
		},
		{
			name: 'ПапкаСтарый Год 33.mp4',
			lastModified: 1701202439674,
			fileNums: 1.235,
			type: 'image',
			id: 3,
		},
		{
			name: 'ПапкаОткаты на форум.mp3',
			lastModified: 1701202439674,
			fileNums: 7.381,
			type: 'video',
			id: 4,
		},
		{
			name: 'ПапкаОчень секретно.zip',
			lastModified: 1701202439674,
			fileNums: 3.515,
			type: 'zip',
			id: 5,
		},
		{
			name: 'ПапкаGit.zip',
			lastModified: 1701202439674,
			fileNums: 7.962,
			type: 'zip',
			id: 6,
		},
	],
	arrAll: [
		{
			name: 'Документы.jpeg',
			lastModified: 1701202439674,
			fileNums: 1.322,
			type: 'image/jpeg',
			id: 0,
			size: 1231233,
		},
		{
			name: 'Фото.png',
			lastModified: 1701202439674,
			fileNums: 8.442,
			type: 'image/png',
			id: 1,
			size: 1231233,
		},
		{
			name: 'Новый год22.jpg',
			lastModified: 1701202439674,
			fileNums: 1.0,
			type: 'image/jpeg',
			id: 2,
			size: 1231233,
		},
	],
	currentInput: '',
	NameValue: '',
	FolderID: NaN,
	NotAll: [
		{ name: 'Вы удалили файл pages.txt', id: 0 },
		{ name: 'Вы создали папку “Супер новые технологии”', id: 1 },
		{ name: 'Вы создали папку “Супер новые технологии”', id: 2 },
		{ name: 'Вы удалили файл pages.txt', id: 3 },
		{ name: 'Вы удалили файл pages.txt', id: 4 },
	],
	currentFileId: NaN,

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
			state.NotAll.map((el, ind) => {
				if (el.id === state.currentFileId) {
					state.NotAll.splice(ind, 1);
				}
			});
		},
		CurrentElement(state, action) {
			state.currentFileId = action.payload;
		},
	},
});

export default ArrSlice.reducer;
