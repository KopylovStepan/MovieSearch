import PropTypes from 'prop-types';
import style from './../MovieIdPage.module.scss';

const MovieInfoTable = ({
	title,
	release_date,
	original_title,
	production_country,
	production_company,
	genres,
	tagline,
	budget,
	runtime,
}) => {
	return (
		<div className={style.movie__containerRight}>
			<h1 className={style.movie__title}>{title}</h1>
			<div className={style.movie__titleOrig}>
				{original_title ? original_title : ''}
			</div>
			<h2>О фильме</h2>
			<div className={style.movie__info}>
				<div className={style.movie__infoTitle}>Год производства</div>
				<div className={style.movie__infoValue}>
					{release_date ? release_date.substr(0, 4) : '-'}
				</div>
			</div>
			<div className={style.movie__info}>
				<div className={style.movie__infoTitle}>Страна</div>
				<div className={style.movie__infoValue}>
					{production_country ? production_country : '-'}
				</div>
			</div>
			<div className={style.movie__info}>
				<div className={style.movie__infoTitle}>Компания</div>
				<div className={style.movie__infoValue}>
					{production_company ? `${production_company}` : '-'}
				</div>
			</div>
			<div className={style.movie__info}>
				<div className={style.movie__infoTitle}>Жанр</div>
				<div className={style.movie__infoValue}>
					{genres
						? genres.length === 1
							? genres[0].name
							: genres.map((genre, i) =>
									i === 0 ? `${genre.name}` : `, ${genre.name}`
							  )
						: '-'}
				</div>
			</div>
			<div className={style.movie__info}>
				<div className={style.movie__infoTitle}>Слоган</div>
				<div className={style.movie__infoValue}>{tagline ? tagline : '-'}</div>
			</div>
			<div className={style.movie__info}>
				<div className={style.movie__infoTitle}>Бюджет</div>
				<div className={style.movie__infoValue}>
					{budget ? `$${budget}` : '-'}
				</div>
			</div>
			<div className={style.movie__info}>
				<div className={style.movie__infoTitle}>Время</div>
				<div className={style.movie__infoValue}>
					{runtime
						? `${runtime} мин./ 0${Math.floor(runtime / 60)}:${
								runtime % 60 < 10 ? '0' + (runtime % 60) : runtime % 60
						  }`
						: '-'}
				</div>
			</div>
		</div>
	);
};

MovieInfoTable.propTypes = {
	title: PropTypes.string,
	release_date: PropTypes.string,
	original_title: PropTypes.string,
	production_country: PropTypes.string,
	production_company: PropTypes.string,
	genres: PropTypes.array,
	tagline: PropTypes.string,
	budget: PropTypes.number,
	runtime: PropTypes.number,
};

export default MovieInfoTable;
