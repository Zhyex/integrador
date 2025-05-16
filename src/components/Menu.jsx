import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
        <div className="container header">
        <div className="container text-center my-5">
            <h1>Los Libros de Zoomie</h1>
            <span>Encuentra aquí tu próxima lectura</span>
        </div>
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" to="/Books">Libros</Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" to="/About">Acerca de</Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Eventos</Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                          </svg>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="./loginUser.html">Ingresar</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        </div>
    </div>
    </>
  )
}
