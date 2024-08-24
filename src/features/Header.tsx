import cl from './Header.module.scss';
import { Logo } from "../components/simple/Logo.tsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.header__inner}>
        <Logo className={cl.header__logo}></Logo>
        <nav className={cl.header__nav}>
          <ul className={cl.header__nav__list}>
            <li className={cl.header__nav__item}>

              <Link to='/' className={cl.header__nav__link}>
                Главная
              </Link>
            </li>

            <li className={cl.header__nav__item}>

              <Link to='/products' className={cl.header__nav__link}>
                Товары
              </Link>
            </li>


          </ul>
        </nav>
        <div className={cl.header__hidden}></div>
      </div>
    </header>
  );
};

export { Header };