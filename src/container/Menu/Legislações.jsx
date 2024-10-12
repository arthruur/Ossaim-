import React, { useState } from 'react';

const Legislação = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderResultadosContent = () => {
    return (
    
    <iframe src="https://drive.google.com/file/d/1WB-dIWFs8iWIJpfaMnkAWdzjsT8S2JLg/preview"
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

export default Legislação;
