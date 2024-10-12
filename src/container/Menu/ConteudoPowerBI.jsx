import React, { useState } from 'react';

const ConteudoPowerBI = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderCensoContent = () => {
    return (
      <iframe
        title="Relatório Power BI"
        src="https://app.powerbi.com/reportEmbed?reportId=38ecb4c2-aaa0-4fb1-b44d-f980f4c65777&autoAuth=true&ctid=696d19e4-fc75-4e85-937e-e53e06ae5f3b"
        style={{ width: '1400px', height: '600px' }}
      ></iframe>
    );
  };

  return (
    <div>
      {renderCensoContent()}
    </div>
  );
};

export default ConteudoPowerBI;
