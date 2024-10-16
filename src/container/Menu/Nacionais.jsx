import React, { useState } from 'react';

const ConteudoPowerBI = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderCensoContent = () => {
    return (
    <div>
        <h1 style={{textAlign: 'center', marginBottom:'20px'}} className='p__opensans'>Protocolos e Diretrizes da Deficiência Intelectual no Brasil</h1>
      <iframe
        title="Relatório Power BI"
        src="https://drive.google.com/file/d/1y3CXKnKU-WOwKwrJoD5bsGKdMdQzUAnz/preview"
        style={{ width: '1300px', height: '800px' }}
      ></iframe>
    </div> 
    );
  };

  return (
    <div>
      {renderCensoContent()}
    </div>
  );
};

export default ConteudoPowerBI;
