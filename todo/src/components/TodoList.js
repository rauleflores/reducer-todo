import React from "react";

const TodoList = (props) => {
	return (
		<div>
			{props.todos.map((todo, key) => {
				//console.log("todo key:", key);
				return (
					<>
						<p>
							{key + 1}. {todo.item}
						</p>
					</>
				);
			})}
		</div>
	);
};

export default TodoList;
