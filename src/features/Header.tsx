import cl from './Header.module.scss';
import { Logo } from "../components/simple/Logo.tsx";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.header__inner}>
        <Logo className={cl.header__logo}></Logo>
        <nav className={cl.header__nav}>
          <ul className={cl.header__nav__list}>
            <li className={cl.header__nav__item}>

              <NavLink to='/' className={({ isActive }) =>
                isActive ? clsx(cl.header__active_link, cl.header__nav__link) : cl.header__nav__link
              } >
                Главная
              </NavLink>
            </li>

            <li className={cl.header__nav__item}>

              <NavLink to='/products' className={({ isActive }) =>
                isActive ? clsx(cl.header__active_link, cl.header__nav__link) : cl.header__nav__link
              }>
                Товары
              </NavLink>
            </li>


          </ul>
        </nav>
        <div className={cl.header__hidden}></div>
      </div>
    </header>
  );
};

export { Header };