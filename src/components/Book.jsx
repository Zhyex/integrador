import React from 'react';
import { Link } from 'react-router-dom';

export default function Book({ dataBook }) {
  const {
    codlibro = 0,
    nomlibro = 'Sin título',
    genero = 'No especificado',
    autor = 'Autor desconocido',
    url = 'https://via.placeholder.com/200x300?text=Sin+Imagen',
    activo = 'SI'
  } = dataBook || {};

  return (
    <div className="col-12 col-md-6 mb-4">
      <div
        className="card shadow border h-100"
        style={{
          borderColor: '#dee2e6',
          borderWidth: '2px',
          opacity: activo === 'SI' ? 1 : 0.5
        }}
      >
        <Link to={`/Books/${codlibro}`} style={{ pointerEvents: activo === 'SI' ? 'auto' : 'none' }}>
          <img
            src={url}
            alt={nomlibro}
            className="img-fluid rounded"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/200x300?text=Sin+Imagen';
            }}
            style={{
              height: '600px',
              objectFit: 'cover',
              width: '100%'
            }}
          />
        </Link>
        <div className="card-body text-center p-4 d-flex flex-column">
          <Link
            to={`/Books/${codlibro}`}
            className="text-decoration-none"
            style={{ pointerEvents: activo === 'SI' ? 'auto' : 'none' }}
          >
            <h3 className="fs-5 mt-2 mb-3 text-dark">{nomlibro}</h3>
            <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
              <strong>Autor:</strong> {autor}
            </p>
            <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
              <strong>Género:</strong> {genero}
            </p>
            <p className="text-primary fw-bold mb-0" style={{ fontSize: '1rem' }}>
              Ver más
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
