import React from 'react';
import { images } from '../../constants';
import './Header.css';

 
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      <h1 className='app__header-h1'>
        <span className="first-letter-highlight">O</span>bservatório <br/>
        <span className="first-letter-highlight">S</span>istemático de <br/>
        <span className="first-letter-highlight">S</span>aberes em <br/>
        <span className="first-letter-highlight">A</span>cometimentos <br/>
        <span className='app__header-h2'>
          <span className="first-letter-highlight">I</span>ntelectuais e Inclusão
        </span> <br/>
        <span className="first-letter-highlight">M</span>usical
      </h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>
        O Objetivo geral do projeto é ser uma plataforma digital que centralize o estado da arte da educação musical especial inclusiva, facilitando o acesso a pesquisas, práticas pedagógicas e recursos para educadores e familiares.
      </p>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;