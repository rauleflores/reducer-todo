import React, { useState } from "react";

const TodoForm = (props) => {
	//console.log("TodoForm props:", props);
	const [todo, setTodo] = useState({
		item: "",
		completed: false,
	});

	const handleChanges = (e) => {
		setTodo({
			...todo,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.dispatch({
			type: props.ADD_ITEM,
			payload: todo,
		});
		setTodo({
			item: "",
			completed: false,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="todo">Todo:</label>
			<input
				name="item"
				placeholder="Make a plan."
				value={todo.item}
				onChange={handleChanges}
			/>
			<button>Submit</button>
		</form>
	);
};

export default TodoForm;
