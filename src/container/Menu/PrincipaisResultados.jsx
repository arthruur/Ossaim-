import React, { useState } from 'react';

const PrincipaisResultados = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderResultadosContent = () => {
    return (
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRiCA1bQKLMmrjF-CVvfEz3jrCLK2lCOXTfKpLIHIoh0dIh202DC8mdZMbJFoEM0lZivwtlHd-qFwYK/pubhtml?widget=true&amp;headers=false"
    style={{ width: '1400px', height: '600px' }}
    >

    </iframe>
    );
  };

  return (
    <div>
      {renderResultadosContent()}
    </div>
  );
};

export default PrincipaisResultados;
