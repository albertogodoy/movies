import styles from './Search.module.css'
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router';
import { useQuery } from '../hooks/useQuery';

export function Search() {
    // Variables para ejecutar observador
    const query = useQuery();
    const search = query.get('search');

    const history = useHistory();

    // Funcion para el submit
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // Retornamos formulario para realizar busqueda de pelicula
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input type="text"
                className={styles.searchInput}
                value={search}
                placeholder="Buscar pelicula"
                aria-label="Search Movies"
                onChange={(e) => {
                    const value = e.target.value;
                    history.push(`/?search=${value}`);
                    }
                }/>
                <FaSearch size={20} className={styles.searchButton} color="black" />
            </div>
        </form>
    )
}
