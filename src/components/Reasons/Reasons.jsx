import image1 from 'assets/image1.png';
import image2 from 'assets/image2.png';
import image3 from 'assets/image3.png';
import image4 from 'assets/image4.png';
import nb from 'assets/nb.png';
import adidas from 'assets/adidas.png';
import nike from 'assets/nike.png';
import tick from 'assets/tick.png';

import css from './Reasons.module.css';

export const Reasons = () => {
   return (
      <div className={css.reasons} id="reasons">
         <div className={css.leftR}>
            <img src={image1} alt="image1" width={142} height={448} />
            <img src={image2} alt="image2" width={401} height={256} />
            <img src={image3} alt="image3" width={224} height={180} />
            <img src={image4} alt="image4" width={160} height={179} />
         </div>
         <div className={css.rightR}>
            <span>some reasons</span>
            <div>
               <span className={css.strokeText}>Why </span>
               <span>choose us?</span>
            </div>

            <div className={css.detailsR}>
               <div>
                  <img src={tick} alt="tick" width={32} height={32} />
                  <span>OVER 140+ EXPERT COACHS</span>
               </div>
               <div>
                  <img src={tick} alt="tick" width={32} height={32} />
                  <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
               </div>
               <div>
                  <img src={tick} alt="tick" width={32} height={32} />
                  <span>1 FREE PROGRAM FOR NEW MEMBER</span>
               </div>
               <div>
                  <img src={tick} alt="tick" width={32} height={32} />
                  <span>RELIABLE PARTNERS</span>
               </div>
               <span>OUR PARTNERS</span>

               <div className={css.partners}>
                  <img
                     className={css.partnersImg}
                     src={nb}
                     alt="nb"
                     width={40}
                     height={28}
                  />
                  <img
                     className={css.partnersImg}
                     src={adidas}
                     alt="adidas"
                     width={40}
                     height={28}
                  />
                  <img
                     className={css.partnersImg}
                     src={nike}
                     alt="nike"
                     width={40}
                     height={28}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};
