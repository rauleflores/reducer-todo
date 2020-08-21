import React, { useState } from "react";

const TodoForm = (props) => {
	console.log("TodoForm props:", props);
	const [formState, setFormState] = useState({
		item: "",
		completed: false,
		editing: false,
	});

	const handleChanges = (e) => {
		setFormState({
			...formState,
			item: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormState({
			item: "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="todo">Todo:</label>
			<input
				name="todo"
				placeholder="Make a plan."
				value={formState.item}
				onChange={handleChanges}
			/>
			<button>Submit</button>
		</form>
	);
};

export default TodoForm;
