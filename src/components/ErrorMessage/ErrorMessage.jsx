import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                 Ми не можемо відтворити дані.<br />
                 Повертайтесь, коли ми виправимо помилки
            </p>
        </>
    )
}

export default ErrorMessage;