import { api } from 'boot/axios'

const apiKey = "f62f750b70a8ef11dad44670cfb6aa57";

export const GetMovieListApi = async (page: number , ...filter:any) => {
    return await api.get(
        `discover/movie?api_key=${apiKey}&page=${page}${[...filter]}`
    );
};

export const GetGenresApi = async () => { 
    return await api.get(
        `genre/movie/list?api_key=${apiKey}`
    );
}

export const GetMovieApi = async (id: string) => { 
    return await api.get(
        `movie/${id}?api_key=${apiKey}`
    );
}