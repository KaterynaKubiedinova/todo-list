import TodoItem from "./TodoItem";

export default function TodoList ({todos, onItemClick, onDeleteBtnCLick, onSaveBtnClick}) {

	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem 
					key = {todo.id}
					item = {todo}
					onDeleteBtnCLick = {onDeleteBtnCLick}
					onItemClick = {onItemClick}
					onSaveBtnClick = {onSaveBtnClick}
				/>
			))}
		</ul>
	);
}