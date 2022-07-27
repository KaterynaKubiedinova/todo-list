import { useState } from "react";




function TodoForm ({onAddBtnClick}) {
	const [title, setTitle] = useState('');

	const onInputChange = (e) => {
		setTitle(e.target.value);
	}

	const onAdd = (e) => {
		e.preventDefault();
		onAddBtnClick(title);
		setTitle('');
	}

	return (
			<form>
				<fieldset className='my_form'>
					<legend>Enter new todo</legend>
					<input 
					type = 'text' 
					value = {title} 
					onChange = {onInputChange}
					/>
					<button
					onClick = {onAdd}>Add</button>
				</fieldset>
			</form>
	
	)
}

export default TodoForm;