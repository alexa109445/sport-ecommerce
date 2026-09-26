import React, { useState } from 'react';

function Checkout({ carrello, onTornaAlCatalogo, onConfermaOrdine }) {
  const [datiSpedizione, setDatiSpedizione] = useState({
    nome: '',
    cognome: '',
    email: '',
    indirizzo: '',
    citta: '',
    cap: ''
  });

  const totaleComplessivo = carrello.reduce(function (somma, articolo) {
    return somma + articolo.prezzo * articolo.quantita;
  }, 0);

  const gestioneCambioInput = function (evento) {
    const nomeCampo = evento.target.name;
    const valoreCampo = evento.target.value;

    setDatiSpedizione(function (statoPrecedente) {
      return {
        ...statoPrecedente,
        [nomeCampo]: valoreCampo
      };
    });
  };

  const gestioneInvioForm = function (evento) {
    evento.preventDefault();
    onConfermaOrdine(datiSpedizione);
  };

  return (
    <div className="container py-5">
      <button 
        className="btn btn-outline-dark mb-4" 
        onClick={onTornaAlCatalogo}
      >
        ← Torna ai Prodotti
      </button>

      <h2 className="fw-bold mb-4">Completa il tuo Ordine</h2>

      <div className="row g-5">
        {/* Modulo Dati di Spedizione */}
        <div className="col-md-7">
          <h4 className="mb-3 fw-bold">Dati di Spedizione</h4>
          <form onSubmit={gestioneInvioForm}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label className="form-label fw-semibold">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  name="nome"
                  value={datiSpedizione.nome}
                  onChange={gestioneCambioInput}
                  required
                />
              </div>

              <div className="col-sm-6">
                <label className="form-label fw-semibold">Cognome</label>
                <input
                  type="text"
                  className="form-control"
                  name="cognome"
                  value={datiSpedizione.cognome}
                  onChange={gestioneCambioInput}
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={datiSpedizione.email}
                  onChange={gestioneCambioInput}
                  placeholder="nome@esempio.com"
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold">Indirizzo</label>
                <input
                  type="text"
                  className="form-control"
                  name="indirizzo"
                  value={datiSpedizione.indirizzo}
                  onChange={gestioneCambioInput}
                  placeholder="Via Roma 12"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Città</label>
                <input
                  type="text"
                  className="form-control"
                  name="citta"
                  value={datiSpedizione.citta}
                  onChange={gestioneCambioInput}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">CAP</label>
                <input
                  type="text"
                  className="form-control"
                  name="cap"
                  value={datiSpedizione.cap}
                  onChange={gestioneCambioInput}
                  required
                />
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-dark btn-lg fw-bold" type="submit">
              Conferma e Paga (€{totaleComplessivo.toFixed(2)})
            </button>
          </form>
        </div>

        {/* Riepilogo Ordine a Destra */}
        <div className="col-md-5">
          <div className="card shadow-sm border-0 bg-light p-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3 fw-bold">
              <span>Riepilogo Carrello</span>
              <span className="badge bg-dark rounded-pill">
                {carrello.reduce(function (tot, art) { return tot + art.quantita; }, 0)}
              </span>
            </h4>
            <ul className="list-group list-group-flush mb-3">
              {carrello.map(function (articolo) {
                return (
                  <li 
                    key={articolo.id} 
                    className="list-group-item d-flex justify-content-between lh-sm bg-transparent border-bottom"
                  >
                    <div>
                      <h6 className="my-0 fw-bold">{articolo.nome}</h6>
                      <small className="text-muted">Quantità: {articolo.quantita}</small>
                    </div>
                    <span className="text-muted fw-semibold">
                      €{(articolo.prezzo * articolo.quantita).toFixed(2)}
                    </span>
                  </li>
                );
              })}
              <li className="list-group-item d-flex justify-content-between bg-transparent pt-3">
                <span className="fw-bold fs-5">Totale</span>
                <strong className="fs-5 text-dark">€{totaleComplessivo.toFixed(2)}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;