import React, { useState } from 'react';

import { AboutUs, Footer, Header, Laurels, SpecialMenu } from './container';
import { Navbar, PdfViewer } from './components'; // Importe o novo PdfViewer
import './App.css';

const App = () => {
  // Estado para controlar a visibilidade do PDF Viewer
  const [isPdfVisible, setIsPdfVisible] = useState(false);

  // Função para abrir o visualizador
  const openPdf = () => setIsPdfVisible(true);

  // Função para fechar o visualizador
  const closePdf = () => setIsPdfVisible(false);

  return (
    <div>
      {/* Passamos a função 'openPdf' para a Navbar */}
      <Navbar openPdfViewer={openPdf} />

      {/* O conteúdo principal do seu site */}
      <Header />
      <AboutUs />
      <div className="hide-on-mobile">
        <SpecialMenu />
      </div>
      <Laurels />
      <Footer />

      {/* Renderização condicional do PDF Viewer */}
      {/* Ele só aparece quando 'isPdfVisible' for true */}
      {isPdfVisible && <PdfViewer closePdf={closePdf} />}
    </div>
  );
};

export default App;
