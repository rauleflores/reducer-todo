export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const initialState = {
	arr: [
		{
			item: "Learn about reducers",
			completed: false,
		},
	],
};

export const todoReducer = (state, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				arr: [...state.arr, action.payload],
			};
		case TOGGLE_COMPLETED:
			return {
				...state,
				completed: !state.completed,
			};
		default:
			return state;
	}
};
