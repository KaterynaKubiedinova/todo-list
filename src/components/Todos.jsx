import { useCallback } from "react";
import { useEffect, useState } from "react";
import {
	getTodos,
	createTodo,
	updateTodo,
	deleteTodo
} from "../services/todos";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodosApp () {
	const [todos, setTodos] = useState ([]);

	useEffect (() => {
		getTodos ()
			.then((resp) => {
				console.log(resp.data)
				setTodos (resp.data)});
	},[]);


	const onDeleteBtnCLick = (id) => {
		deleteTodo (id)
			.then ((resp) => {
				const newTodos = todos.filter ((todo) => (todo.id !== id));
				setTodos (newTodos);
			});
	};

	const onAddBtnClick = useCallback(
		(title) => {
			const newTodo = {
				title,
				completed: false
			};
			createTodo (newTodo)
				.then ((resp) => {
					setTodos ((prevTodos) => [...prevTodos, resp.data]);
				})
		},
		[todos]
	);

	const onItemClick = (id) => {
		const item = todos.find ((todo) => todo.id === id);
		const newItem = {...item, completed: !item.completed};
		updateTodo (newItem)
			.then ((resp) => {
				const newTodos = todos.map ((todo) => (todo.id === id ? newItem : todo));
				setTodos (newTodos);
			});
	}


	const onSaveBtnClick = (id, text) => {
		const item = todos.find ((todo) => todo.id === id);
/*
		let newItem = {};
		text !== '' ? newItem = {...item, title: text} : newItem = {...item};
		updateTodo (newItem)
			.then ((resp) => {
				const newTodos = todos.map ((todo) => (todo.id === id ? newItem : todo));
				setTodos (newTodos);
			});
*/
		const newItem = {...item, title: text};
		if(text !== '') {
			updateTodo(newItem)
			.then((resp) => {
				const newTodos = todos.map((todo) => (todo.id === id ? newItem : todo));
				setTodos(newTodos);
			});
		}

	}
	return (
		<>
			<h1>Todos List</h1>
			<TodoList 
				onDeleteBtnCLick = {onDeleteBtnCLick}
				onItemClick = {onItemClick}
				todos = {todos}
				onSaveBtnClick = {onSaveBtnClick}/>
			<TodoForm 
				onAddBtnClick = {onAddBtnClick}/>
		</>
		
	)
}