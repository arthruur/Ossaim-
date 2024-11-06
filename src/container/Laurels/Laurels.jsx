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
  </div>

);

export default Laurels;
