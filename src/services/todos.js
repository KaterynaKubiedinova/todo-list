import {API_URL} from "../constants/index";
import axios from "axios";

export function getTodos () {
	return axios.get (API_URL)
}

export function createTodo (item) {
	return axios.post (API_URL, item)
}

export function updateTodo (item) {
	return axios.put (API_URL + "/" + item.id, item)
}

export function deleteTodo (id) {
	return axios.delete (API_URL + "/" + id)
}


/*
export function getTodos() {
	return fetch(API_URL).then((res) => res.json());
}

export function createTodo(item) {
	return fetch(API_URL, {
   	method: "POST",
		body: JSON.stringify(item),
		headers: { "Content-Type": "application/json" },
	}).then((res) => res.json());
}

export function updateTodo(item) {
return fetch(API_URL + "/" + item.id, {
   	method: "PUT",
		body: JSON.stringify(item),
		headers: { "Content-Type": "application/json" },
	}).then((res) => res.json());
}

export function deleteTodo(id) {
	return fetch(API_URL + "/" + id, {
   	method: "DELETE",
	}).then((res) => res.json());
}
*/