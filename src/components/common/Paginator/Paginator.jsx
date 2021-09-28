import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import PropTypes from 'prop-types';
import style from './Paginator.module.scss';

const Paginator = ({ pageChanged, currentPage, pagesCount }) => {
  let pages = [];
  let portionSize = 10;
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize); // number of portions of displayed pages

  let [currentPortion, setСurrentPortion] = useState(1);
  let firstPagePortion = (currentPortion - 1) * portionSize + 1;
  let lastPagePortion = currentPortion * portionSize;

  useEffect(() => {
    setСurrentPortion(Math.ceil(currentPage / 10));
  }, [currentPage]);

  return (
    <div className={style.paginator}>
      <div className={style.paginator__container}>
        {currentPortion > 1 && (
          <a
            href='#/'
            onClick={() => {
              pageChanged(1);
            }}
            className={style.paginator__item}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </a>
        )}
      </div>
      <div className={style.paginator__container}>
        {currentPortion > 1 && (
          <a
            href='#/'
            onClick={() => {
              pageChanged((currentPortion - 2) * portionSize + 1); //change to first page of previous part
            }}
            className={style.paginator__item}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        )}
      </div>

      {pages
        .filter((pageNum) => {
          return pageNum >= firstPagePortion && pageNum <= lastPagePortion;
        })
        .map((pageNum) => {
          return (
            <a
              href='#/'
              key={pageNum}
              onClick={() => {
                pageChanged(pageNum);
              }}
              className={cn(style.paginator__item, {
                [style.selectedPage]: currentPage === pageNum,
              })}
            >
              {pageNum}
            </a>
          );
        })}

      <div className={style.paginator__container}>
        {currentPortion < portionCount && (
          <a
            href='#/'
            onClick={() => {
              pageChanged(currentPortion * portionSize + 1); //change to first page of next part
            }}
            className={style.paginator__item}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        )}
      </div>
      <div className={style.paginator__container}>
        {currentPortion < portionCount && (
          <a
            href='#/'
            onClick={() => {
              pageChanged((portionCount - 1) * portionSize + 1); //change to first page of last part
            }}
            className={style.paginator__item}
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </a>
        )}
      </div>
    </div>
  );
};

Paginator.propTypes = {
  onPageChanged: PropTypes.func,
  currentPage: PropTypes.number,
  pagesCount: PropTypes.number,
};

export default Paginator;
