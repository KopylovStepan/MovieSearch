import { useHistory } from 'react-router-dom';
import { genres } from './../../../state/state.js';
import posterDef from './../../../assets/img/poster200.jpg';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './../MovieSearch.module.scss';

const baseImgUrl = 'https://image.tmdb.org/t/p/w200';

const MovieItem = ({
  vote_average,
  id,
  poster_path,
  title,
  release_date,
  genre_ids,
}) => {
  let averageRating = null;
  let classAvgColor = null;
  const router = useHistory();

  if (vote_average >= 7) {
    classAvgColor = style.movie__averageHigh;
  } else if (vote_average < 7 && vote_average >= 5) {
    classAvgColor = style.movie__averageMedium;
  } else if (vote_average < 5) {
    classAvgColor = style.movie__averageLow;
  }

  if (!vote_average) {
    averageRating = '-';
  } else if (Number.isInteger(vote_average)) {
    averageRating = vote_average + '.0';
  } else {
    averageRating = vote_average;
  }
  return (
    <div className={style.movie} onClick={() => router.push(`/movies/${id}`)}>
      <img
        src={poster_path ? baseImgUrl + poster_path : posterDef}
        alt=''
        className={style.movie__poster}
      />
      <div className={style.movie__container}>
        <div className={style.movie__title}>{title}</div>
        <div className={style.movie__date}>
          {release_date ? `${release_date.substr(0, 4)}, ` : ''}
          {genres[genre_ids[0]]}
        </div>

        <div className={cn(style.movie__averageVal, classAvgColor)}>
          {averageRating}
        </div>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  vote_average: PropTypes.number,
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  genre_ids: PropTypes.array,
};

export default MovieItem;
