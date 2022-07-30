import { useState } from "react";
import ChangeTodo from "./ChangeTodo"

function getStyle (completed) {
	return completed ? "lightblue" : "yellow"
}

export default function TodoItem ({item, onDeleteBtnCLick, onItemClick, onSaveBtnClick}) {
	const {completed, title, id} = item;
	const [isEditing, setIsEditing] = useState(false);
	const [count, setCount] = useState (0);
	const [text, setText] = useState ('');
	

	const onInputTextChange = (e) => {
		setText (e.target.value);
		setCount(1);
	}

	const onDelete = (e) => {
		e.stopPropagation();
		onDeleteBtnCLick(id);
	}

	const edit = (e) => {
		setCount(0);
		e.stopPropagation();
		setIsEditing(!isEditing);
	}

	const onSave = () => {
		setIsEditing(!isEditing);
		onSaveBtnClick (id, text);
		setCount(2);
	}

	return (
		<li className="list"
			style = {{backgroundColor: getStyle(completed)}}
			onClick = {() => onItemClick(id)}>
			{isEditing ? 
			<ChangeTodo 
			onInputTextChange = {onInputTextChange}
				onSave = {onSave}
				text = {text}
				title = {title}
				count = {count}/> : 
			<div className ="list_item">
				<p>{title}</p>
				<div className ="item_button">
					<button onClick = {onDelete}>Delete</button>
					<button onClick = {edit}>Edit</button>
				</div>
			</div>
			}
		</li>
	)
}