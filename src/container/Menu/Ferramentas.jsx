import React, { useState } from 'react';

const FerramentasOssaim = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderDadosMusicaisContent = () => {
    switch (selectedCenso) {
      case 'iroko':
        return (
          <iframe
            title="Iroko"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      case 'onisewe':
        return (
          <iframe
            title="Onisewe"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <select
        value={selectedCenso}
        onChange={handleCensoChange}
        style={{ width: '1100px', fontSize: '14px', padding: '1rem' }}
      >
        <option value="" disabled>
          Selecione a ferramenta
        </option>
        <option value="iroko">Iroko</option>
        <option value="Onisewe">Onisewe</option>
      </select>
      <div style={{ margin: '5px 0px', padding: '0.5rem', fontSize: '14px' }}>
        {renderDadosMusicaisContent()}
      </div>
    </div>
  );
};

export default FerramentasOssaim;
