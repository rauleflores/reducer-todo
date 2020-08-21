import React, { useState, useReducer } from "react";
import {
	initialState,
	todoReducer,
	TOGGLE_EDITING,
	ADD_ITEM,
} from "../reducers/todoReducer";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const Todo = () => {
	const [newTodo, setNewTodo] = useState("");
	const [state, dispatch] = useReducer(todoReducer, initialState);
	console.log("state:", state);
	console.log("dispatch", dispatch);

	const stateObjArray = state;

	console.log(stateObjArray);

	const handleChanges = (e) => {
		setNewTodo(e.target.value);
	};

	return (
		<div>
			<h2>Todo.js!</h2>
			<>
				<h3>Add a todo!</h3>
				<TodoForm dispatch={dispatch} ADD_ITEM={ADD_ITEM} />
			</>
			<TodoList
				todos={state}
				dispatch={dispatch}
				TOGGLE_EDITING={TOGGLE_EDITING}
			/>
		</div>
	);
};

export default Todo;
