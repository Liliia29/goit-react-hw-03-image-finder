import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36046838-0b05e687cf37fd856e4032cd7';
const perPage = 12;

export async function getImagesAPI(query, page, signal){
    const response = await axios.get(BASE_URL, {
        signal,
        params: {
            key: API_KEY,
            q: query,
            image_type:'photo',
            orientation: 'horizontal',
            per_page: perPage,
            page: page,
        },
    });

    return response.data;
}