import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import CharacterList from '@components/CharacterPage/CharacterList';
import CharacterNavigation from '@components/CharacterPage/CharacterNavigation';
import CharacterSearch from '@components/CharacterPage/CharacterSearch';
import CharacterFilter from '@components/CharacterPage/CharacterFilter';
import { getApiResource } from '@utils/network';
import { getCharacterId, getCharacterImg } from '@services/getCharacterData';
import { CHARACTER_LIST_ROUTE } from '@constants/api_routes';
import styles from './CharacterPage.module.css';

const CharacterPage = () => {
  const [searchParams] = useSearchParams();
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(
    searchParams.get('page') ? Number(searchParams.get('page')) : 1
  );
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    status: '',
    gender: '',
    species: '',
  });

  const paginate = (page) => {
    setCurrentPage(page);
  };

  const getResource = async () => {
    const { status, gender, species } = filters;

    const route = `${CHARACTER_LIST_ROUTE}?page=${currentPage}&name=${searchValue}&status=${status}&gender=${gender}&species=${species}`;

    const res = await getApiResource(route);

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
    setTotalPages(res.info.pages);
  };

  useEffect(() => {
    getResource();
  }, [currentPage, searchValue, filters]);

  const onFilter = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };
  
  return (
    <>
      <h1 className={styles.text}>Characters</h1>
      <CharacterSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {characters.length === 0 && <p>Not found</p>}

      {characters.length > 0 && (
        <>
          <div className={styles.characters_filter}>
          <CharacterFilter onFilter={onFilter} 
          filters = {filters} />

            <CharacterList character={characters} />
          </div>

          <CharacterNavigation
            paginate={paginate}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </>
  );
};

export default CharacterPage;
