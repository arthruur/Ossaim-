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
        src="https://app.powerbi.com/view?r=eyJrIjoiMTAyOTBlNDUtMjNhOC00MjIyLWFiYTgtOTRlYzVkNDIzMjU4IiwidCI6IjY5NmQxOWU0LWZjNzUtNGU4NS05MzdlLWU1M2UwNmFlNWYzYiJ9"
        style={{ width: '1300px', height: '800px' }}
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
