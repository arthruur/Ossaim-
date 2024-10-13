import React from 'react';
import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      <h1 className='app__header-h1'>Inclusão na Educação Musical</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}> O Objetivo geral do projeto é ser uma plataforma digital que centralize o estado da arte da educação musical especial inclusiva, facilitando o acesso a pesquisas, práticas pedagógicas e recursos para educadores e familiares.
      </p>
      <button type='button' className='custom__button'>Saiba Mais</button>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
