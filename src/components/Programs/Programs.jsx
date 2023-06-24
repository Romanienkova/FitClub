import { programsData } from 'data/programsData';
import RightArrow from 'assets/rightArrow.png';

import css from './Programs.module.css';

export const Programs = () => {
   return (
      <section className={css.programs} id="programs">
         {/* header */}
         <div className={css.programsHeader}>
            <span className={css.strokeText}>Explore our</span>
            <span>Programs</span>
            <span className={css.strokeText}>to shape you</span>
         </div>

         <div className={css.programsCategories}>
            {programsData.map(program => (
               <div className={css.category}>
                  {program.image}
                  <span>{program.heading}</span>
                  <span>{program.details}</span>
                  <div className={css.joinNow}>
                     <span>Join Now</span>
                     <img src={RightArrow} alt="RightArrow" width={16} height={14}/>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};
