import { combineReducers } from "redux";
import { todoReducer } from "./todo/todoReducer";
import { TokenReducer } from "./token/tokenReducer";
import { UserReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
	token: TokenReducer,
	user: UserReducer,
	todo: todoReducer,
});
