import "../style/grigliaProdotti.css";
import React, { useState, useEffect } from 'react';


function GrigliaProdotti({ onAggiungiAlCarrello }) {
  const [listaProdotti, setListaProdotti] = useState([]);
  const [categoriaSelezionata, setCategoriaSelezionata] = useState('Tutti');
  const [caricamentoInCorso, setCaricamentoInCorso] = useState(true);
  const [messaggioErrore, setMessaggioErrore] = useState(null);

  useEffect(function () {
    fetch('http://localhost:8080/api/prodotti')
      .then(function (risposta) {
        if (risposta.ok === false) {
          throw new Error('Impossibile recuperare la lista dei prodotti dal server');
        }
        return risposta.json();
      })
      .then(function (datiRicevuti) {
        setListaProdotti(datiRicevuti);
        setCaricamentoInCorso(false);
      })
      .catch(function (erroreVerificato) {
        console.error(erroreVerificato);
        setMessaggioErrore(erroreVerificato.message);
        setCaricamentoInCorso(false);
      });
  }, []);
  const prodottiFiltrati = listaProdotti.filter(function (prodottoSingolo) {
    if (categoriaSelezionata === 'Tutti') {
      return true;
    }
    return prodottoSingolo.categoria.toLowerCase() === categoriaSelezionata.toLowerCase();
  });

  if (caricamentoInCorso === true) {
    return (
      <div className="text-center my-5 py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2 fw-semibold">Caricamento prodotti dal database in corso...</p>
      </div>
    );
  }

  if (messaggioErrore !== null) {
    return (
      <div className="alert alert-danger text-center my-5 container" role="alert">
        Si è verificato un errore: {messaggioErrore}. Collega Spring Boot.
      </div>
    );
  }

  return (
    <section className="py-5 bg-light" id="prodotti">
      <div className="container py-4">
        <div className="text-center mb-4">
          <h2 className="fw-bold fs-1 text-dark">I Nostri Prodotti</h2>
          <p className="text-muted fs-5">Scegli il meglio per i tuoi allenamenti</p>
        </div>
        <div className="d-flex justify-content-center gap-2 mb-5">
          {['Tutti', 'Uomo', 'Donna'].map(function (nomeCategoria) {
            const isSelezionato = categoriaSelezionata === nomeCategoria;
            return (
              <button
                key={nomeCategoria}
                className={isSelezionato ? 'btn btn-dark px-4 rounded-pill' : 'btn btn-outline-dark px-4 rounded-pill'}
                onClick={function () {
                  setCategoriaSelezionata(nomeCategoria);
                }}
              >
                {nomeCategoria}
              </button>
            );
          })}
        </div>
        <div className="row g-4">
          {prodottiFiltrati.length > 0 ? (
            prodottiFiltrati.map(function (prodottoSingolo) {
              return (
                <div key={prodottoSingolo.id} className="col-12 col-sm-6 col-lg-3">
                  <div className="card h-100 shadow-sm border-0 prodotto-card">
                    <img 
                      src={prodottoSingolo.immagine} 
                      className="card-img-top prodotto-immagine" 
                      alt={prodottoSingolo.nome} 
                    />
                    <div className="card-body d-flex flex-column">
                      <span className="badge bg-info text-dark align-self-start mb-2 fw-bold">
                        {prodottoSingolo.categoria}
                      </span>
                      <h5 className="card-title fw-bold text-dark mb-2">
                        {prodottoSingolo.nome}
                      </h5>
                      <p className="card-text fs-4 fw-bold text-dark mt-auto mb-3">
                        €{prodottoSingolo.prezzo.toFixed(2)}
                      </p>
                      <button className="btn btn-dark w-100 fw-semibold" onClick={function () {
                        onAggiungiAlCarrello(prodottoSingolo);
                      }}>
                        Aggiungi al Carrello
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center my-4">
              <p className="fs-5 text-muted">Nessun prodotto trovato per la categoria selezionata.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GrigliaProdotti;