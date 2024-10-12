import React, { useState } from 'react';

const Pesquisa = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderResultadosContent = () => {
    return (
    
    <iframe src="https://drive.google.com/file/d/1KbqyZDITLvsbdV62Z9lZMmcjfJaBnYdH/preview"
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

export default Pesquisa;
