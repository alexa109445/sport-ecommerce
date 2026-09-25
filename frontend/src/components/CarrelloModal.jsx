import React from 'react';

function CarrelloModal({ mostra, onChiudi, carrello, onAggiungi, onRimuovi }) {
  if (mostra === false) {
    return null;
  }

  const totaleComplessivo = carrello.reduce(function (somma, articolo) {
    return somma + articolo.prezzo * articolo.quantita;
  }, 0);

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title fw-bold">Il tuo Carrello</h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onChiudi}
            ></button>
          </div>
          <div className="modal-body">
            {carrello.length === 0 ? (
              <p className="text-center text-muted my-4 fs-5">Il carrello è vuoto.</p>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Prodotto</th>
                      <th>Prezzo</th>
                      <th className="text-center">Quantità</th>
                      <th className="text-end">Totale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrello.map(function (articolo) {
                      return (
                        <tr key={articolo.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img 
                                src={articolo.immagine} 
                                alt={articolo.nome} 
                                style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                                className="me-3 rounded"
                              />
                              <span className="fw-semibold">{articolo.nome}</span>
                            </div>
                          </td>
                          <td>€{articolo.prezzo.toFixed(2)}</td>
                          <td className="text-center">
                            <div className="btn-group btn-group-sm" role="group">
                              <button 
                                className="btn btn-outline-dark" 
                                onClick={function () {
                                  onRimuovi(articolo.id);
                                }}
                              >
                                -
                              </button>
                              <span className="btn btn-light disabled fw-bold" style={{ width: '40px' }}>
                                {articolo.quantita}
                              </span>
                              <button 
                                className="btn btn-outline-dark" 
                                onClick={function () {
                                  onAggiungi(articolo);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="text-end fw-bold">
                            €{(articolo.prezzo * articolo.quantita).toFixed(2)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button type="button" className="btn btn-outline-secondary" onClick={onChiudi}>
              Continua lo Shopping
            </button>
            <div className="d-flex align-items-center gap-3">
              <span className="fs-4 fw-bold">
                Totale: €{totaleComplessivo.toFixed(2)}
              </span>
              <button 
                type="button" 
                className="btn btn-dark btn-lg" 
                disabled={carrello.length === 0}
              >
                Procedi al Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarrelloModal;