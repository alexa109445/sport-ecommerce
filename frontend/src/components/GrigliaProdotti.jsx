import '../style/grigliaProdotti.css';

const prodottiMock = [
  {
    id: 1,
    nome: 'Maglia Tecnica Running',
    categoria: 'Uomo',
    prezzo: 34.99,
    immagine: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600'
  },
  {
    id: 2,
    nome: 'Leggings Sportivi High-Waist',
    categoria: 'Donna',
    prezzo: 42.50,
    immagine: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=600'
  },
  {
    id: 3,
    nome: 'Giacca Antivento Training',
    categoria: 'Uomo',
    prezzo: 69.99,
    immagine: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600'
  },
  {
    id: 4,
    nome: 'Top Sportivo Traspirante',
    categoria: 'Donna',
    prezzo: 29.99,
    immagine: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600'
  }
];

function GrigliaProdotti() {
  return (
    <section className="py-5 bg-light" id="prodotti">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-1 text-dark">I Nostri Prodotti</h2>
          <p className="text-muted fs-5">Scegli il meglio per i tuoi allenamenti</p>
        </div>

        <div className="row g-4">
          {prodottiMock.map((prodotto) => (
            <div key={prodotto.id} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0 prodotto-card">
                
                <img 
                  src={prodotto.immagine} 
                  className="card-img-top prodotto-immagine" 
                  alt={prodotto.nome} 
                />
                
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-info text-dark align-self-start mb-2 fw-bold">
                    {prodotto.categoria}
                  </span>
                  <h5 className="card-title fw-bold text-dark mb-2">
                    {prodotto.nome}
                  </h5>
                  <p className="card-text fs-4 fw-bold text-dark mt-auto mb-3">
                    €{prodotto.prezzo.toFixed(2)}
                  </p>
                  <button className="btn btn-dark w-100 fw-semibold">
                    Aggiungi al Carrello
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GrigliaProdotti;