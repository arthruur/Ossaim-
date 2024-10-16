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
        src="https://app.powerbi.com/view?r=eyJrIjoiNWJkM2JhM2EtNzRlZC00MmRhLTg0NjYtOWUzMzgwYjc2NTNhIiwidCI6IjY5NmQxOWU0LWZjNzUtNGU4NS05MzdlLWU1M2UwNmFlNWYzYiJ9&pageName=f042beb5da0b98a1697d"
        style={{ width: '900px', height: '600px' }}
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
