import React, { useEffect, useReducer, useState } from 'react';
import {
  reducer,
  initialState,
  setMoviesAndPageAC,
  setPageCountAC,
  setErrorMessageAC,
  setSearchTextAC,
} from './../../state/state';
import * as axios from 'axios';
import SearchForm from './SearchForm/SearchForm';
import MovieItem from './MovieItem/MovieItem';
import Paginator from './../common/Paginator/Paginator';
import Preloader from './../common/Preloader/Preloader';
import style from './MovieSearch.module.scss';

const MovieSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const { movies, pagesCount, currentPage, searchText, errorMessage } = state;

  const baseURL =
    'https://api.themoviedb.org/3/search/movie?api_key=f6149014459e14f7961ea42d8f65b9c8&language=ru-RU';
  const initURL =
    'https://api.themoviedb.org/3/movie/popular?api_key=f6149014459e14f7961ea42d8f65b9c8&language=ru-RU&page=';

  const fetchData = async () => {
    try {
      const data = await axios.get(`${initURL}${1}`).then((response) => {
        return response.data;
      });

      dispatch(setMoviesAndPageAC(data.results, 1));
      dispatch(setPageCountAC(data.total_pages));
      setIsLoading(false);
    } catch (error) {
      dispatch(setErrorMessageAC(error.response.data.status_message));
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const pageChanged = async (pageNum) => {
    setIsLoading(true);
    if (searchText) {
      try {
        const data = await axios
          .get(
            `${baseURL}&query=${searchText}&page=${pageNum}&include_adult=false`
          )
          .then((response) => {
            return response.data;
          });

        dispatch(setMoviesAndPageAC(data.results, pageNum));
        setIsLoading(false);
      } catch (error) {
        dispatch(setErrorMessageAC(error.response.data.status_message));
      }
    } else {
      try {
        const data = await axios
          .get(`${initURL}${pageNum}`)
          .then((response) => {
            return response.data;
          });

        dispatch(setMoviesAndPageAC(data.results, pageNum));
        setIsLoading(false);
      } catch (error) {
        dispatch(setErrorMessageAC(error.response.data.status_message));
      }
    }
  };
  const search = async (searchText) => {
    setIsLoading(true);
    dispatch(setSearchTextAC(searchText));
    if (searchText) {
      try {
        const data = await axios
          .get(`${baseURL}&query=${searchText}&page=1&include_adult=false`)
          .then((response) => {
            return response.data;
          });

        dispatch(setMoviesAndPageAC(data.results, 1));
        dispatch(setPageCountAC(data.total_pages));
        setIsLoading(false);
      } catch (error) {
        dispatch(setErrorMessageAC(error.response.data.status_message));
      }
    } else {
      try {
        const data = await axios.get(`${initURL}${1}`).then((response) => {
          return response.data;
        });
        dispatch(setMoviesAndPageAC(data.results, 1));
        dispatch(setPageCountAC(data.total_pages));
        setIsLoading(false);
      } catch (error) {
        dispatch(setErrorMessageAC(error.response.data.status_message));
      }
    }
  };

  return (
    <>
      <div>
        <SearchForm search={search} />
        <Paginator
          currentPage={currentPage}
          pagesCount={pagesCount}
          pageChanged={pageChanged}
        />
      </div>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {errorMessage ? (
            <div className={style.errorMessage}>{errorMessage}</div>
          ) : !movies?.length ? (
            <div className={style.noResults}>Результатов не найдено</div>
          ) : (
            <div className={style.movies}>
              {movies.map((movie) => {
                return (
                  <MovieItem
                    key={movie.id}
                    vote_average={movie.vote_average}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    release_date={movie.release_date}
                    genre_ids={movie.genre_ids}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MovieSearch;
