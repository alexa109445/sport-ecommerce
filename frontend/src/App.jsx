import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import GrigliaProdotti from './components/grigliaProdotti.jsx';
import Footer from './components/Footer.jsx';
import CarrelloModal from './components/CarrelloModal.jsx';
import Checkout from './components/Checkout.jsx';

function App() {
  const [carrello, setCarrello] = useState([]);
  const [mostraModalCarrello, setMostraModalCarrello] = useState(false);
  const [vistaCorrente, setVistaCorrente] = useState('catalogo');

  const aggiungiAlCarrello = function (prodottoDaAggiungere) {
    setCarrello(function (carrelloAttuale) {
      const prodottoEsistente = carrelloAttuale.find(function (articolo) {
        return articolo.id === prodottoDaAggiungere.id;
      });

      if (prodottoEsistente) {
        return carrelloAttuale.map(function (articolo) {
          if (articolo.id === prodottoDaAggiungere.id) {
            return {
              ...articolo,
              quantita: articolo.quantita + 1
            };
          }
          return articolo;
        });
      } else {
        return [...carrelloAttuale, { ...prodottoDaAggiungere, quantita: 1 }];
      }
    });
  };

  const rimuoviDalCarrello = function (idProdottoDaRimuovere) {
    setCarrello(function (carrelloAttuale) {
      const prodottoEsistente = carrelloAttuale.find(function (articolo) {
        return articolo.id === idProdottoDaRimuovere;
      });

      if (prodottoEsistente.quantita === 1) {
        return carrelloAttuale.filter(function (articolo) {
          return articolo.id !== idProdottoDaRimuovere;
        });
      } else {
        return carrelloAttuale.map(function (articolo) {
          if (articolo.id === idProdottoDaRimuovere) {
            return {
              ...articolo,
              quantita: articolo.quantita - 1
            };
          }
          return articolo;
        });
      }
    });
  };

  const numeroTotaleArticoli = carrello.reduce(function (totale, articolo) {
    return totale + articolo.quantita;
  }, 0);

  const apriModalCarrello = function () {
    setMostraModalCarrello(true);
  };

  const chiudiModalCarrello = function () {
    setMostraModalCarrello(false);
  };

  const passaAlCheckout = function () {
    setMostraModalCarrello(false);
    setVistaCorrente('checkout');
  };

  const tornaAlCatalogo = function () {
    setVistaCorrente('catalogo');
  };

  const inviaOrdineAlBackend = function (datiSpedizione) {
    console.log("Dati ordine pronti per l'invio:", datiSpedizione, carrello);
    alert('Ordine inviato con successo!');
    setCarrello([]);
    setVistaCorrente('catalogo');
  };

  return (
    <div>
      <Header 
        quantitaCarrello={numeroTotaleArticoli} 
        onApriCarrello={apriModalCarrello} 
      />

      {vistaCorrente === 'catalogo' ? (
        <div>
          <Hero />
          <GrigliaProdotti onAggiungiAlCarrello={aggiungiAlCarrello} />
        </div>
      ) : (
        <Checkout 
          carrello={carrello} 
          onTornaAlCatalogo={tornaAlCatalogo} 
          onConfermaOrdine={inviaOrdineAlBackend} 
        />
      )}

      <Footer />

      <CarrelloModal 
        mostra={mostraModalCarrello} 
        onChiudi={chiudiModalCarrello} 
        carrello={carrello} 
        onAggiungi={aggiungiAlCarrello} 
        onRimuovi={rimuoviDalCarrello} 
        onProcediAlCheckout={passaAlCheckout}
      />
    </div>
  );
}

export default App;