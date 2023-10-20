import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CharacterList from '@components/CharacterPage/CharacterList';
import CharacterNavigation from '@components/CharacterPage/CharacterNavigation';
import CharacterSearch from '@components/CharacterPage/CharacterSearch';

import { getApiResource } from '@utils/network';
import { getCharacterId, getCharacterImg, getCharacterPageId } from '@services/getCharacterData';
import { useQueryParams } from '@hooks/useQueryParams';

import styles from './CharacterPage.module.css';

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const query = useQueryParams();

  const getResource = async (url) => {
    console.log(url);
    
  if(!url){
    url = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchValue}`;
  }
  
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
    setPrevPage(res.info.prev);
    setNextPage(res.info.next);
    setCurrentPage(Number(query.get('page')));
    
  };

  useEffect(() => {
    getResource('https://rickandmortyapi.com/api/character/?page=' + currentPage);
  }, []);


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
            getResource={getResource}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};

export default CharacterPage;