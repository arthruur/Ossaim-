import React from 'react';

const Observatorio = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', color: '#E3A237' }}>
        Observatório de Educação Musical Especial
      </h1>

      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: '#fff'}}>
        O Observatório de Educação Musical Especial tem como objetivo facilitar o acesso a artigos científicos, legislações e diretrizes relacionados à educação musical inclusiva e especial. A proposta de automação visa agilizar e otimizar o processo de busca, proporcionando uma experiência mais eficiente e intuitiva para pesquisadores, educadores e demais interessados na área.
      </p>

      <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#E3A237' }}>Proposta de Automação</h2>

      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: '#fff' }}>
        A automação do processo de consulta consiste em integrar ferramentas de busca avançada que permitam ao usuário:
      </p>

      <ul style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: '#fff' }}>
        <li>
          <strong>Consulta automatizada de artigos científicos</strong>: Sistema que rastreia e organiza artigos acadêmicos sobre educação musical especial, provenientes de bases de dados como Scielo, Google Scholar e periódicos específicos da área de música e educação.
        </li>
        <li>
          <strong>Leis e Diretrizes</strong>: Uma plataforma que centraliza e atualiza automaticamente as legislações e diretrizes brasileiras e internacionais relacionadas à inclusão e educação musical especial, com filtros por país, data e tema.
        </li>
        <li>
          <strong>Notificações Personalizadas</strong>: Sistema de alertas para que os usuários possam se cadastrar e receber atualizações automáticas sempre que novos artigos ou legislações forem adicionados ou modificados.
        </li>
      </ul>

      <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#E3A237' }}>Benefícios da Automação</h2>

      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: '#fff'}}>
        Com a automação desse processo, os usuários poderão:
      </p>

      <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#fff' }}>
        <li>Acessar materiais atualizados em tempo real sem precisar navegar manualmente por diversas plataformas.</li>
        <li>Filtrar as informações de acordo com suas necessidades específicas, como data de publicação, foco geográfico e categorias temáticas.</li>
        <li>Receber recomendações e atualizações diretamente por email ou em uma área reservada do portal.</li>
      </ul>
    </div>
  );
};

export default Observatorio;
