import logo from './../../assets/img/logo.svg';
import style from './About.module.scss';

const About = () => {
	return (
		<div className={style.about}>
			<div className={style.about__text}>
				Данное приложение было созданно на основе API: The Movie Database API
			</div>
			<a
				href='https://www.themoviedb.org/?language=ru'
				target='_blank'
				rel='nofollow noopener noreferrer'
			>
				<img className={style.about__img} src={logo} alt='Логотип' />
			</a>
		</div>
	);
};

export default About;
