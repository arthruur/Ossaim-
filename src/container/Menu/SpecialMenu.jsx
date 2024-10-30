import React, { useState } from 'react';
import './SpecialMenu.css'; // Estilos para o menu especial
import { SubHeading } from '../../components'; // Certifique-se de que o caminho está correto
import CensosDropdown from './CensosDropdown'; // Verifique se este é o caminho correto
import ConteudoPowerBI from './ConteudoPowerBI';
import LinhaDoTempo from './LinhaDoTempo'; 
import PrincipaisResultados from './PrincipaisResultados';
import Legislações from './Legislações';
import Tese from './Tese';
import Pesquisa from './Pesquisa';
import Cartografias from './Cartografias';
import ManuaisInternacionais from './ManuaisInternacionais'; 
import Organizações from './Organizações';
import Nacionais from './Nacionais';
import DadosMusicaisDropdown from './DadosMusicaisDropdown';

const SpecialMenu = () => {
  const [activeTab, setActiveTab] = useState('dados-publicos');

  const renderContent = () => {
    switch (activeTab) {
      case 'di':
        return (
          <iframe
            src="https://drive.google.com/file/d/107gkP0Q2zchO1P_z2uImwOCA4kDRiz17/preview"
            style={{ width: '1100px', height: '600px', border: 'none' }}
            title="Deficiência Intelectual PDF Preview"
          ></iframe>
        );
      case 'dados-publicos':
        return <CensosDropdown />;
      case 'dados-estatisticos':
        return <DadosMusicaisDropdown />;
      case 'externo':
        return <div><Organizações /></div>;
      case 'abpemei':
        return <div>Conteúdos presentes nessa aba: Associação Brasileira de Pesquisa em Educação Musical Especial e Inclusiva, I Congresso Nacional da ABPEMEI, Anais do I Congresso Nacional da ABPEMEI, Revista Ossaim, ANNPOM, ABEM, ABCM </div>;
      case 'estado-da-arte-educacao':
        return <div>Conteúdo Estado da Arte em Educação Musical</div>;
      case 'estado-da-arte':
        return <div>Conteúdo Estado da Arte</div>;
      case 'cartografias':
        return <div> <Cartografias /></div>;
      case 'nacional':
        return <div> <Nacionais /> </div>;
      case 'internacional':
        return <div> <ManuaisInternacionais /> </div>;
      case 'direitos-humanos':
        return <div> <Legislações />.</div>;
      case 'principais-resultados':
        return <PrincipaisResultados />;
      case 'tese':
        return <div><Tese /> </div>;
      case 'bibliografia':
        return <div>Ao fim da pesquisa aqui ficaram as referências bibliográficas.</div>;
      case 'linha-do-tempo':
        return (
          <div>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', color: '#f8ebcd' }}>
              Futuramente existirão outras linhas do tempo, volte em breve!
            </h1>
            <LinhaDoTempo />
          </div>
        );
      default:
        return <div>Selecione uma aba para ver o conteúdo.</div>;
    }
  };

  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <h1 className='headtext__cormorant' style={{ textTransform: 'none' }}>
          Estado Colaborativo da Arte da Pesquisa em EMPDIC.
        </h1>
      </div>
      
      {/* Navbar para navegação entre as guias */}
      <ul className='app__navbar-links'>
        <li onClick={() => setActiveTab('di')} className={activeTab === 'di' ? 'active' : ''}> o que é a DI? </li>
        <li onClick={() => setActiveTab('dados-publicos')} className={activeTab === 'dados-publicos' ? 'active' : ''}> Dados Públicos</li>
        <li onClick={() => setActiveTab('dados-estatisticos')} className={activeTab === 'dados-estatisticos' ? 'active' : ''}> Dados Musicais</li>
        <li onClick={() => setActiveTab('linha-do-tempo')} className={activeTab === 'linha-do-tempo' ? 'active' : ''}>Linha do Tempo</li>
        <li onClick={() => setActiveTab('principais-resultados')} className={activeTab === 'principais-resultados' ? 'active' : ''}>Principais Resultados</li>
        <li onClick={() => setActiveTab('externo')} className={activeTab === 'externo' ? 'active' : ''}> Organizações Nacionais</li>
        <li onClick={() => setActiveTab('cartografias')} className={activeTab === 'cartografias' ? 'active' : ''}>Cartografias</li>
        <li onClick={() => setActiveTab('direitos-humanos')} className={activeTab === 'direitos-humanos' ? 'active' : ''}>Legislação e Políticas</li>
        <li onClick={() => setActiveTab('nacional')} className={activeTab === 'nacional' ? 'active' : ''}>Manuais Nacionais</li>
        <li onClick={() => setActiveTab('internacional')} className={activeTab === 'internacional' ? 'active' : ''}>Manuais Internacionais</li>
        <li onClick={() => setActiveTab('tese')} className={activeTab === 'tese' ? 'active' : ''}>Tese</li>
        <li onClick={() => setActiveTab('abpemei')} className={activeTab === 'abpemei' ? 'active' : ''}>ABPEMEI</li>
      </ul>
      
      <div className='app__specialMenu-content'>
        {renderContent()}
      </div>
    </div>
  );
};

export default SpecialMenu;
