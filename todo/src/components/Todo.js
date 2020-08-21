import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

import TodoList from "./TodoList";

const Todo = () => {
	const [state, dispatch] = useReducer(todoReducer, initialState);

	return (
		<div>
			<h2>Todo.js!</h2>
			<TodoList todos={state} />
		</div>
	);
};

export default Todo;
