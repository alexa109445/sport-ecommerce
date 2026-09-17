import React from 'react';
import '../style/Hero.css';

function Hero() {
  return (
    <div className="hero-container bg-dark text-white text-center py-5 position-relative overflow-hidden">
      <div className="container py-5 my-3 position-relative z-1">
        
        <h1 className="display-3 fw-bold mb-3 text-uppercase tracking-wide">
          Abbina le tue <span className="text-info">Prestazioni</span> allo Stile
        </h1>
        <p className="lead fs-4 text-light opacity-75 mb-4 mx-auto style-descrizione">
          Scopri la nuova collezione di abbigliamento sportivo. Tecnologico, traspirante e progettato per spingerti oltre ogni limite.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <a href="#prodotti" className="btn btn-info btn-lg fw-bold text-dark px-4 py-2">
            Esplora il Catalogo
          </a>
          <a href="#offerte" className="btn btn-outline-light btn-lg fw-bold px-4 py-2">
            Vedi Offerte
          </a>
        </div>

      </div>
    </div>
  );
}

export default Hero;