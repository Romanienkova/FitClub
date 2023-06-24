import Logo from 'assets/logo.png';

import css from './Header.module.css';

export const Header = () => {
   return (
      <header className={css.header}>
         <a href="#home">
            <img src={Logo} alt="logo" className={css.logo} />
         </a>
         <nav>
         	<ul className={css.headerMenu}>
	            <li className={css.headerMenuItem}>
	               <a href="#home">Home</a>
	            </li>
	            <li className={css.headerMenuItem}>
	               <a href="#programs">Programs</a>
	            </li>
	            <li className={css.headerMenuItem}>
	               <a href="#whyUs">Why us</a>
	            </li>
	            <li className={css.headerMenuItem}>
	               <a href="#plans">Plans</a>
	            </li>
	            <li className={css.headerMenuItem}>
	               <a href="#testimonials">Testimonials</a>
	            </li>
	         </ul>
         </nav>
      </header>
   );
};
