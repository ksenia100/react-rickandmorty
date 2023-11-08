import styles from './CharacterFilter.module.css';
import { useState } from 'react';

const CharacterFilter = ({ statusFilter, genderFilter, speciesFilter }) => {
  const [isStatusExpanded, setIsStatusExpanded] = useState(false);
  const [isGenderExpanded, setIsGenderExpanded] = useState(false);
  const [isSpeciesExpanded, setIsSpeciesExpanded] = useState(false);

  const statusAliveFilter = () => statusFilter('alive');
  const statusUnknownFilter = () => statusFilter('unknown');
  const statusDeadFilter = () => statusFilter('dead');

  const genderMaleFilter = () => genderFilter('male');
  const genderFemaleFilter = () => genderFilter('female');
  const genderGenderlessFilter = () => genderFilter('genderless');
  const genderUnknownFilter = () => genderFilter('unknown');

  const speciesHumanFilter = () => speciesFilter('human');
  const speciesAlienFilter = () => speciesFilter('alien');
  const speciesMythologicalFilter = () => speciesFilter('mythological');
  const speciesUnknownFilter = () => speciesFilter('unknown');
  const speciesAnimalFilter = () => speciesFilter('animal');
  const speciesDiseaseFilter = () => speciesFilter('disease');
  const speciesRobotFilter = () => speciesFilter('robot');
  const speciesCronenbergFilter = () => speciesFilter('cronenberg');

  const toggleStatusFilter = () => setIsStatusExpanded(!isStatusExpanded);
  const toggleGenderFilter = () => setIsGenderExpanded(!isGenderExpanded);
  const toggleSpeciesFilter = () => setIsSpeciesExpanded(!isSpeciesExpanded);


  return (
    <div className={styles.container__filter}>
      <h1 className={styles.filter}>Filters</h1>
      <a href="#" className={styles.clear}>
        Clear Filters
      </a>
      <div className={styles.filterCategory}>
        <button
          className={styles.accordingItem}
          onClick={toggleStatusFilter}
        >
          Status {isStatusExpanded ? '▽' : '△'}
        </button>
        {isStatusExpanded ? (
          <div className={`${styles.accordingContent} ${isStatusExpanded ? styles.show : ''}`}>
            <button onClick={statusAliveFilter}>Alive</button>
            <button onClick={statusUnknownFilter} >Unknown</button>
            <button onClick={statusDeadFilter}>Dead</button>
          </div>
        ) : null}

      </div>
      <div className={styles.filterCategory}>
        <button
          className={styles.accordingItem}
          onClick={toggleGenderFilter}
        >
          Gender {isGenderExpanded ? '▽' : '△'}
        </button>
        {isGenderExpanded ? (
          <div className={`${styles.accordingContent} ${isGenderExpanded ? styles.show : ''}`}>
            <button onClick={genderMaleFilter}>Male</button>
            <button onClick={genderFemaleFilter}>Female</button>
            <button onClick={genderGenderlessFilter}>Genderless</button>
            <button onClick={genderUnknownFilter}>Unknown</button>
          </div>
        ) : null}

      </div>
      <div className={styles.filterCategory}>
        <button
          className={styles.accordingItem}
          onClick={toggleSpeciesFilter}
        >
          Species {isSpeciesExpanded ? '▽' : '△'}
        </button>
        {isSpeciesExpanded ? (
          <div className={`${styles.accordingContent} ${isSpeciesExpanded ? styles.show : ''}`}>
            <button onClick={speciesHumanFilter}>Human</button>
            <button onClick={speciesAlienFilter}>Alien</button>
            <button onClick={speciesMythologicalFilter}>Mythological</button>
            <button onClick={speciesUnknownFilter}>Unknown</button>
            <button onClick={speciesAnimalFilter}> Animal</button>
            <button onClick={speciesDiseaseFilter}>Disease</button>
            <button onClick={speciesRobotFilter}>Robot</button>
            <button onClick={speciesCronenbergFilter}>Cronenberg</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CharacterFilter;  