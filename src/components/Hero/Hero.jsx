import { Header } from 'components/Header/Header';
import hero_image from 'assets/hero_image.png';
import hero_image_back from 'assets/hero_image_back.png';
import Heart from 'assets/heart.png';
import Calories from 'assets/calories.png';

import { motion } from 'framer-motion';

import s from '../App.module.css';
import css from './Hero.module.css';

export const Hero = () => {
   const transition = { type: 'spring', duration: 3 };
   return (
      <section className={css.hero}>
         <div className={css.heroBlur}></div>
         <div className={css.leftH}>
            <Header />

            {/* The best ad */}
            <div className={css.bestAd}>
               <motion.div
                  className={css.bestAdEl}
                  initial={{ left: '238px' }}
                  whileInView={{ left: '8px' }}
                  transition={{ ...transition, type: 'tween' }}
               ></motion.div>
               <span className={css.bestAdText}>
                  The best fitness club in the town
               </span>
            </div>

            {/* Hero heading */}
            <div className={css.heroText}>
               <p>
                  <span className={css.strokeText}>Shape </span>
                  Your
               </p>
               <p>Ideal body</p>
               <p className={css.heroTextLast}>
                  In here we will help you to shape and build your ideal body
                  and live up your life to fullest
               </p>
            </div>

            {/* Figures */}
            <div className={css.figures}>
               <div>
                  <span>+ 140</span>
                  <span>Expert coaches</span>
               </div>
               <div>
                  <span>+ 978</span>
                  <span>Members joined</span>
               </div>
               <div>
                  <span>+ 50</span>
                  <span>Fitness programs</span>
               </div>
            </div>

            {/* hero buttons */}
            <div className={css.heroButtons}>
               <button className={s.btn}>Get Started</button>
               <button className={s.btn}>Learn More</button>
            </div>
         </div>
         <div className={css.rightH}>
            <button className={s.btn} type="button">
               Join Now
            </button>

            <motion.div
               initial={{ right: '-1rem' }}
               whileInView={{ right: '4rem' }}
               transition={transition}
               className={css.heartRate}
            >
               <img
                  className={css.heartRateImg}
                  src={Heart}
                  alt="heart"
                  width={32}
                  height={30}
               />
               <span>Heart Rate</span>
               <span>116 bpm</span>
            </motion.div>

            {/* hero images */}
            <img
               className={css.heroImage}
               src={hero_image}
               alt="hero_image"
               width={368}
               height={523}
            />
            <motion.img
               initial={{ right: '11rem' }}
               whileInView={{ right: '20rem' }}
               transition={transition}
               className={css.heroImageBack}
               src={hero_image_back}
               alt="hero_image_back"
               width={240}
               height={417}
            />

            {/* calories */}
            <motion.div
               initial={{ right: '37rem' }}
               whileInView={{ right: '28rem' }}
               transition={transition}
               className={css.calories}
            >
               <img src={Calories} alt="Calories" width={48} height={96} />
               <div>
                  <span>Calories Burned</span>
                  <span>220 kcal</span>
               </div>
            </motion.div>
         </div>
      </section>
   );
};
