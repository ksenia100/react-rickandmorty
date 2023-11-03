import React, { useEffect } from 'react'; 
import styles from './HomePage.module.css';

const HomePage = ({ changeBackgroundImg }) => {
  useEffect(() => {
    changeBackgroundImg('var(--background-home)');
  }, [changeBackgroundImg]);

  return (
    <div className={styles.center}> 
      <h1>Welcome to the Rick and Morty site!</h1>
    </div>
  );
};

export default HomePage;
