import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

export const App = () => {
	const state = useSelector((state) => state);
	const navigate = useNavigate();
	if (state.token) {
		navigate("/");
		return (
			<>
				<Home />
			</>
		);
	} else {
		return (
			<>
				<Routes>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</>
		);
	}
};
