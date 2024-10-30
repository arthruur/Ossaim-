import React, { useState } from 'react';

const Legislação = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderResultadosContent = () => {
    return (
    
    <iframe src="https://app.powerbi.com/view?r=eyJrIjoiYWQzNTNmZTAtZDY3OS00YmE4LThiYjEtODNlNjI2YTQ2MmVkIiwidCI6IjY5NmQxOWU0LWZjNzUtNGU4NS05MzdlLWU1M2UwNmFlNWYzYiJ9"
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

export default Legislação;
