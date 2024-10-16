import React from 'react';
import { GiHamburgerMenu  } from 'react-icons/gi';
import './Navbar.css';
import { MdClose } from "react-icons/md";
import images from '../../constants/images'; 
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt='app logo'/>
    </div>

    <ul className='app-navbarLinks'> 
      <li className='p__quicksand'><a href='#home'>Início</a></li>
      <li className='p__quicksand'><a href='#about'>Sobre</a></li>
      <li className='p__quicksand'><a href='#menu'>Estatísticas</a></li>
      <li className='p__quicksand'><a href='#awards'>Possibilidades Futuras</a></li>
    </ul>
  
   <div className='app__navbar-login'>
      <a href='#login' className='p__quicksand'>Login / Registre-se</a>
      <div />
      <a href='/' className='p__quicksand'> Inclua-se</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color= 'fffbeb' fontSize={27} onClick={() => setToggleMenu(true)}/>
    {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'> 
      <MdClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
    <ul className='app__navbar-smallscreen_links'>
    <li className='p__quicksand'><a href='#home'>Início</a></li>
      <li className='p__quicksand'><a href='#about'>Sobre</a></li>
      <li className='p__quicksand'><a href='#awards'>Possibilidades Futuras</a></li>
    </ul>
    </div>)}
    </div>
  </nav>
)};

export default Navbar;
