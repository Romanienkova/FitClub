import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import css from './Join.module.css';
import s from '../App.module.css';

export const Join = () => {
   const form = useRef();

   const sendEmail = e => {
      e.preventDefault();

      emailjs
         .sendForm(
            'service_20t0byl',
            'template_amw05se',
            form.current,
            'bPFEZmyaX4n2WXUgp'
         )
         .then(
            result => {
               console.log(result.text);
            },
            error => {
               console.log(error.text);
            }
         );
   };

   return (
      <section className={css.join} id="join-us">
         <div className={css.leftJ}>
            <hr />
            <div>
               <span className={css.strokeText}>READY TO </span>
               <span>LEVEL UP</span>
            </div>
            <div>
               <span>YOUR BODY</span>
               <span className={css.strokeText}>WITH US?</span>
            </div>
         </div>
         <div className={css.rightJ}>
            <form ref={form} className={css.emailContainer} onSubmit={sendEmail}>
               <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email adress here"
               />
               <button type="submit" className={s.btn}>
                  Join now
               </button>
            </form>
         </div>
      </section>
   );
};
