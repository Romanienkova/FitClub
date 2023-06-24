import Github from 'assets/github.png';
import Instagram from 'assets/instagram.png';
import LinkedIn from 'assets/linkedin.png';
import Logo from 'assets/logo.png';

import css from './Footer.module.css';

export const Footer = () => {
   return (
      <footer>
         <hr />
         <div className={css.footer}>
            <div className={css.socialLinks}>
               <img src={Github} alt="Github" width={32} height={32} />
               <img src={Instagram} alt="Instagram" width={32} height={32} />
               <img src={LinkedIn} alt="LinkedIn" width={32} height={32} />
            </div>
            <div className={css.logo}>
               <img src={Logo} alt="logo" width={160} height={42} />
            </div>
            <div className={css.blurF1}></div>
            <div className={css.blurF2}></div>
         </div>
      </footer>
   );
};
