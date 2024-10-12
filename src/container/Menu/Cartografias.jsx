import React, { useState } from 'react';

const Cartografias = () => {
  const [selectedCenso, setSelectedCenso] = useState('');

  const handleCensoChange = (event) => {
    setSelectedCenso(event.target.value);
  };

  const renderResultadosContent = () => {
    return (
    
    <div>   
        <iframe src="https://drive.google.com/file/d/1jrs0-QLESkyUydXQ75CuBVQ2yK8NjtlH/preview"
    style={{ width: '1100px', height: '600px' }}>
    </iframe>

    <a href='https://minerva.usc.es/xmlui/handle/10347/20495' className='p__opensans'>Acesse a Tese "A Educação Musical no Brasil: temáticas, concepções e linhas investigativas", por Eliton Pereira:  </a> <p className='p__opensans'> Obs: No pdf das cartografias de Pereira, busque por "Educação Especial", "Educação Inclusiva", "Educação Musical Especial", "Educação Musical Inclusiva" ou "Educação Musical Especial e Inclusiva" para obter dados quantitativos comparativos relacionados ao tema.</p>
    </div>
 
    );
  };

  return (
    <div>
      {renderResultadosContent()}
    </div>
  );
};

export default Cartografias;
