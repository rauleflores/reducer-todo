import React from "react";

const TodoList = (props) => {
	//console.log("TodoList props:", props);

	return (
		<div>
			{props.todos.arr.map((todo, key) => {
				console.log("key:", key, "todo:", todo);
				return (
					<>
						<p className={!todo.editing ? "todo completed" : "todo"}>
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
