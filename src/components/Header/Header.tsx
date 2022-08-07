import { FunctionComponent } from 'react';
import styles from './Header.module.scss';

const Header: FunctionComponent = () => {
	return (
		<header className={ styles.Header }>
			<h1 className={ styles.Header__title }>Поиск документов</h1>
		</header>
	);
};

export default Header;
