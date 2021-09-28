import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={style.header}>
      <ul className={style.header__list}>
        <li className={style.header__listItem}>
          <Link to='/movies' className={style.header__link}>
            Главная
          </Link>
        </li>
        <li className={style.header__listItem}>
          <Link to='/about' className={style.header__link}>
            Описание
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;
