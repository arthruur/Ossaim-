import React from 'react';

const Pesquisa = () => {
  const renderResultadosContent = () => {
    return (
      <video width="1000" height="600" controls>
        <source src="" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    );
  };

  return (
    <div>
      {renderResultadosContent()}
    </div>
  );
};

export default Pesquisa;
