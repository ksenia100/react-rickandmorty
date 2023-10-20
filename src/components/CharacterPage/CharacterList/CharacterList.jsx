import PropTypes from 'prop-types';
import styles from './CharacterList.module.css';


const CharacterList = ({ character }) => {

  return (
    <ul className={styles.list__container}>
      {character.map(({ id, name, img, status }) => (
        <li className={styles.list__item} key={id}>
          <a href="#">
            <img className={styles.person__photo} src={img} alt={name} />
            <p>{name}</p>
            <div className={styles.list__status_container}>
              <div className={`${styles.status_indicator} ${status === 'Dead' ? styles.dead : status === 'Alive' ? styles.alive : styles.unknown}`} />
              <p>Status: {status}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  character: PropTypes.array
};

export default CharacterList;