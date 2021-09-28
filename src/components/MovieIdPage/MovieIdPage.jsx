import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as axios from 'axios';
import MovieInfoTable from './MovieInfoTable/MovieInfoTable';
import StarRating from './../common/StarRating/StarRating';
import Preloader from './../common/Preloader/Preloader';
import posterDef from './../../assets/img/poster360.jpg';
import style from './MovieIdPage.module.scss';

const baseImgUrl = 'https://image.tmdb.org/t/p/w342';
const baseMovieURL = 'https://api.themoviedb.org/3/movie/';
const apiKeyURL =
  '?api_key=f6149014459e14f7961ea42d8f65b9c8&language=ru-RU&append_to_response=images,videos';

const MovieIdPage = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({
    release_date: null,
    genres: [],
    tagline: null,
    budget: null,
    runtime: null,
    overview: null,
    poster_path: null,
    production_country: null,
    production_company: null,
    title: null,
    vote_average: null,
    vote_count: null,
    video_key: null,
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await axios
          .get(`${baseMovieURL}${params.id}${apiKeyURL}`)
          .then((response) => {
            return response.data;
          });

        setMovie((prevData) => {
          return {
            ...prevData,
            release_date: data.release_date,
            genres: data.genres,
            tagline: data.tagline,
            budget: data.budget,
            runtime: data.runtime,
            overview: data.overview,
            poster_path: data.poster_path,
            production_country: data?.production_countries[0]?.name,
            production_company: data?.production_companies[0]?.name,
            title: data.title,
            vote_average: data.vote_average,
            vote_count: data.vote_count,
            video_key: data?.videos?.results[0]?.key,
            original_title: data.original_title,
          };
        });
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.response.data.status_message);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {errorMessage ? (
            <div className={style.errorMessage}>{errorMessage}</div>
          ) : (
            <div className={style.movie}>
              <div className={style.movie__containerLeft}>
                {
                  <img
                    src={
                      movie.poster_path
                        ? baseImgUrl + movie.poster_path
                        : posterDef
                    }
                    alt=''
                    className={style.movie__poster}
                  />
                }
              </div>
              <MovieInfoTable
                title={movie.title}
                release_date={movie.release_date}
                original_title={movie.original_title}
                production_country={movie.production_country}
                production_company={movie.production_company}
                genres={movie.genres}
                tagline={movie.tagline}
                budget={movie.budget}
                runtime={movie.runtime}
              />
              <div className={style.movie__overview}>
                <h3 className={style.movie__overviewItem}>Трейлер</h3>
                <iframe
                  className={style.movie__trailer}
                  width='1080'
                  height=' 607.5'
                  src={`https://www.youtube.com/embed/${movie.video_key}`}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
                {movie.overview ? (
                  <>
                    <h3 className={style.movie__overviewItem}>Описание</h3>
                    {movie.overview}
                  </>
                ) : (
                  ''
                )}

                <h3 className={style.movie__overviewItem}>Рейтинг</h3>
                <StarRating
                  voteAverage={movie.vote_average}
                  voteCount={movie.vote_count}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default MovieIdPage;
