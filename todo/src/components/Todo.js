import React, { useState, useReducer } from "react";
import {
	initialState,
	todoReducer,
	TOGGLE_EDITING,
	ADD_ITEM,
} from "../reducers/todoReducer";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Todo = () => {
	const [newTodo, setNewTodo] = useState("");
	const [state, dispatch] = useReducer(todoReducer, initialState);
	console.log("state:", state);
	console.log("dispatch", dispatch);

	const handleChanges = (e) => {
		setNewTodo(e.target.value);
	};

	return (
		<div>
			<h2>Todo.js!</h2>
			<>
				<h3>Add a todo!</h3>
				<TodoForm />
			</>
			<div>
				{state.map((todo, key) => {
					console.log("todo:", todo);
					console.log("todo key:", key);
					return (
						<>
							{!todo.editing ? (
								<p>
									{key + 1}. {todo.item}{" "}
									<i
										onClick={() => {
											console.log("Clicked");
											// Tell the reducer to toggle the editing attribute
											dispatch({ type: TOGGLE_EDITING });
										}}
										className="far fa-edit"
									/>
								</p>
							) : (
								<div>
									<input
										className="title-input"
										type="text"
										name="newTitleText"
										value={newTodo}
										onChange={handleChanges}
									/>
									<button
										onClick={() => {
											// tell the reducer to update the title,
											// passing newTitleText as the payload
											dispatch({
												type: ADD_ITEM,
												payload: newTodo,
											});
										}}
									>
										Update title
									</button>
								</div>
							)}
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Todo;
