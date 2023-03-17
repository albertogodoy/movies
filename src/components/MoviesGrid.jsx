import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import { Loader } from '../components/Loader';
import styles from './MoviesGrid.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';


export function MoviesGrid({search}){
    // Recordar que el KEY es un atributo especial para un mejor performance
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    // Se procede a realizar el llamado a la API desde un efecto secundario ya que es la manera mas optimizada de hacerlo.
    useEffect(() => {
        setIsLoading(true);
        // Realizamos la busqueda de la pelicula que se desee
        const searchUrl = search ? `/search/movie?query=${search}&page=${page}` : `/discover/movie?page=${page}`;
        get(searchUrl).then((data) => {
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
        });
    }, [search, page]);

    if(!isLoading && movies.length === 0){
        return <Empty/>
    }


    return (
        <InfiniteScroll dataLength={movies.length} hasMore={hasMore} next={() => setPage(prevPage => prevPage + 1)} loader={<Loader />}>
            <ul className={styles.moviesGrid}>
                { movies.map ( (movie) => ( 
                <MovieCard key={movie.id} movie={movie}/>
                ))}
            </ul>
        </InfiniteScroll>
    );
}