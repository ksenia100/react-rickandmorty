import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CharacterNavigation.module.css';

const CharacterNavigation = ({
    paginate,
    currentPage,
    totalPages
}) => {

    return (
        <div>
            <Link to={`/character/?page=${currentPage - 1}`} className={styles.link}>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className={styles.buttons}
                >
                    Previous
                </button>
            </Link>
            <Link to={`/character/?page=${currentPage + 1}`} className={styles.link}>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className={styles.buttons}
                >
                    Next
                </button>
            </Link>

        </div>
    )
}

CharacterNavigation.propTypes = {
    currentPage: PropTypes.number,
    paginate: PropTypes.func,
}


export default CharacterNavigation;