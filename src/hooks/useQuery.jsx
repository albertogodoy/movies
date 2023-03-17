import { useLocation } from 'react-router';

// Se crea un funcion que setea las variables de busqueda
export function useQuery(){
    return new URLSearchParams(useLocation().search);
}