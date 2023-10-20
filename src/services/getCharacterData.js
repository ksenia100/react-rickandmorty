export const getCharacterPageId = (url) => {
    const RICKY_PARAM_PAGE = '?page='; 
    const pos = url.lastIndexOf(RICKY_PARAM_PAGE);
    const id = url.slice(pos + RICKY_PARAM_PAGE.length, url.length);
    return Number(id);
}

const getId = (url) => {
    const RICKY_ROOT = 'https://rickandmortyapi.com/api/character/'; 
    const id = url
        .replace(RICKY_ROOT, '')
        .replace(/\//g, '');
    return id;
}

export const getCharacterId = url => getId(url, 'https://rickandmortyapi.com/api/character/'); 

export const getCharacterImg = id => `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`; 
