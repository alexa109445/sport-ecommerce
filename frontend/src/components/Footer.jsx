import React from 'react';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 border-top border-secondary">
      <div className="container">
        <div className="row g-4">
    
          <div className="col-12 col-md-4">
            <h5 className="text-info fw-bold fs-4 mb-3">SportWear</h5>
            <p className="text-light opacity-75">
              Il tuo negozio online di fiducia per l'abbigliamento sportivo di alta qualità. Spingi i tuoi limiti con il miglior equipaggiamento.
            </p>
          </div>

          <div className="col-6 col-md-4">
            <h5 className="fw-bold mb-3 text-white">Navigazione</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-light text-decoration-none opacity-75 footer-link">Home</a></li>
              <li className="mb-2"><a href="#prodotti" className="text-light text-decoration-none opacity-75 footer-link">Prodotti</a></li>
              <li className="mb-2"><a href="#offerte" className="text-light text-decoration-none opacity-75 footer-link">Offerte Speciali</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h5 className="fw-bold mb-3 text-white">Contatti</h5>
            <p className="text-light opacity-75 mb-1">📍 Via dello Sport 10, Roma</p>
            <p className="text-light opacity-75 mb-1">✉️ supporto@sportwear.it</p>
            <p className="text-light opacity-75">📞 +39 06 1234567</p>
          </div>

        </div>

        <hr className="my-4 text-secondary" />
        <div className="text-center text-light opacity-50 small">
          © {new Date().getFullYear()} SportWear E-Commerce. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}

export default Footer;