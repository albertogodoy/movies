import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { getMovieImg } from '../utils/getMoviesImg';
import { get } from '../utils/httpClient';
import styles from './MoviesDetails.module.css';

export function MovieDetails(){
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Inicializamos efecto de carga
        setIsLoading(true);
        get(`/movie/${movieId}`).then((data) => {
            // Finalizamos efecto de carga una vez recibido los datos
            setIsLoading(false);
            setMovie(data);
        });
    },[movieId]);

    if(isLoading){
        return <Loader />
    }
    
    const imageUrl = getMovieImg(movie.poster_path, 500);
    //const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (<div className={styles.detailsContainer} >
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}> <strong>Title: </strong> {movie.title}</p>
            <p> <strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(", ")} </p>
            <p> <strong>Description:</strong>  {movie.overview}</p>
        </div>
    </div>);
}