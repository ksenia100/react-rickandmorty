import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';
import CharacterPage from '@containers/CharacterPage';
import styles from './App.module.css';
import HomePage from '../ HomePage/HomePage';

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <Header />
                <Routes>
                    <Route path="/" element= {<HomePage/>} />
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
    );
}

export default App;
