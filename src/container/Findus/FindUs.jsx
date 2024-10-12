import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contato"/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Fale conosco</h1>
      <div className='app__wrapper-content flex_center'>
        <p className='p__opensans'> Endereço possível  </p>
        <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Equipe</p>
        <p className='p__opensans'>Natan Ourives - Pesquisador</p>
        <p className='p__opensans'>Arthur Teles - Desenvolvedor</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Conheça </button>

    </div>
  </div>
);

export default FindUs;
