'use client';

import { createSlice } from '@reduxjs/toolkit';

interface AllArr {
	name: string;
	lastModified: number;
	fileNums: number;
	type: string;
	id: number;
	size: number;
}

interface SearchArr {
	name: string;
	lastModified: number;
	fileNums: number;
	type: string;
	id: number;
	size: number;
}

interface ModalMenu {
	arrAll: AllArr[];
	isVisible: boolean;
	hoverElement: number;
	currentFileId: number;
	NameValue: string;
	currentNameFile: number;
	currentSearchInput: string;
	SearchArr: SearchArr[];
	ArrCards: any;
	FoldersMyFiles: any;
	ArrSelected: any;
}

const initialState: ModalMenu = {
	// получать с бека
	arrAll: [],
	ArrCards: [],
	isVisible: false,
	hoverElement: NaN,
	currentFileId: NaN,
	NameValue: '',
	currentNameFile: NaN,
	// поиск
	currentSearchInput: '',
	SearchArr: [],
	//папки в файлах
	FoldersMyFiles: [],
	// избранное
	ArrSelected: [],
};

export const MyFilesSlice = createSlice({
	name: 'SiteBar',
	initialState,

	reducers: {
		addArrEl(state, action) {
			state.arrAll = [...action.payload, ...state.arrAll];
		},
		isVisibles(state, action) {
			state.isVisible = action.payload;
		},

		ModalMenus(state, action) {
			state.hoverElement = action.payload;
		},
		CurrentElement(state, action) {
			state.currentFileId = action.payload;
		},
		DelCurrentFile(state) {
			// отправлять запрос на бек поменять
			state.arrAll.map((el, ind) => {
				if (el.id === state.currentFileId) {
					state.arrAll.splice(ind, 1);
				}
			});
		},
		AddFileSelected(state) {
			// отправлять запрос на бек поменять
			state.arrAll.map((el) => {
				if (el.id === state.currentFileId) {
					state.ArrSelected.push(el);
				}
			});
		},
		setNameValue(state, action) {
			state.NameValue = action.payload.value;
			state.arrAll.map((el) => {
				if (el.id === action.payload.id) {
					state.currentNameFile = el.id;
					el.name = state.NameValue;
				}
			});
		},
		isReneme(state, action) {
			state.currentNameFile = action.payload;
		},
		// Поиск
		SetInputValue(state, action) {
			state.currentSearchInput = action.payload;
		},
		Searching(state, action) {
			state.SearchArr = state.arrAll.filter((obj) =>
				obj.name.toLowerCase().includes(action.payload)
			);
		},
		AddFolder(state, action) {
			state.ArrCards = [
				...state.ArrCards,
				{
					name: 'Папка ',
					lastModified: 'May 25, 2022, 11:20 AM',
					fileNums: 3.515,
					type: 'folder',
					id: state.ArrCards.slice(0).length,
					size: 1231233,
				},
			];
		},
	},
});

export default MyFilesSlice.reducer;
