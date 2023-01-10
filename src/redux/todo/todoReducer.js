import { GET_TODO } from "./todoType";

const initialState = {
	todo: JSON.parse(localStorage.getItem("todo")) || [],
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TODO:
			return {
				...state,
				todo: action.payload,
			};
		default:
			return state;
	}
};
