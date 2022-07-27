import { useState } from "react";

function ChangeTodo ({title, onSave, count, text, onInputTextChange}) {

	
	return (
		<form className="my_form_list"
			onClick={(e) => e.stopPropagation()}>
			<input type = "text" 
			value = {count < 1 ? title : text} 
			onChange = {onInputTextChange}
			/>
			<button onClick = {(e) => {
				e.preventDefault ();
				onSave()}}>Save</button>
		</form>
	)
}

export default ChangeTodo;