import { useEffect, useState } from 'react';
import { Todo } from './types';

export const useFetchTodo = (): Todo[] => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response: Response) => response.json())
			.then((json: any) => {
				let count: number = 0;

				setTodos(json.map((todo: Todo) => {
					const date: Date = new Date();

					date.setDate(date.getDate() + count);
					todo.createdDate = date.toDateString();

					count += 1;

					return todo;
				}));
			});
	}, [setTodos]);

	return todos;
};
