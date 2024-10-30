import React, { useState } from 'react';

const Cartografias = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderResultadosContent = () => {
    return (
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <iframe
            src="https://drive.google.com/file/d/1jrs0-QLESkyUydXQ75CuBVQ2yK8NjtlH/preview"
            style={{ width: '100%', height: '600px', border: 'none' }}
            title="Cartografia"
          ></iframe>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p className="p__opensans">
            Acesse a Tese "A Educação Musical no Brasil: temáticas, concepções e linhas investigativas", por Eliton Pereira:
          </p>
          <p className="p__opensans">
            <strong>Obs:</strong> No pdf das cartografias de Pereira, busque por "Educação Especial", "Educação Inclusiva", "Educação Musical Especial", "Educação Musical Inclusiva" ou "Educação Musical Especial e Inclusiva" para obter dados quantitativos comparativos relacionados ao tema.
          </p>
        </div>

        <div>
          <a
            href="https://www.educacion.gob.es/teseo/mostrarRef.do?ref=1791579"
            className="p__cormorant"
            style={{ color: '#E3A237', textDecoration: 'underline' }}
          >
            Link para a Tese
          </a>
        </div>
      </div>
    );
  };

  return <div>{renderResultadosContent()}</div>;
};

export default Cartografias;
