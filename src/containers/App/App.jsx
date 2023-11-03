import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/Header';
import HomePage from '@containers/HomePage';
import CharacterPage from '@containers/CharacterPage';
import EpisodePage from '@containers/EpisodePage';
import LocationPage from '@containers/LocationPage';
import styles from './App.module.css';

const App = () => {
    const [backgroundImg, setBackgroundImg] = useState(`var(--background-default)`);

    const changeBackgroundImg = (image) => {
        setBackgroundImg(image);
    };

    return (
        <BrowserRouter>
            <div className={styles.wrapper} style={{ backgroundImage: backgroundImg }}>
                <Header changeBackgroundImg={changeBackgroundImg} />
                <Routes>
                    <Route path="/" element={<HomePage changeBackgroundImg={changeBackgroundImg} />} />
                    <Route path="/character" element={<CharacterPage />} />
                    <Route path="/episode" element={<EpisodePage />} />
                    <Route path="/location" element={<LocationPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
