import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getTodo } from "../../redux/todo/todoAction";

export const Home = () => {
	const inputRef = useRef();
	const state = useSelector((state) => state);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		axios
			.post("http://localhost:8080/todos", {
				todo_name: inputRef.current.value,
			})
			.then((data) => {
				getTodos();
			})
			.catch((err) => console.log(err));
	};

	const handleEdit = (id) => {
		const edit = prompt("Edit your todo");
		console.log(edit);
		axios
			.put("http://localhost:8080/todos/" + id, {
				todo_name: edit,
			})
			.then((data) => {
				getTodos();
			})
			.catch((err) => console.log(err));
	};

	const handleDelete = (id) => {
		// const edit = prompt("Edit your todo");
		axios
			.delete("http://localhost:8080/todos/" + id)
			.then((data) => {
				getTodos();
				console.log(data);
			})
			.catch((err) => console.log(err));
		getTodos();
	};

	const getTodos = () => {
		axios
			.get("http://localhost:8080/todos")
			.then((data) => {
				localStorage.setItem("todo", JSON.stringify(data.data));
				getTodo(data.data);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className='container'>
			<div className='shadow rounded-3 p-4 mt-5'>
				<h2 className='text-center text-success mb-4 h1'>Todos</h2>
				<form onSubmit={(evt) => handleSubmit(evt)} className='input-group'>
					<input
						ref={inputRef}
						className='form-control'
						type='text'
						placeholder='Todos...'
					/>
					<button type='submit' className='btn btn-success'>
						SENT
					</button>
				</form>
			</div>
			{state.todo.todo.length ? (
				<ul className='list-unstyled shadow w-50 mx-auto mt-5 p-4 rounded-3'>
					{state.todo.todo.map((item) => {
						console.log(state.todo.todo);
						return (
							<li className='d-flex align-items-center justify-content-between gap-4 mb-3'>
								<div className='d-flex align-items-center gap-4'>
									<span className='h5 m-0'>{item.id}.</span>
									<input type='checkbox' />
									<h3 className='h5 m-0 '>{item.todo_name}</h3>
								</div>
								<div className='d-flex align-items-center gap-4'>
									<button
										onClick={() => handleEdit(item.id)}
										className='btn btn-warning text-white'
									>
										EDIT
									</button>
									<button
										onClick={() => handleDelete(item.id)}
										className='btn btn-danger'
									>
										DELET
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			) : (
				<div className='shadow w-50 mx-auto mt-5 p-4 rounded-3'>
					<h2 className='h3 text-center text-success'>Todos empty...</h2>
				</div>
			)}
		</div>
	);
};
