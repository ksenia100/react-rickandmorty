import React, { useState } from 'react';
import styles from './CharacterSearch.module.css'
const CharacterSearch = ({ searchValue, setSearchValue }) => {
  return (
   
      <input
        type="text"
        placeholder='Search...'
        className={styles.input}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
  );
};

export default CharacterSearch;