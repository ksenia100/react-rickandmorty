import React, { useState, useEffect } from 'react';

import CharacterList from '@components/CharacterPage/CharacterList';
import CharacterNavigation from '@components/CharacterPage/CharacterNavigation';
import CharacterSearch from '@components/CharacterPage/CharacterSearch';

import { getApiResource } from '@utils/network';
import { getCharacterId, getCharacterImg } from '@services/getCharacterData';

import styles from './CharacterPage.module.css';
import {CHARACTER_LIST_ROUTE} from "../../constants/api_routes";
import {useSearchParams} from "react-router-dom";

const CharacterPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 1);
  console.log();

  const paginate = (page) => {
    setCurrentPage(page);
  }

  const getResource = async (url) => {
  const res = await getApiResource(url);
    if (!res) {
      setCharacters([]);
      return;
    }
    
    const characterList = res.results.map(({ name, url, status }) => {
      const id = getCharacterId(url);
      const img = getCharacterImg(id);

      return {
        id,
        name,
        img,
        status,
      };
    });
    setCharacters(characterList);
  };



  useEffect(() => {
    getResource(`${CHARACTER_LIST_ROUTE}?page=${currentPage}`);
  }, [currentPage]);


  return (
    <>
      <h1 className={styles.text}>Characters</h1>
      <CharacterSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {characters.length === 0 && (
        <p>
          Not found
        </p>
      )}

      {characters.length > 0 && (
        <>
          <CharacterList character={characters} />
          <CharacterNavigation
              paginate={paginate}
              currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};

export default CharacterPage;