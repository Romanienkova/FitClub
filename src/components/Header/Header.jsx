import { useState } from 'react';
import { Link } from 'react-scroll';

import Logo from 'assets/logo.png';
import Bars from 'assets/bars.png';

import css from './Header.module.css';

export const Header = () => {
   const mobile = window.innerWidth <= 768 ? true : false;
   const [menuOpened, setMenuOpened] = useState(false);

   return (
      <header className={css.header}>
         <a href="#home">
            <img src={Logo} alt="logo" className={css.logo} />
         </a>

         {menuOpened === false && mobile === true ? (
            <div
               style={{
                  backgroundColor: 'var(--appColor)',
                  padding: '1.5rem',
                  borderRadius: '5px',
                  position: 'fixed',
                  right: '2rem',
                  zIndex: '99',
               }}
               onClick={() => setMenuOpened(true)}
            >
               <img
                  src={Bars}
                  alt="menu"
                  style={{ width: '1.5rem', height: '1.5rem' }}
               />
            </div>
         ) : (
            <nav>
               <ul className={css.headerMenu}>
                  <li className={css.headerMenuItem}>
                     <Link
                        onClick={() => setMenuOpened(false)}
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                     >
                        Home
                     </Link>
                  </li>
                  <li className={css.headerMenuItem}>
                     <Link
                        onClick={() => setMenuOpened(false)}
                        to="programs"
                        spy={true}
                        smooth={true}
                     >
                        Programs
                     </Link>
                  </li>
                  <li className={css.headerMenuItem}>
                     <Link
                        onClick={() => setMenuOpened(false)}
                        to="reasons"
                        spy={true}
                        smooth={true}
                     >
                        Why us
                     </Link>
                  </li>
                  <li className={css.headerMenuItem}>
                     <Link
                        onClick={() => setMenuOpened(false)}
                        to="plans"
                        spy={true}
                        smooth={true}
                     >
                        Plans
                     </Link>
                  </li>
                  <li className={css.headerMenuItem}>
                     <Link
                        onClick={() => setMenuOpened(false)}
                        to="testimonials"
                        spy={true}
                        smooth={true}
                     >
                        Testimonials
                     </Link>
                  </li>
               </ul>
            </nav>
         )}
      </header>
   );
};
