import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import PropTypes from 'prop-types';
import style from './StarRating.module.scss';

const StarRating = ({ voteCount, voteAverage }) => {
  let classAvgColor = null;

  if (voteAverage >= 7) {
    classAvgColor = style.rating__averageHigh;
  } else if (voteAverage < 7 && voteAverage >= 5) {
    classAvgColor = style.rating__averageMedium;
  } else if (voteAverage < 5 || voteAverage === '-') {
    classAvgColor = style.rating__averageLow;
  }

  return (
    <div className={style.rating}>
      <div className={style.rating__stars}>
        {[...Array(10)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <div key={ratingValue} className={style.rating__star}>
              <FontAwesomeIcon
                className={style.rating__starIcon}
                icon={faStar}
                color={ratingValue < voteAverage ? '#ffc107' : '#bbb8b8'}
              />
              <div
                className={style.rating__starValue}
                style={{
                  color: ratingValue < voteAverage ? '#ffffff' : '#bbb8b8',
                }}
              >
                {ratingValue}
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.rating__vote}>
        <span className={cn(style.rating__voteAverage, classAvgColor)}>
          {Number.isInteger(voteAverage) ? voteAverage + '.0' : voteAverage}
        </span>
        <span className={style.rating__voteCount}>{voteCount}</span>
      </div>
    </div>
  );
};

StarRating.propTypes = {
  voteCount: PropTypes.number,
  voteAverage: PropTypes.number,
};

export default StarRating;
