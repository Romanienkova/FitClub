import { useState } from 'react';
import { motion } from 'framer-motion';

import { testimonialsData } from 'data/testimonialsData.js';
import leftArrow from 'assets/leftArrow.png';
import rightArrow from 'assets/rightArrow.png';

import css from './Testimonials.module.css';

export const Testimonials = () => {
   const transition = { type: 'spring', duration: 3 };

   const [selected, setSelected] = useState(0);
   const tLength = testimonialsData.length;

   return (
      <section className={css.testimonials} id="testimonials">
         <div className={css.leftT}>
            <span>Testimonials</span>
            <span className={css.strokeText}>What they</span>
            <span>say about us</span>
            <motion.span
               key={selected}
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -100 }}
               transition={transition}
            >
               {testimonialsData[selected].review}
            </motion.span>
            <span>
               <span style={{ color: `#f48915` }}>
                  {testimonialsData[selected].name}
               </span>{' '}
               — {testimonialsData[selected].status}
            </span>
         </div>
         <div className={css.rightT}>
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: -0 }}
               transition={{ ...transition, duration: 2 }}
            ></motion.div>
            <motion.div
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: -0 }}
               transition={{ ...transition, duration: 2 }}
            ></motion.div>
            <motion.img
               key={selected}
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -100 }}
               transition={transition}
               src={testimonialsData[selected].image}
               alt="image"
               width={272}
               height={320}
            />
            <div className={css.arrows}>
               <img
                  onClick={() => {
                     selected === 0
                        ? setSelected(tLength - 1)
                        : setSelected(prev => prev - 1);
                  }}
                  src={leftArrow}
                  alt="left arrow"
                  width={24}
                  height={23}
               />
               <img
                  onClick={() => {
                     selected === tLength - 1
                        ? setSelected(0)
                        : setSelected(prev => prev + 1);
                  }}
                  src={rightArrow}
                  alt="right arrow"
                  width={24}
                  height={23}
               />
            </div>
         </div>
      </section>
   );
};
