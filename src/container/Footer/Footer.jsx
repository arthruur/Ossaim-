import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants'

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>

      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'> Entre em contato </h1>
        <p className='p__opensans'>Natan Ourives - Pesquisador</p>
        <p className='p__opensans'>nsourives@uefs.br</p>
        <p className='p__opensans'>Arthur Teles - Desenvolvedor </p>
        <p className='p__opensans'>arthurnoyesit@gmail.com</p>
        <p className='p__opensans'></p>

      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo'/>
        <p className='p__opensans'>"Ossaim é o Orixá deficiênte e da cura."</p>
        <p className='p__opensans'>"Ewe ó!"</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: '15px'}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>

      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Ossaim. Todos os direitos reservados.</p>
    </div>
  </div>
);

export default Footer;