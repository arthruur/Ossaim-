import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from "react-icons/md";
import './Navbar.css';
import images from '../../constants/images';

// A Navbar agora recebe uma propriedade 'openPdfViewer'
const Navbar = ({ openPdfViewer }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app logo'/>
      </div>

      <ul className='app-navbarLinks'>
        {/* Este link agora é um botão que chama a função para abrir o PDF */}
        <li className='p__quicksand'>
          <a href="#plataforma" onClick={(e) => { e.preventDefault(); openPdfViewer(); }}>
            Como usar a plataforma?
          </a>
        </li>
      </ul>

      <div className='app__navbar-login'>
        <a href='/' className='p__quicksand'> Contribua conosco</a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color= '#fffbeb' fontSize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__quicksand'><a href='#home' onClick={() => setToggleMenu(false)}>Início</a></li>
              <li className='p__quicksand'><a href='#about' onClick={() => setToggleMenu(false)}>Sobre</a></li>
              {/* Adicionando o link para o PDF no menu mobile também */}
              <li className='p__quicksand'>
                <a href="#plataforma" onClick={(e) => { e.preventDefault(); openPdfViewer(); setToggleMenu(false); }}>
                  Como usar a plataforma?
                </a>
              </li>
              <li className='p__quicksand'><a href='#awards' onClick={() => setToggleMenu(false)}>Possibilidades Futuras</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
