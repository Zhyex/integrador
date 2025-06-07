import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function BooksDetailsPage() {
  const { codlibro } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [showTerms, setShowTerms] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loanData, setLoanData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechaDevolucion: ''
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`http://localhost:3000/libros/id/${codlibro}`);
        if (!res.ok) throw new Error('Libro no encontrado');
        const data = await res.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBook();
  }, [codlibro]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoanSubmit = async (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('Debes aceptar los términos y condiciones para continuar');
      return;
    }

    try {
      // Aquí iría la lógica para enviar la solicitud de préstamo
      const loanRequest = {
        ...loanData,
        codlibro: codlibro,
        fechaSolicitud: new Date().toISOString().split('T')[0]
      };
      
      console.log('Solicitud de préstamo:', loanRequest);
      alert('Solicitud de préstamo enviada correctamente');
      
      // Reset form
      setLoanData({
        nombre: '',
        email: '',
        telefono: '',
        fechaDevolucion: ''
      });
      setAcceptedTerms(false);
    } catch (err) {
      alert('Error al procesar la solicitud de préstamo');
    }
  };

  if (error) {
    return (
      <div className="container my-5">
        <h3 className="text-danger">Error: {error}</h3>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" />
        <p className="mt-3">Cargando libro...</p>
      </div>
    );
  }

  return (
    <>
      <Menu />
      <div className="container py-4">
        <nav className="mb-3">
          <a href="#" className="text-decoration-none text-muted">Inicio</a> /
          <a href="/Books" className="text-decoration-none text-muted">Libros</a> /
          <span className="text-dark">{book.nomlibro}</span>
        </nav>

        <div className="row g-5">
          <div className="col-md-6">
            <img src={book.url} alt={book.nomlibro} className="img-fluid rounded" />
            <p className="mt-3 text-muted">{book.descripcion || 'Este extraordinario libro cautiva desde la primera página con su narrativa envolvente y personajes inolvidables. Una obra maestra que combina sabiduría profunda con entretenimiento puro, ofreciendo una experiencia de lectura transformadora. Sus páginas contienen universos completos que expandirán tu imaginación y te harán reflexionar sobre la vida misma. Una joya literaria que permanecerá contigo mucho después de haber leído la última línea.'}</p>
          </div>
          
          <div className="col-md-6">
            <h2 className="fw-bold">{book.nomlibro}</h2>
            <p className="text-muted">Autor: {book.autor}</p>
            <p className="text-muted">Género: {book.genero}</p>
            
            {/* Sección de Préstamo */}
            <div className="card mt-4">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Solicitar Préstamo</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleLoanSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre Completo *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={loanData.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={loanData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono *</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      value={loanData.telefono}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="fechaDevolucion" className="form-label">Fecha de Devolución Deseada *</label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaDevolucion"
                      name="fechaDevolucion"
                      value={loanData.fechaDevolucion}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <button
                      type="button"
                      className="btn btn-link p-0 text-decoration-none"
                      onClick={() => setShowTerms(!showTerms)}
                    >
                      {showTerms ? 'Ocultar' : 'Ver'} Términos y Condiciones
                    </button>
                  </div>
                  
                  {showTerms && (
                    <div className="alert alert-info mb-3">
                      <h6>Términos y Condiciones del Préstamo:</h6>
                      <ul className="mb-0 small">
                        <li>El préstamo tiene una duración máxima de 15 días</li>
                        <li>El libro debe ser devuelto en las mismas condiciones</li>
                        <li>En caso de pérdida o daño, el usuario deberá reponer el libro</li>
                        <li>No se permite renovar el préstamo si hay lista de espera</li>
                        <li>El retraso en la devolución genera multa de $2.000 por día</li>
                        <li>El usuario es responsable del libro desde el momento del préstamo</li>
                        <li>Se requiere identificación válida para retirar el libro</li>
                      </ul>
                    </div>
                  )}
                  
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="acceptTerms"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="acceptTerms">
                      Acepto los términos y condiciones del préstamo *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-success w-100"
                    disabled={!acceptedTerms}
                  >
                    Solicitar Préstamo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}