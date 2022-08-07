import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction } from 'react';
import styles from './SearchBox.module.scss';

interface ISearchBox {
	searchIdValue: string;
	setSearchIdValue: Dispatch<SetStateAction<string>>;
	searchCreatedFromValue: string;
	setSearchCreatedFromValue: Dispatch<SetStateAction<string>>;
	searchCreatedToValue: string;
	setSearchCreatedToValue: Dispatch<SetStateAction<string>>;
	searchNameValue: string;
	setSearchNameValue: Dispatch<SetStateAction<string>>;
	sortValue: string;
	setSortValue: Dispatch<SetStateAction<string>>;
	sortDirectionValue: string;
	setSortDirectionValue: Dispatch<SetStateAction<string>>;
}

const SearchBox: FunctionComponent<ISearchBox> = (props) => {
	const {
		searchIdValue,
		setSearchIdValue,
		searchCreatedFromValue,
		setSearchCreatedFromValue,
		searchCreatedToValue,
		setSearchCreatedToValue,
		searchNameValue,
		setSearchNameValue,
		sortValue,
		setSortValue,
		sortDirectionValue,
		setSortDirectionValue,
	} = props;

	return (
		<form className={ styles.SearchBox }>
			<div className={ styles.SearchBox__row }>
				<label className={ styles.SearchBox__label }>
					<strong>ID документа</strong>
					<input
						type="number"
						value={ searchIdValue }
						onInput={ (event: ChangeEvent<HTMLInputElement>) => setSearchIdValue(event.target.value) }
						min="1"
						step="1"
					/>
				</label>
			</div>
			<div className={ `${ styles.SearchBox__row } ${ styles.SearchBox__row_two }` }>
				<label className={ styles.SearchBox__label }>
					<strong>Создан</strong>
					<input
						type="date"
						value={ searchCreatedFromValue }
						onInput={ (event: ChangeEvent<HTMLInputElement>) => setSearchCreatedFromValue(event.target.value) }
						disabled={ Boolean(searchIdValue) }
					/>
				</label>
				<label className={ styles.SearchBox__label }>
					<input
						type="date"
						value={ searchCreatedToValue }
						onInput={ (event: ChangeEvent<HTMLInputElement>) => setSearchCreatedToValue(event.target.value) }
						disabled={ Boolean(searchIdValue) }
					/>
				</label>
			</div>
			<div className={ styles.SearchBox__row }>
				<label className={ styles.SearchBox__label }>
					<strong>Название документа</strong>
					<input
						type="text"
						value={ searchNameValue }
						onInput={ (event: ChangeEvent<HTMLInputElement>) => setSearchNameValue(event.target.value) }
						disabled={ Boolean(searchIdValue) }
					/>
				</label>
			</div>
			<div className={ `${ styles.SearchBox__row } ${ styles.SearchBox__row_two }` }>
				<label className={ styles.SearchBox__label }>
					<strong>Сортировка</strong>
					<select
						value={ sortValue }
						onInput={ (event: ChangeEvent<HTMLSelectElement>) => setSortValue(event.target.value) }
						disabled={ Boolean(searchIdValue) }
					>
						<option value="createdDate">Создан</option>
						<option value="title">Название</option>
						<option value="completed">Выполнено</option>
					</select>
				</label>
				<label className={ styles.SearchBox__label }>
					<select
						value={ sortDirectionValue }
						onInput={ (event: ChangeEvent<HTMLSelectElement>) => setSortDirectionValue(event.target.value) }
						disabled={ Boolean(searchIdValue) }
					>
						<option value="up">По возрастанию</option>
						<option value="down">По убыванию</option>
					</select>
				</label>
			</div>
		</form>
	);
};

export default SearchBox;
