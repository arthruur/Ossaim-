import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';
import Pesquisa from '../Menu/Pesquisa';
import Observatorio from '../Menu/Observatório';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt='award' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className='app__bg section__padding' id="awards" >
    <div className='app__wrapper_info'>
      <SubHeading title='Possibilidades futuras' />
      <h1 className='headtext__cormorant'>O que nós planejamos?</h1>

      <div className='app__laurels_awards'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>

      <div style={{ width: '100%', textAlign: 'center' }}>
        <h1 className='p__cormorant' style={{ marginTop: '90px', marginBottom: '20px', color: '#E3A237' }}>
          Projeto de Pesquisa da UEFS
        </h1>
        <div style={{ display: 'inline-block' }}>
          <Pesquisa />
      </div>
      <div style={{ textAlign: 'left', marginTop: '90px' }}>
         <Observatorio />
      </div>

</div>


    </div>
  </div>
);

export default Laurels;
