import React, { useState } from 'react';

// Dados dos eventos
const eventos = [
    {
        ano: "1997",
        descricao: "Dissertações de Mestrado defendidas nos cursos de Pós-graduação Stricto Sensu em Música e Artes/Música até dezembro de 1996.",
        autores: "Ulhôa, M.",
        publicacao: "Revista Opus",
        tipo: "Artigo",
        camposRevisao: "Música",
        tiposDocumentos: "Dissertações",
        localLevantamento: "PPG´s Brasileiros",
        inicioRecorte: "01/01/1983",
        fimRecorte: "31/12/1996",
        totalTextos: 262,
        totalTextosMusica: 262,
        totalTextosEM: 50,
        totalTextosEMEI: 3,
        totalTextosEMPDIC: 0,
        totalTextosEMPDI: 0,
    },
    {
        ano: "1997",
        descricao: "Pós-graduação em Educação Musical (resultados preliminares).",
        autores: "Oliveira, A. e Souza, J",
        publicacao: "Revista da ABEM",
        tipo: "Artigo",
        camposRevisao: "Educação Musical",
        tiposDocumentos: "Dissertações",
        localLevantamento: "PPG´s Brasileiros",
        inicioRecorte: "01/01/1984",
        fimRecorte: "31/12/1997",
        totalTextos: 46,
        totalTextosMusica: 46,
        totalTextosEM: 46,
        totalTextosEMEI: 0,
        totalTextosEMPDIC: 0,
        totalTextosEMPDI: 0,
    },
    {
        ano: "2000",
        descricao: "Pesquisa em Educação Musical: situação do campo nas dissertações e teses dos cursos de pós-graduação stricto sensu em Educação.",
        autores: "Fernandes, J. N.",
        publicacao: "Revista da ABEM",
        tipo: "Artigo",
        camposRevisao: "Educação Musical",
        tiposDocumentos: "Dissertações e Teses",
        localLevantamento: "PPG´s Brasileiros",
        inicioRecorte: "01/01/1981",
        fimRecorte: "31/12/1997",
        totalTextos: 106,
        totalTextosMusica: 50,
        totalTextosEM: 50,
        totalTextosEMEI: 3,
        totalTextosEMPDIC: 0,
        totalTextosEMPDI: 0,
    },
    {
        ano: "2006",
        descricao: "Pesquisa em Educação Musical: situação do campo nas dissertações e teses dos Cursos de Pós-Graduação Stricto Sensu Brasileiros.",
        autores: "Fernandes, J. N.",
        publicacao: "Revista da ABEM",
        tipo: "Artigo",
        camposRevisao: "Educação Musical",
        tiposDocumentos: "Dissertações e Teses",
        localLevantamento: "PPG´s Brasileiros",
        inicioRecorte: "01/01/1998",
        fimRecorte: "31/12/2001",
        totalTextos: 125,
        totalTextosMusica: 125,
        totalTextosEM: 125,
        totalTextosEMEI: 2,
        totalTextosEMPDIC: 0,
        totalTextosEMPDI: 0,
    },
    {
        ano: "2007",
        descricao: "Pesquisa em educação musical: situação do campo nas dissertações e teses dos cursos de pós-graduação stricto sensu brasileiros (II).",
        autores: "Fernandes, J. N.",
        publicacao: "Revista da ABEM",
        tipo: "Artigo",
        camposRevisao: "Educação Musical",
        tiposDocumentos: "Dissertações e Teses",
        localLevantamento: "PPG´s Brasileiros",
        inicioRecorte: "01/01/2002",
        fimRecorte: "31/12/2005",
        totalTextos: 142,
        totalTextosMusica: 142,
        totalTextosEM: 142,
        totalTextosEMEI: 2,
        totalTextosEMPDIC: 2,
        totalTextosEMPDI: 0,
    },
    {
        ano: "2008",
        descricao: "A Educação Musical Especial: aspectos históricos, legais e metodológicos (Capítulo 3, item 3.2 As concepções e abordagens da educação musical especial segundo a literatura).",
        autores: "Santos, C. E.",
        publicacao: "Repositório Institucional da UNIRIO",
        tipo: "Capítulo de Dissertação em Música",
        camposRevisao: "Educação Musical Especial",
        tiposDocumentos: "Artigos em Anais de Eventos e Revistas",
        localLevantamento: "ABEM",
        inicioRecorte: "01/01/1993",
        fimRecorte: "31/12/2007",
        totalTextos: 10,
        totalTextosMusica: 10,
        totalTextosEM: 10,
        totalTextosEMEI: 8,
        totalTextosEMPDIC: 8,
        totalTextosEMPDI: 0,
    },
    {
        ano: "2009",
        descricao: "A Educação Musical Especial em Produções dos Encontros Nacionais da ABEM.",
        autores: "Morales, D., Bellochio, C.",
        publicacao: "Anais da ABEM Nacional",
        tipo: "Artigo",
        camposRevisao: "Educação Musical Especial",
        tiposDocumentos: "Artigos em Anais de Eventos",
        localLevantamento: "ABEM",
        inicioRecorte: "01/01/2002",
        fimRecorte: "31/12/2008",
        totalTextos: 40,
        totalTextosMusica: 40,
        totalTextosEM: 40,
        totalTextosEMEI: 9,
        totalTextosEMPDIC: 4,
        totalTextosEMPDI: 0,
    },
    {
        ano: "2014",
        descricao: "Música e Educação Especial: produções online nas revistas e anais de encontros/congressos da Abem (1992 – 2012).",
        autores: "Gums, L. M, Schambeck, R. F.",
        publicacao: "Anais da ABEM (Regional Sul)",
        tipo: "Artigo",
        camposRevisao: "Educação Musical Especial",
        tiposDocumentos: "Artigos em Anais de Eventos e Revistas",
        localLevantamento: "ABEM",
        inicioRecorte: "01/01/1992",
        fimRecorte: "31/12/2012",
        totalTextos: 2258,
        totalTextosMusica: 2258,
        totalTextosEM: 2258,
        totalTextosEMEI: 75,
        totalTextosEMPDIC: 10,
        totalTextosEMPDI: 7,
    },
    {
        ano: "2016",
        descricao: "Educação Musical Especial: produção brasileira nos últimos 30 anos.",
        autores: "Fantini, R. F. S.; Joly, I. Z., L. e Rose, T. M. S.",
        publicacao: "Revista da ABEM",
        tipo: "Artigo",
        camposRevisao: "Educação Musical Especial",
        tiposDocumentos: "Artigos em Anais de Eventos e Revistas, Dissertações e Teses.",
        localLevantamento: "ABEM, SINCAM, ANPPOM, REE, RBEE, BTDC, BDTD e PPGEE´s",
        inicioRecorte: "01/01/1981",
        fimRecorte: "31/12/2015",
        totalTextos: 126,
        totalTextosMusica: 126,
        totalTextosEM: 126,
        totalTextosEMEI: 126,
        totalTextosEMPDIC: 5,
        totalTextosEMPDI: 3,
    },
    {
        ano: "2015",
        descricao: "A Pesquisa Acadêmica na Área da Música: um Estado da Arte (1988 -2013).",
        autores: "Tomás, L.",
        publicacao: "Livro da ANPPOM (Pesquisa em Música no Brasil)",
        tipo: "Livro",
        camposRevisao: "Música",
        tiposDocumentos: "Artigos em Anais de Eventos",
        localLevantamento: "ANPPOM",
        inicioRecorte: "01/01/1988",
        fimRecorte: "01/01/2013",
        totalTextos: 2650,
        totalTextosMusica: 2650,
        totalTextosEM: 546,
        totalTextosEMEI: 30,
        totalTextosEMPDIC: 5,
        totalTextosEMPDI: 4,
    },
    {
        ano: "2016",
        descricao: "Educação Musical e Tea: um panorama das publicações nacionais.",
        autores: "Pendeza, D. e Dallabrida, I. C.",
        publicacao: "Revista da ABEM",
        tipo: "Artigo",
        camposRevisao: "EMPDIC - Transtorno do Espectro Autista",
        tiposDocumentos: "Artigos em Anais de Eventos, Teses e Dissertações",
        localLevantamento: "ABEM, ANNPOM, Portal de Periódicos Capes, Scielo, SINCAM e SIMPOM",
        inicioRecorte: "01/01/2005",
        fimRecorte: "01/01/2015",
        totalTextos: 19,
        totalTextosMusica: 19,
        totalTextosEM: 19,
        totalTextosEMEI: 19,
        totalTextosEMPDIC: 19,
        totalTextosEMPDI: 1,
    },
    {
        ano: "2018",
        descricao: "Educação Musical e Educação Especial na Produção Científica de Dissertações e Teses.",
        autores: "Cil, L. R. e Gonçalves, T. G. G. L.",
        publicacao: "Revista Música Hodie",
        tipo: "Artigo",
        camposRevisao: "Educação Musical Especial",
        tiposDocumentos: "Dissertações e Teses",
        localLevantamento: "BTDC e BDTD",
        inicioRecorte: "01/01/1987",
        fimRecorte: "01/01/2016",
        totalTextos: 17,
        totalTextosMusica: 17,
        totalTextosEM: 17,
        totalTextosEMEI: 17,
        totalTextosEMPDIC: 1,
        totalTextosEMPDI: 1,
    },
    {
        ano: "2018",
        descricao: "Educação Musical e Transtorno do Espectro Autista: análise da produção em revistas brasileiras de artes/música qualis A1 e seus anais de eventos regionais e nacionais.",
        autores: "Zimmer, P. N.; Rodrigues, J. C. e DeFreitas, A. D.",
        publicacao: "Revista da ABEM",
        tipo: "Artigo",
        camposRevisao: "EMPDIC - Transtorno do Espectro Autista",
        tiposDocumentos: "Artigos em Anais de Eventos e Revistas",
        localLevantamento: "Plataforma Sucupira: Música Hodie, Per Musi, Revista da ABEM, Revista OPUS, Anais Regionais e Nacionais da ABEM e da ANPPOM",
        inicioRecorte: "01/01/2006",
        fimRecorte: "01/01/2016",
        totalTextos: 3844,
        totalTextosMusica: 3844,
        totalTextosEM: null,
        totalTextosEMEI: 16,
        totalTextosEMPDIC: 1,
        totalTextosEMPDI: null,
    },
    {
        ano: "2019",
        descricao: "A Educação Musical no Brasil: temáticas, concepções e linhas investigativas.",
        autores: "Pereira, E. P. R",
        publicacao: "Repositório Institucional da Universidade de Santiago de Compostela (Espanha)",
        tipo: "Tese de Estado da Arte em Educação Musical",
        camposRevisao: "Educação Musical",
        tiposDocumentos: "Teses",
        localLevantamento: "Plataforma Sucupira e Currículo Lattes",
        inicioRecorte: "01/01/1990",
        fimRecorte: "01/01/2017",
        totalTextos: 300,
        totalTextosMusica: 300,
        totalTextosEM: 300,
        totalTextosEMEI: 7,
        totalTextosEMPDIC: 0,
        totalTextosEMPDI: 0,
    },
    {
        ano: "2019",
        descricao: "Música e Síndrome de Down: análise das publicações dos congressos da Associação Brasileira de Educação Musical (ABEM) de 2008-2018.",
        autores: "Coutinho, G. A. D; Farias, M. S. N. C. e Damasceno, V. T. S.",
        publicacao: "Anais da ABEM Nacional",
        tipo: "Artigo",
        camposRevisao: "EMPDIC - Síndrome de Down",
        tiposDocumentos: "Artigos de Anais em Eventos",
        localLevantamento: "ABEM",
        inicioRecorte: "01/01/2008",
        fimRecorte: "01/01/2018",
        totalTextos: 13,
        totalTextosMusica: 13,
        totalTextosEM: 13,
        totalTextosEMEI: 13,
        totalTextosEMPDIC: 13,
        totalTextosEMPDI: 13,
    },
    {
        ano: "2019",
        descricao: "A Educação Musical Inclusiva no Brasil: uma revisão de literatura.",
        autores: "Souza, C. L. e Sampaio, R. T.",
        publicacao: "Revista Olhares - Revista do Departamento de Educação da UNIFESP",
        tipo: "Artigo",
        camposRevisao: "Educação Musical Inclusiva",
        tiposDocumentos: "Artigos, TCCs, Dissertações e Teses",
        localLevantamento: "Portal Capes, Cochrane, Pubmed e Google Acadêmico",
        inicioRecorte: "01/01/2014",
        fimRecorte: "01/01/2018",
        totalTextos: 3867,
        totalTextosMusica: 3867,
        totalTextosEM: 3867,
        totalTextosEMEI: 16,
        totalTextosEMPDIC: 10,
        totalTextosEMPDI: 3,
    },
    {
        ano: "2019",
        descricao: "Educação Musical Especial: uma revisão de literatura em publicações da ABEM (2014-2018).",
        autores: "Paulino, D. F.",
        publicacao: "Repositório Institucional da UNB",
        tipo: "TCC de Licenciatura em Música",
        camposRevisao: "Educação Musical Especial",
        tiposDocumentos: "Artigos em Anais de Eventos e Revistas",
        localLevantamento: "ABEM",
        inicioRecorte: "01/01/2014",
        fimRecorte: "01/01/2018",
        totalTextos: 33,
        totalTextosMusica: 33,
        totalTextosEM: 33,
        totalTextosEMEI: 5,
        totalTextosEMPDIC: 3,
        totalTextosEMPDI: 0,
    },
    {
        ano: "2020",
        descricao: "\"Leituras de Brasil\" nas pesquisas acadêmicas da área da música.",
        autores: "Tomás, L.",
        publicacao: "Livro da ANPPOM (Pesquisa em Música no Brasil)",
        tipo: "Livro",
        camposRevisao: "Música",
        tiposDocumentos: "Artigos em Anais de Eventos",
        localLevantamento: "ANPPOM",
        inicioRecorte: "01/01/2014",
        fimRecorte: "01/01/2018",
        totalTextos: 1360,
        totalTextosMusica: 1360,
        totalTextosEM: 264,
        totalTextosEMEI: 21,
        totalTextosEMPDIC: 3,
        totalTextosEMPDI: 0,
    },
    {
        ano: "2024",
        descricao: "Desenvolvimento Musical de Estudantes com Transtorno do Espectro Autista (TEA) (Capítulo 3 - Música e Autismo: uma revisão integrativa da literatura).",
        autores: "Pereira, G. de L.",
        publicacao: "Repositório Institucional da UEFS",
        tipo: "TCC de Licenciatura em Música",
        camposRevisao: "EMPDIC - Transtorno do Espectro Autista",
        tiposDocumentos: "Artigos em Anais de Eventos e Revistas",
        localLevantamento: "Revista Orfeu, da ABEM, Per Musi, Musica Hodie, Vórtex, Opus e Anais da ABEM e ISME",
        inicioRecorte: "01/01/2014",
        fimRecorte: "01/01/2023",
        totalTextos: 24,
        totalTextosMusica: 24,
        totalTextosEM: 24,
        totalTextosEMEI: 24,
        totalTextosEMPDIC: 24,
        totalTextosEMPDI: 0,
    },
];

