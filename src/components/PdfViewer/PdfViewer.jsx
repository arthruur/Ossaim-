import React from 'react';
import { MdClose } from 'react-icons/md';
import './PdfViewer.css';

// O URL do Google Drive precisa terminar em /preview para funcionar no iframe.
const pdfEmbedUrl = "https://drive.google.com/file/d/1VZtvXIrheh6f1H7ZCrEpcAfnGPjTcyp6/preview";

const PdfViewer = ({ closePdf }) => {
  return (
    <div className="pdf-overlay">
      <div className="pdf-container">
        <button className="pdf-close-button" onClick={closePdf}>
          <MdClose fontSize={28} />
        </button>
        <iframe
          src={pdfEmbedUrl}
          className="pdf-iframe"
          title="Guia da Plataforma"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default PdfViewer;
