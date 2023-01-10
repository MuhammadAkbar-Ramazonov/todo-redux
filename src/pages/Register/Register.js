import axios from "axios";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../redux/token/tokenAction";
import { getUser } from "../../redux/user/userAction";

export const Register = () => {
	const dispatch = useDispatch();
	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();
	const password = useRef();
	const state = useSelector((state) => state);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		axios
			.post("http://localhost:8080/register", {
				first_name: firstName.current.value,
				last_name: lastName.current.value,
				email: email.current.value,
				password: password.current.value,
			})
			.then((res) => {
				if (res.status === 201) {
					console.log(res);
					dispatch(getToken(res.data.accessToken));
					dispatch(getUser(res.data.user));
					localStorage.setItem("token", res.data.accessToken);
					localStorage.setItem("user", JSON.stringify(res.data.user));
				}
			});
	};

	return (
		<div className='container'>
			<div className='shadow w-50 mx-auto p-4 mt-5'>
				{console.log(state.user.user)}
				<div>{state.user.user.first_name}</div>

				<h2 className='text-center h1 mb-3'>Register</h2>
				<form
					onSubmit={(evt) => handleSubmit(evt)}
					className='d-flex flex-column gap-4'
				>
					<input
						ref={firstName}
						className='form-control'
						type='text'
						placeholder='First name'
					/>
					<input
						ref={lastName}
						className='form-control'
						type='text'
						placeholder='Last name'
					/>
					<input
						ref={email}
						className='form-control'
						type='email'
						placeholder='Email name'
					/>
					<input
						ref={password}
						className='form-control'
						type='password'
						placeholder='Password name'
					/>
					<button className='btn btn-success'>Submit</button>
				</form>
			</div>
		</div>
	);
};
