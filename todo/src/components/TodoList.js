import React from "react";

const TodoList = (props) => {
	//console.log("TodoList props:", props);

	return (
		<div>
			{props.todos.arr.map((todo, key) => {
				console.log("key:", key, "todo:", todo);
				return (
					<>
						<p>
							{key + 1}. {todo.item}{" "}
							<span
								className="completed"
								onClick={() => {
									console.log("Clicked!");
									props.dispatch({ type: props.TOGGLE_COMPLETED });
								}}
							>
								X
							</span>
						</p>
					</>
				);
			})}
		</div>
	);
};

export default TodoList;
