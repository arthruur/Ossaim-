import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
<div className='app__aboutus app__bg flex__center section__padding' id="about">

  <div className='app__aboutus-content flex__center'>

    <div className='app__aboutus-content_about'>
      <h1 className='headtext__cormorant'>Motivação</h1>
      <p className='p__opensans'>A literatura sobre práticas inclusivas na educação musical especial ainda é dispersa, o que dificulta o acesso a informações relevantes para educadores, pesquisadores e familiares. O projeto OSSAIM visa preencher essa lacuna ao criar um site que funcione como um repositório centralizado, focado no estado da arte da educação musical especial inclusiva.</p>
      <button type="button" className='custom__button'>Saiba Mais</button>
    </div>
  </div> 

  <div className='app__aboutus-content_knife flex__center'>
    <img src={images.knife} alt='about_knife'/>
  </div>

  <div className='app__aboutus-content flex__center'>
    <div className='app__aboutus-content_history'>
      <h1 className='headtext__cormorant'>Justificativa</h1>
      <p className='p__opensans'>Este projeto promove a inclusão na educação musical, oferecendo uma ferramenta essencial para educadores e pesquisadores. O site OSSAIM será um recurso valioso para a disseminação de conhecimentos e práticas, contribuindo para uma educação musical mais inclusiva e acessível para pessoas com deficiência.
      </p>
      <button type="button" className='custom__button'>Saiba Mais</button>
    </div>
  </div> 

  </div>

);

export default AboutUs;