const LinhaDoTempo = () => {
    const [selectedEvento, setSelectedEvento] = useState(null);
    const [hoveredEventos, setHoveredEventos] = useState([]);
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const handleEllipseClick = (evento) => {
        if (selectedEvento === evento) {
            setSelectedEvento(null);
            setShowMoreInfo(false);
        } else {
            setSelectedEvento(evento);
        }
    };

    const closePanel = () => {
        setSelectedEvento(null);
        setShowMoreInfo(false);
    };

    const openMoreInfo = () => {
        setShowMoreInfo(true);
    };

    const closeMoreInfo = () => {
        setShowMoreInfo(false);
    };

    const handleMouseEnter = (evento) => {
        const eventosDoAutor = eventos.filter(e => e.autores === evento.autores);
        setHoveredEventos(eventosDoAutor);
    };

    const handleMouseLeave = () => {
        setHoveredEventos([]);
    };

    return (
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '28px', color: '#E3A237' }}>
                Linha do Tempo da Revisão da Literatura
            </h1>
            <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '20px', color: '#E3A237' }}>
                Observação: Ao passar o mouse, a linha do tempo destaca os eventos de mesmos autores.
            </h2>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                {Array.from(new Set(eventos.map(evento => evento.ano))).map((ano) => (
                    <div key={ano} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 10px', position: 'relative' }}>
                        {eventos.filter(evento => evento.ano === ano).map((evento, index) => (
                            <div key={index} style={{ marginBottom: '10px', cursor: 'pointer' }} 
                                onClick={() => handleEllipseClick(evento)} 
                                onMouseEnter={() => handleMouseEnter(evento)} 
                                onMouseLeave={handleMouseLeave}>
                                <div
                                    style={{
                                        width: '70px',
                                        height: '70px',
                                        background: selectedEvento === evento || hoveredEventos.includes(evento) ? 'linear-gradient(135deg, #304C3B, #E3A237)' : '#50795e',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        fontSize: '20px',
                                        textAlign: 'center',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                        transition: 'background 0.3s ease',
                                        opacity: selectedEvento && selectedEvento !== evento ? 0.5 : 1,
                                    }}
                                >
                                    {evento.ano}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Painel de informações abaixo da linha do tempo */}
            <div style={{ marginTop: '40px' }}>
                {selectedEvento && (
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid #E3A237',
                        borderRadius: '8px',
                        padding: '20px',
                        width: '100%',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    }}>
                        <h3 style={{ marginBottom: '20px' }}>{selectedEvento.descricao}</h3>
                        <p style={{ marginBottom: '10px' }}><strong>Autores:</strong> {selectedEvento.autores}</p>
                        <p style={{ marginBottom: '10px' }}><strong>Publicação:</strong> {selectedEvento.publicacao}</p>
                        <p style={{ marginBottom: '10px' }}><strong>Tipo:</strong> {selectedEvento.tipo}</p>
                        <button onClick={openMoreInfo} style={{
                            background: '#E3A237',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '10px',
                            marginRight: '5px'
                        }}>
                            Mais informações
                        </button>
                        <button onClick={closePanel} style={{
                            background: '#E3A237',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}>
                            Fechar
                        </button>
                    </div>
                )}
            </div>

            {/* Modal de Mais Informações */}
            {showMoreInfo && selectedEvento && (
                <div style={{
                    marginTop: '20px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid #E3A237',
                    borderRadius: '8px',
                    padding: '20px',
                    width: '100%',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                }}>
                    <h3 style={{ marginBottom: '20px' }}>Mais Informações sobre {selectedEvento.descricao}</h3>
                    <p><strong>Campos de Revisão:</strong> {selectedEvento.camposRevisao}</p>
                    <p><strong>Tipos de Documentos Revisados:</strong> {selectedEvento.tiposDocumentos}</p>
                    <p><strong>Local de Levantamento:</strong> {selectedEvento.localLevantamento}</p>
                    <p><strong>Início do Recorte Cronológico:</strong> {selectedEvento.inicioRecorte}</p>
                    <p><strong>Fim do Recorte Cronológico:</strong> {selectedEvento.fimRecorte}</p>
                    <p><strong>Total de Textos Levantados:</strong> {selectedEvento.totalTextos}</p>
                    <p><strong>Total de Textos Levantados em Música (M):</strong> {selectedEvento.totalTextosMusica}</p>
                    <p><strong>Total de Textos Levantados em Educação Musical (EM):</strong> {selectedEvento.totalTextosEM}</p>
                    <p><strong>Total de Textos Levantados em Educação Musical Especial e Inclusiva (EMEI):</strong> {selectedEvento.totalTextosEMEI}</p>
                    <p><strong>Total de Textos Levantados em Educação Musical de Pessoas com Deficiência Intelectual e Comorbidades (EMPDIC):</strong> {selectedEvento.totalTextosEMPDIC}</p>
                    <p><strong>Total de Textos Levantados em Educação Musical de Pessoas com Deficiência Intelectual (EMPDI):</strong> {selectedEvento.totalTextosEMPDI}</p>
                    <button onClick={closeMoreInfo} style={{
                        background: '#E3A237',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}>
                        Fechar
                    </button>
                </div>
            )}
        </div>
    );
};

export default LinhaDoTempo;

