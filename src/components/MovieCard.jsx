import styles from './MoviesCard.module.css'
import { Link } from 'react-router-dom';
import { getMovieImg } from '../utils/getMoviesImg';



export function MovieCard( { movie }){
    const imageUrl = getMovieImg(movie.poster_path, 300);
    //const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : placeholder;
    return (<li className={styles.movieCard}>
            <Link to={'/movies/'+ movie.id}>
            <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt={movie.title} />
            <div>{movie.title}</div>
            </Link>
           </li>);
}
