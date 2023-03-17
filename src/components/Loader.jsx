import { FaSpinner } from 'react-icons/fa';
import styles from '../components/Loader.module.css';

export function Loader() {
    return (
        <div className={styles.loader}>
            <FaSpinner className={styles.spinning} size={60} />
        </div>
    )
}