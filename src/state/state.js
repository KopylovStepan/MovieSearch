export const genres = {
	28: 'боевик',
	12: 'приключения',
	16: 'мультфильм',
	35: 'комедия',
	80: 'криминал',
	99: 'документальный',
	18: 'драма',
	10751: 'семейный',
	14: 'фэнтези',
	36: 'история',
	27: 'ужасы',
	10402: 'музыка',
	9648: 'детектив',
	10749: 'мелодрама',
	878: 'фантастика',
	10770: 'телевизионный фильм',
	53: 'триллер',
	10752: 'военный',
	37: 'вестерн',
};

export const initialState = {
	movies: [],
	errorMessage: null,
	currentPage: null,
	pagesCount: null,
	searchText: '',
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText,
			};
		case 'SET_MOVIES_AND_PAGE':
			return {
				...state,
				movies: action.movies,
				currentPage: action.currentPage,
			};
		case 'SET_ERROR_MESSAGE':
			return {
				...state,
				errorMessage: action.errorMessage,
			};
		case 'SET_PAGE_COUNT':
			return {
				...state,
				pagesCount: action.pagesCount,
			};
		default:
			return state;
	}
};
export const setMoviesAndPageAC = (movies, currentPage) => {
	return { type: 'SET_MOVIES_AND_PAGE', movies, currentPage };
};
export const setPageCountAC = (pagesCount) => {
	return { type: 'SET_PAGE_COUNT', pagesCount };
};
export const setErrorMessageAC = (errorMessage) => {
	return { type: 'SET_ERROR_MESSAGE', errorMessage };
};
export const setSearchTextAC = (searchText) => {
	return { type: 'SET_SEARCH_TEXT', searchText };
};

export default reducer;
