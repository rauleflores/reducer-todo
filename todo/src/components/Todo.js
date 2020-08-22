import React, { useReducer } from "react";
import {
	initialState,
	todoReducer,
	TOGGLE_COMPLETED,
	ADD_ITEM,
} from "../reducers/todoReducer";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const Todo = () => {
	const [state, dispatch] = useReducer(todoReducer, initialState);
	//console.log("state:", state);
	//console.log("dispatch", dispatch);

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
				TOGGLE_COMPLETED={TOGGLE_COMPLETED}
			/>
		</div>
	);
};

export default Todo;
