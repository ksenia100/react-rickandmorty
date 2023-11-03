import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ changeBackgroundImg }) => {
    return (
        <div className={styles.container}>
            <div className={styles.list__container}>
                <ul>
                    <li><NavLink to="/" exact="true"> Home </NavLink> </li>
                    <li> <NavLink to="/character" exact="true" onClick={() => changeBackgroundImg(`var(--background-default)`)}> Character </NavLink> </li>
                    <li><NavLink to="/episode" exact="true" onClick={() => changeBackgroundImg(`var(--background-default)`)}>Episode</NavLink> </li>
                    <li> <NavLink to="/location" exact="true" onClick={() => changeBackgroundImg(`var(--background-default)`)}>Location </NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
