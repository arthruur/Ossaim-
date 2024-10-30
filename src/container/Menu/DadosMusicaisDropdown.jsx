import React, { useState } from 'react';

const DadosMusicaisDropdown = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderDadosMusicaisContent = () => {
    switch (selectedCenso) {
      case 'quantitativo':
        return (
          <iframe
            title="Dados Quantitativos"
            src="https://app.powerbi.com/view?r=eyJrIjoiNTAwNjU2YTQtMzg3Yi00YzY0LTgyMDUtMWVkYzZlN2E0NWRmIiwidCI6IjY5NmQxOWU0LWZjNzUtNGU4NS05MzdlLWU1M2UwNmFlNWYzYiJ9&pageName=f042beb5da0b98a1697d"
            style={{ width: '100%', height: '600px' }}
          ></iframe>
        );
      case 'qualitativo':
        return (
          <iframe
            title="Dados Qualitativos"
            src="https://app.powerbi.com/view?r=eyJrIjoiODI5NzM2N2YtNDM4Ny00MGJkLWE4NWQtMDExN2FiYjYxZDYxIiwidCI6IjY5NmQxOWU0LWZjNzUtNGU4NS05MzdlLWU1M2UwNmFlNWYzYiJ9&pageName=91658861cf1e7353cdbc"
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
          Selecione o tipo
        </option>
        <option value="quantitativo">Dados Quantitativos</option>
        <option value="qualitativo">Dados Qualitativos</option>
      </select>
      <div style={{ margin: '5px 0px', padding: '0.5rem', fontSize: '14px' }}>
        {renderDadosMusicaisContent()}
      </div>
    </div>
  );
};

export default DadosMusicaisDropdown;
