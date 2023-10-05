import {
    RICKY_ROOT, URL_IMG_CHARACTER, GUIDE_IMG_EXTENSION
} from '@constants/api';


const getId = (url) => {

    const id = url
        .replace( RICKY_ROOT, '')
        .replace(/\//g, '')

    return id;
}

export const getCharacterId = url => getId(url, RICKY_ROOT);

export const getCharacterImg = id => `${URL_IMG_CHARACTER}${id}${GUIDE_IMG_EXTENSION}`;
