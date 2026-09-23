import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import GrigliaProdotti from './components/grigliaProdotti.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [carrello, setCarrello] = useState([]);

  const aggiungiAlCarrello = function (prodottoDaAggiungere){
    setCarrello(function(carrelloAttuale )
    {
const prodottoEsistente = carrelloAttuale.find(function(articolo){ 
  return articolo.id === prodottoDaAggiungere.id;
});

if(prodottoEsistente){
return carrelloAttuale.map(function(articolo){
  if(articolo.id===prodottoDaAggiungere.id){
    return {
      ...articolo, quantita: articolo.quantita + 1
    };
  }
     return articolo;
});
}

else{
  return [...carrelloAttuale, {...prodottoDaAggiungere, quantita: 1}];

}
    });
  };

  const numeroTotaleArticoli = carrello.reduce(function(totale, articolo){
    return totale + articolo.quantita;
  }, 0);


  return (
    <div>
      <Header quantitaCarrello={numeroTotaleArticoli} />
      <Hero />
      <GrigliaProdotti onAggiungiAlCarrello={aggiungiAlCarrello} />
      <Footer />
    </div>
  );
}

export default App;