import { plansData } from 'data/plansData';
import whiteTick from 'assets/whiteTick.png';

import css from './Plans.module.css';
import s from '../App.module.css';


export const Plans = () => {
   return (
      <div className={css.plansContainer}>
         <div className={css.plansBlur1}></div>
         <div className={css.plansBlur2}></div>

         <div className={css.programsHeader}>
            <span className={css.strokeText}>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className={css.strokeText}>NOW WITH US</span>
         </div>

         {/* plans card */}
         <div className={css.plans}>
            {plansData.map((plan, i) => (
               <div className={css.plan} key={i}>
                  {plan.icon}
                  <span>{plan.name}</span>
                  <span>$ {plan.price}</span>

                  <div className={css.features}>
                     {plan.features.map((feature, i) => (
                        <div className={css.feature}>
                           <img src={whiteTick} alt="whiteTick" width={16} />
                           <span key={i}>{feature}</span>
                        </div>
                     ))}
                  </div>

                  <div>
                     <span>See more benefits →</span>
                  </div>
                  <button className={s.btn}>Join now</button>
               </div>
            ))}
         </div>
      </div>
   );
};
