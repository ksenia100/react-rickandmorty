import React, { useState } from 'react';
import styles from './CharacterFilter.module.css';

const CharacterFilter = ({ onFilter, filters }) => {
  const [isStatusExpanded, setIsStatusExpanded] = useState(false);
  const [isGenderExpanded, setIsGenderExpanded] = useState(false);
  const [isSpeciesExpanded, setIsSpeciesExpanded] = useState(false);

  const toggleStatusFilter = (filterValue) => onFilter('status', filters.status === filterValue ? '' : filterValue);
  const toggleGenderFilter = (filterValue) => onFilter('gender', filters.gender === filterValue ? '' : filterValue);
  const toggleSpeciesFilter = (filterValue) => onFilter('species', filters.species === filterValue ? '' : filterValue);

  const clearFilters = () => {
    onFilter('status', '');
    onFilter('gender', '');
    onFilter('species', '');
    setIsStatusExpanded(false);
    setIsGenderExpanded(false);
    setIsSpeciesExpanded(false);
  };

  return (
    <div className={styles.container__filter}>
      <h1 className={styles.filter}>Filters</h1>
      <a href='#' className={styles.clear} onClick={clearFilters}>
        Clear Filters
      </a>
      <div className={styles.filterCategory}>
        <button className={styles.accordingItem} onClick={() => setIsStatusExpanded(!isStatusExpanded)}>
          Status {isStatusExpanded ? '▽' : '△'}
        </button>
        {isStatusExpanded ? (
          <div className={`${styles.accordingContent} ${isStatusExpanded ? styles.show : ''}`}>
            <button className={filters.status === 'alive' ? styles.activeFilter : ''}
              onClick={() => toggleStatusFilter('alive')}> Alive </button>
            <button className={filters.status === 'unknown' ? styles.activeFilter : ''}
              onClick={() => toggleStatusFilter('unknown')} > Unknown</button>
            <button className={filters.status === 'dead' ? styles.activeFilter : ''}
              onClick={() => toggleStatusFilter('dead')}> Dead </button>
          </div>
        ) : null}
      </div>


      <div className={styles.filterCategory}>
        <button className={styles.accordingItem} onClick={() => setIsGenderExpanded(!isGenderExpanded)}>
          Gender {isGenderExpanded ? '▽' : '△'}
        </button>
        {isGenderExpanded ? (
          <div className={`${styles.accordingContent} ${isGenderExpanded ? styles.show : ''}`}>
            <button className={filters.gender === 'male' ? styles.activeFilter : ''}
              onClick={() => toggleGenderFilter('male')} >Male</button>
            <button className={filters.gender === 'female' ? styles.activeFilter : ''}
              onClick={() => toggleGenderFilter('female')}>Female</button>
            <button className={filters.gender === 'genderless' ? styles.activeFilter : ''}
              onClick={() => toggleGenderFilter('genderless')}>Genderless</button>
            <button className={filters.gender === 'unknown' ? styles.activeFilter : ''}
              onClick={() => toggleGenderFilter('unknown')}>Unknown</button>
          </div>
        ) : null}
      </div>

      <div className={styles.filterCategory}>
        <button className={styles.accordingItem} onClick={() => setIsSpeciesExpanded(!isSpeciesExpanded)}>
          Species {isSpeciesExpanded ? '▽' : '△'}
        </button>
        {isSpeciesExpanded ? (
          <div className={`${styles.accordingContent} ${isSpeciesExpanded ? styles.show : ''}`}>
            <button className={filters.species === 'human' ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('human')}>Human</button>
            <button className={filters.species === 'alien' ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('alien')}>Alien</button>
            <button className={filters.species === 'mythological' ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('mythological')}>Mythological</button>
            <button className={filters.species === 'unknown' ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('unknown')}>Unknown</button>
            <button className={filters.species === 'animal' ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('animal')}>Animal</button>
            <button className={filters.species === 'disease' ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('disease')}>Disease</button>
            <button className={filters.species === 'robot' ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('robot')}>Robot</button>
            <button className={filters.species === 'croneberg' ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('croneberg')}>Croneberg</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CharacterFilter;