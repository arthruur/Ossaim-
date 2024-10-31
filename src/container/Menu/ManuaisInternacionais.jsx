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
      case 'unicef':
        return (
          <div style={{ fontSize: '16px', textAlign: 'center', marginTop: '20px', padding: '0.4rem', color: '#E3A237' }}>
            <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
              Visite o site da UNICEF para acessar informações sobre deficiência:
            </p>
            <a
              href="https://www.unicef.org/disabilities"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '16px', textDecoration: 'underline', color: '#3498DB' }}
            >
              UNICEF
            </a>
          </div>
        );
      case 'washington-group':
        return (
          <div style={{ fontSize: '16px', textAlign: 'center', marginTop: '20px', padding: '0.4rem', color: '#E3A237' }}>
            <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
              Visite o site do Washington Group Disability para mais informações:
            </p>
            <a
              href="https://www.washingtongroup-disability.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '16px', textDecoration: 'underline', color: '#3498DB' }}
            >
              Washington Group Disability
            </a>
          </div>
        );
      case 'united-nations':
        return (
          <iframe
            title="United Nations Statistical Commission"
            src="https://unstats.un.org/UNSDWebsite/statcom/"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
        case 'unesco':
          case 'unesco':
            return (
              <div style={{ fontSize: '16px', textAlign: 'center', marginTop: '20px', padding: '0.4rem', color: '#E3A237' }}>
                <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
                  Visite o site da UNESCO para mais informações:
                </p>
                <a
                  href="https://unesdoc.unesco.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '16px', textDecoration: 'underline', color: '#3498DB' }}
                >
                  UNESCO
                </a>
              </div>
            );      default:
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
        <option value="unicef">UNICEF</option>
        <option value="unesco">UNESCO</option>
        <option value="washington-group">Washington Group Disability</option>
        <option value="united-nations">United Nations Statistical Commission</option>
      </select>
      <div style={{ margin: '5px 0px', padding: '0.5rem', fontSize: '14px' }}>{renderManualContent()}</div>
    </div>
  );
};

export default ManuaisInternacionais;
