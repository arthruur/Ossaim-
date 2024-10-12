import React, { useState } from 'react';

const ManuaisInternacionais = () => {
  const [selectedManual, setSelectedManual] = useState('');

  const handleManualChange = (event) => {
    setSelectedManual(event.target.value);
  };

  const renderManualContent = () => {
    switch (selectedManual) {
      case 'aaidd':
        return (
          <iframe
            title="AAIDD"
            src="https://www.aaidd.org/home"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      case 'dsm':
        return (
          <iframe
            title="DSM"
            src="https://www.psychiatry.org/psychiatrists/practice/dsm"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      case 'cid11':
        return (
          <iframe
            title="CID 11"
            src="https://icd.who.int/browse/2024-01/mms/en"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      case 'cif':
        return (
          <iframe
            title="CIF"
            src="https://icd.who.int/browse/2024-01/icf/en"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
        case 'oms':
            return (
              <div style={{ fontSize: '16px', textAlign: 'center', marginTop: '20px', padding: '0.4rem', color: '#E3A237' }}>
                <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
                  O site da OMS não permite incorporação direta de conteúdo.
                </p>
                <p style={{ fontSize: '14px', marginBottom: '12px' }}>
                  Para acessar as classificações e padrões da OMS, clique no link abaixo:
                </p>
                <a
                  href="https://www.who.int/standards/classifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '16px', textDecoration: 'underline', color: '#3498DB' }}
                >
                  Visitar o site da OMS
                </a>
              </div>
            );
          case 'apa_dictionary':
        return (
          <iframe
            title="APA Dictionary of Psychology"
            src="https://dictionary.apa.org/"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      default:
        return (
          <div style={{ fontWeight: '700', fontSize: '16px', textAlign: 'center', marginTop: '20px', padding: '0.4rem', color: '#E3A237' }}>
            <p>Selecione um dos manuais internacionais para visualizar os detalhes.</p>
          </div>
        );
    }
  };

  return (
    <div>
      <select
        value={selectedManual}
        onChange={handleManualChange}
        style={{ width: '1100px', fontSize: '14px', padding: '1rem' }}
      >
        <option value="" enabled>
          Selecione o Manual Internacional
        </option>
        <option value="aaidd">AAIDD</option>
        <option value="dsm">DSM</option>
        <option value="cid11">CID 11</option>
        <option value="cif">CIF</option>
        <option value="oms">OMS</option>
        <option value="apa_dictionary">APA Dictionary of Psychology</option>
      </select>
      <div style={{ margin: '5px 0px', padding: '0.5rem', fontSize: '14px' }}>{renderManualContent()}</div>
    </div>
  );
};

export default ManuaisInternacionais;
