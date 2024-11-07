import React, { useState } from 'react';

const PrincipaisResultados = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderResultadosContent = () => {
    return (
    <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMzIyNTYwZjctMDI3NC00MzVhLTlkNjAtOWQxZDA0ODNiMmMwIiwidCI6IjY5NmQxOWU0LWZjNzUtNGU4NS05MzdlLWU1M2UwNmFlNWYzYiJ9&pageName=f042beb5da0b98a1697d"
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
