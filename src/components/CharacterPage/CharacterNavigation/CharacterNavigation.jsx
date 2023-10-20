import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CharacterNavigation.module.css';

const CharacterNavigation = ({
    getResource,
    prevPage,
    nextPage,
    currentPage
}) => {
    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);
    
    return (
        <div>
            <Link to={`/character/?page=${currentPage - 1}`} className={styles.link}>
                <button
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                    className={styles.buttons}
                >
                    Previous
                </button>
            </Link>
            <Link to={`/character/?page=${currentPage + 1}`} className={styles.link}>
                <button
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                    className={styles.buttons}
                >
                    Next
                </button>
            </Link>
        </div>
    )
}

CharacterNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    currentPage: PropTypes.number,
}


export default CharacterNavigation;