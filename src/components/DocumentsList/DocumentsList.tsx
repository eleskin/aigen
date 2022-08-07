import { FunctionComponent } from 'react';
import { isValidDate } from '../../ulits/functions';
import { Todo } from '../../ulits/types';
import styles from './DocumentsList.module.scss';

interface IDocumentsList {
	todos: Todo[];
	searchIdValue: string;
	searchCreatedFromValue: string;
	searchCreatedToValue: string;
	searchNameValue: string;
	sortValue: string;
	sortDirectionValue: string;
}

const DocumentsList: FunctionComponent<IDocumentsList> = (props) => {
	const {
		todos,
		searchIdValue,
		searchCreatedFromValue,
		searchCreatedToValue,
		searchNameValue,
		sortValue,
		sortDirectionValue,
	} = props;

	const filterById = (todo: Todo): boolean => todo.id === Number(searchIdValue);

	const filterWithoutId = (todos: Todo[]): Todo[] => {
		const createdFrom: Date = new Date(new Date(searchCreatedFromValue).setDate(new Date(searchCreatedFromValue).getDate() - 1));
		const createdTo: Date = new Date(searchCreatedToValue);
		const name: string = searchNameValue;

		const filterByCreatedFrom = (todo: Todo): Todo | undefined => {
			const createdDate: Date = new Date(todo.createdDate);

			if (isValidDate(createdFrom)) {
				if (createdDate > createdFrom) return todo;
			} else {
				return todo;
			}
		};

		const filterByCreatedTo = (todo: Todo): Todo | undefined => {
			const createdDate: Date = new Date(todo.createdDate);

			if (isValidDate(createdTo)) {
				if (createdDate <= createdTo) return todo;
			} else {
				return todo;
			}
		};

		const filterByName = (todo: Todo): Todo | null => {
			if (name) {
				const regexp: RegExp = new RegExp(name, 'gi');
				return todo.title.match(regexp) && todo;
			} else {
				return todo;
			}
		};

		return todos.filter(filterByCreatedFrom).filter(filterByCreatedTo).filter(filterByName);
	};

	const filterTodos = (todos: Todo[]): Todo[] => {
		if (searchIdValue !== '') {
			return todos.filter(filterById);
		}

		return filterWithoutId(todos);
	};

	const sortTodos = (todos: Todo[]): Todo[] => {
		return todos.sort((a: Todo, b: Todo): number => {
			if (sortValue === 'createdDate') {
				if (new Date(a.createdDate) > new Date(b.createdDate)) {
					return 1;
				} else if (new Date(a.createdDate) < new Date(b.createdDate)) {
					return -1;
				} else {
					return 0;
				}
			}

			if (sortValue === 'title') {
				if (a.title > b.title) {
					return 1;
				} else if (a.title < b.title) {
					return -1;
				} else {
					return 0;
				}
			}

			if (sortValue === 'completed') {
				if (a.completed > b.completed) {
					return 1;
				} else if (a.completed < b.completed) {
					return -1;
				} else {
					return 0;
				}
			}

			return 0;
		}).sort((): number => {
			if (sortDirectionValue === 'up') return 1;
			if (sortDirectionValue === 'down') return -1;

			return 0;
		});
	};

	const todosList = sortTodos(filterTodos(todos)).map((todo: Todo): JSX.Element => (
		<details key={ todo.id } className={ styles.DocumentsList__item }>
			<summary>{ todo.title }</summary>
			<ul>
				<li>ID: { todo.id }</li>
				<li>userId: { todo.userId }</li>
				<li>completed: { todo.completed ? 'Yes' : 'No' }</li>
				<li>createdDate: { todo.createdDate }</li>
			</ul>
		</details>
	));

	return (
		<div className={ styles.DocumentsList }>
			{ todosList.length > 0 ? todosList : 'Ничего не найдено' }
		</div>
	);
};

export default DocumentsList;
