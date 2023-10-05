import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { RICKY_ROOT, URL_IMG_API } from '@constants/api';
import { getCharacterId, getCharacterImg} from '@services/getCharacterData';
import CharacterList from '@components/CharacterPage/CharacterList';

import styles from './CharacterPage.module.css'

const CharacterPage = ({ setErrorApi }) => {
    const [characters, setCharacters] = useState(null);
    const getResource = async (url) => {
      const res = await getApiResource(url);
    
      if (res) {
        const characterList = res.results.map(({ name, url, status, species }) => {
          const id = getCharacterId(url);
          const img = getCharacterImg(id);
  
          return {
            id,
            name,
            img,
            status,
            species
          };
        });
    
        setCharacters(characterList);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    };
    
  
    useEffect(() => {
        getResource(RICKY_ROOT);
    }, []);
  
    return (
        <>
        <h1 className={styles.h1}>Navigation</h1>
            {characters && <CharacterList character={characters} />} 
        </>
    )
  }
  CharacterPage.propTypes = {
    setErrorApi: PropTypes.func
}
  export default withErrorApi(CharacterPage);
