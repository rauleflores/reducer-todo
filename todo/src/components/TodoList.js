import React, { useState } from "react";

const TodoList = (props) => {
	console.log("TodoList props:", props);

	return (
		<div>
			{props.todos.map((todo, key) => {
				console.log("todo:", todo);
				console.log("todo key:", key);
				return (
					<>
						<p>
							{key + 1}. {todo.item} <span className="completed">X</span>
						</p>
					</>
				);
			})}
		</div>
	);
};

export default TodoList;
