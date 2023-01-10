import { GET_TODO } from "./todoType";

export const getTodo = (todo) => {
	return {
		type: GET_TODO,
		payload: todo,
	};
};


