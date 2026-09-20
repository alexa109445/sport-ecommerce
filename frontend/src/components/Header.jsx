import React, { useState } from 'react';
import '../style/Header.css';

function Header() {
    const [testoRicerca, setTestoRicerca] = useState('');
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">
            <div className="container-fluid">

                <a className="navbar-brand text-info fw-bold fs-3 me-4" href="#home">
                    SportWear
                </a>
                <div className="collapse navbar-collapse" id="navbarContenuto">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom fw-semibold" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom fw-semibold" href="#uomo">
                                Uomo
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom fw-semibold" href="#donna">
                                Donna
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom fw-semibold" href="#offerte">
                                Offerte
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex me-4">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Cerca un prodotto..."
                            value={testoRicerca}
                            onChange={(evento) => setTestoRicerca(evento.target.value)}
                        />
                        <button className="btn btn-outline-info" type="submit">
                            Cerca
                        </button>
                    </form>
                    <div className="d-flex align-items-center gap-3">
                        <button className="btn btn-outline-light" type="button">
                            Accedi
                        </button>

                        <div className="position-relative text-white fs-4 carrello-contenitore">
                            🛒
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger badge-carrello">
                                0
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Header;