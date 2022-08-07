import { FunctionComponent, useState } from 'react';
import { useFetchTodo } from '../../ulits/hooks';
import { Todo } from '../../ulits/types';
import DocumentsList from '../DocumentsList/DocumentsList';
import SearchBox from '../SearchBox/SearchBox';
import styles from './Main.module.scss';

const Main: FunctionComponent = () => {
	const todos: Todo[] = useFetchTodo();
	const [searchIdValue, setSearchIdValue] = useState('');
	const [searchCreatedFromValue, setSearchCreatedFromValue] = useState('');
	const [searchCreatedToValue, setSearchCreatedToValue] = useState('');
	const [searchNameValue, setSearchNameValue] = useState('');
	const [sortValue, setSortValue] = useState('createdDate');
	const [sortDirectionValue, setSortDirectionValue] = useState('up');

	return (
		<main className={ styles.Main }>
			<SearchBox
				searchIdValue={searchIdValue}
				setSearchIdValue={setSearchIdValue}
				searchCreatedFromValue={searchCreatedFromValue}
				setSearchCreatedFromValue={setSearchCreatedFromValue}
				searchCreatedToValue={searchCreatedToValue}
				setSearchCreatedToValue={setSearchCreatedToValue}
				searchNameValue={searchNameValue}
				setSearchNameValue={setSearchNameValue}
				sortValue={sortValue}
				setSortValue={setSortValue}
				sortDirectionValue={sortDirectionValue}
				setSortDirectionValue={setSortDirectionValue}
			/>
			<DocumentsList
				searchIdValue={searchIdValue}
				searchCreatedFromValue={searchCreatedFromValue}
				searchCreatedToValue={searchCreatedToValue}
				searchNameValue={searchNameValue}
				sortValue={sortValue}
				sortDirectionValue={sortDirectionValue}
				todos={todos}
			/>
		</main>
	);
};

export default Main;
