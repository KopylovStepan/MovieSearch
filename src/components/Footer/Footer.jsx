import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.footer__list}>
        <li className={style.footer__listItem}>
          <a
            className={style.footer__link}
            href='tel:89969387590'
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            <FontAwesomeIcon
              className={style.footer__linkIcon}
              icon={faMobileAlt}
            />
            <span className={style.footer__linkText}>+7 (996) 938-75-90</span>
          </a>
        </li>
        <li className={style.footer__listItem}>
          <a
            className={style.footer__link}
            href='https://e.mail.ru/compose/'
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            <FontAwesomeIcon
              className={style.footer__linkIcon}
              icon={faEnvelope}
            />
            <span className={style.footer__linkText}>kopylov-s.a@mail.ru</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
