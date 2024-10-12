import React, { useState } from 'react';

const Tese = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderResultadosContent = () => {
    return (
    
    <iframe src="https://drive.google.com/file/d/1g7M5uoJnBloPOeTerm7DrdJvR5KdkeN1/preview" 
    style={{ width: '1100px', height: '600px' }}
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

export default Tese;