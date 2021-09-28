import fetching from './../../../assets/img/preloader.jpg';
import style from './Preloader.module.scss';

const Preloader = () => {
	return (
		<div className={style.preloader}>
			<img className={style.preloader__img} src={fetching} alt='Preloader' />
		</div>
	);
};
export default Preloader;
