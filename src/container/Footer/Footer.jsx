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
        <p className='p__opensans'>Prof. Dr. Natan Ourives (UEFS) - Pesquisador </p>
        <p className='p__opensans'>nsourives@uefs.br</p>
        <p className='p__opensans'>Profa Dra. Diana Santiago da Fonseca (UFBA) - Orientadora
        </p>
        <p className='p__opensans'>disant@ufba.br</p>
        <p className='p__opensans'>Arthur Teles - Desenvolvedor </p>
        <p className='p__opensans'>arthurnoyesit@gmail.com</p>
        <p className='p__opensans'>Prof. Dr. Patrick Lima - Identidade Visual</p>
        <p className='p__opensans'>patamorimlima@gmail.com</p>
        <p className='p__opensans'>Dra. Lucila Plácido - Consultora Jurídica</p>
        <p className='p__opensans'>lucilaplacido@gmail.com </p>




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
