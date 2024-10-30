import React, { useState } from 'react';

const CensosDropdown = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderCensoContent = () => {
    switch (selectedCenso) {
      case 'inep_2014_2020':
        return (
          <div>
          </div>
        );
      case 'censo_ibge_2022_geral':
        return (
          <iframe
            title="Censo IBGE 2022 Geral"
            src="https://censo2022.ibge.gov.br/panorama/"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      case 'censo_ibge_2010_deficiencias':
        return (
          <iframe
          title="Censo IBGE 2010 Deficiências"
          src="https://app.powerbi.com/view?r=eyJrIjoiYTZhZmNjOTMtM2QxYy00MDE3LWE0OTctYTY2ZGY3OWJjODEwIiwidCI6IjY5NmQxOWU0LWZjNzUtNGU4NS05MzdlLWU1M2UwNmFlNWYzYiJ9&pageName=f042beb5da0b98a1697d"
          style={{ width: '100%', height: '600px' }}
        ></iframe>

        );
      case 'geocapes':
        return (
          <iframe
            title="GEOCAPES"
            src="https://geocapes.capes.gov.br/geocapes/"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      case 'sucupira':
        window.open('https://sucupira-v2.capes.gov.br/sucupira4/', '_blank');
        return null;
      case 'avaliacao_capes':
        return (
          <iframe
            title="Avaliação CAPES"
            src="https://app.powerbi.com/view?r=eyJrIjoiNTA4NjljZWEtYmQzNi00OTIyLTk5NGEtN2RhZThjZGI0NmI1IiwidCI6IjJmNGRlYmI4LTY0M2EtNGRiZS05MjdiLTllNTYyZWY3MDBiOSJ9&pageName=ReportSection31d10fca03d1e4f2190f"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      case 'ibge_500_anos':
        return (
          <iframe
            title="IBGE 500 Anos"
            src="https://brasil500anos.ibge.gov.br/"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
        case 'ideb':
        return (
          <iframe
            title="IBGE 500 Anos"
            src="https://download.inep.gov.br/ideb/apresentacao_ideb_2023.pdf"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      default:
        return (
          <div style={{ fontWeight: '700',fontSize: '16px', textAlign: 'center', marginTop: '20px', padding: '0.4rem', color: '#E3A237'}}>
            <p>É importante ressaltar que o IBGE, em 2022, ignorou bastante a questão da Deficiência. Sobre isso iremos encontrar dados em notícias fora do IBGE.</p>
            <p>.</p>
            <p>.</p>
            <p>IMPORTANTE: Ao acessar o INEP, para ver dados sobre Educação Especial, vá em Categorias e Características e coloque Educação Especial</p>
         
          </div>

        );
    }
  };

  return (
    <div>
      <select
        value={selectedCenso}
        onChange={handleCensoChange}
        style={{ width: '1100px', fontSize: '14px', padding:'1rem' }}
      >
        <option value="" enabled>
          Selecione o CENSO
        </option>
        <option value="censo_ibge_2022_geral">Censo do IBGE 2022 (Geral)</option>
        <option value="censo_ibge_2010_deficiencias">Censo do IBGE 2010 (Deficiências)</option>
        <option value="ibge_500_anos">IBGE 500 anos</option>
        <option value="inep_2014_2020">Inep (2014 à 2020)</option>
        <option value="ideb">IDEB 2023</option>
        <option value="geocapes">GEOCAPES</option>
        <option value="sucupira">Plataforma Sucupira</option>
        <option value="avaliacao_capes">Avaliação Quadrienal Capes (2017-2020)</option>
      </select>
      <div style={{ margin: '5px 0px',padding:'0.5rem', fontSize: '14px' }}>{renderCensoContent()}</div>
    </div>
  );
};

export default CensosDropdown;
