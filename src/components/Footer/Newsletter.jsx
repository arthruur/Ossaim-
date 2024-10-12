import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Newsletter'/>
      <h1 className='headtext__cormorant'>Se inscreva no Ossaim </h1>
      <p className='p__opensans'> E nunca perca atualizações sobre! </p>
    </div>
    <div className='app__newsletter-input flex__center'><input type="email" placeholder='Coloque seu endereço de e-mail'/>
    <button className='custom__button'>Increver-se</button></div>
  </div>
);

export default Newsletter;
