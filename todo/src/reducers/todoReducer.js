export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const initialState = [
	{
		item: "Learn about reducers",
		completed: false,
		editing: false,
	},
	{
		item: "Eat dinner",
		completed: false,
		editing: false,
	},
];

export const todoReducer = (state, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				title: action.payload,
				editing: false,
			};
		case TOGGLE_EDITING:
			return {
				...state,
				editing: !state.editing,
			};
		default:
			return state;
	}
};
