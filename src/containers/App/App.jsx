import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Використовуйте Routes замість Switch

import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';
import CharacterPage from '@containers/CharacterPage';

import styles from './App.module.css';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className={styles.wrapper}>
					<Header />
					<Routes>
						<Route path="/" element={<Navigate to="/character" />} /> {/* Переспрямування з кореневого шляху на /character */}
						<Route path="/character" element={<CharacterPage />} />
						{routesConfig.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								element={<route.component />}
							/>
						))}
					</Routes>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App;

