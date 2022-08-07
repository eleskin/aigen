import { FunctionComponent } from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: FunctionComponent = () => (
	<div className={ styles.App }>
		<Header/>
		<Main/>
	</div>
);

export default App;
