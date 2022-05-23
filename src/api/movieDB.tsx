import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e75473137a4937e4cb6c409e6a94563e',
    language: 'es-ES',
  },
});

export default movieDB;
