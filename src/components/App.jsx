import {
   Hero,
   Programs,
   Reasons,
   Plans,
   Testimonials,
   Join,
   Footer,
} from 'components/index';

import css from './App.module.css';

export const App = () => {
   return (
      <div className={css.App}>
         <Hero />
         <Programs />
         <Reasons />
         <Plans />
         <Testimonials />
         <Join />
         <Footer />
      </div>
   );
};
