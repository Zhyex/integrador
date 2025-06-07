import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from '../components/Aside';

function ProductList() {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate(); // ✅ Hook para navegación

  const fetchLibros = async (nombre = '') => {
    setLoading(true);
    setError(null);
    try {
      let url = 'http://localhost:3000/libros';
      if (nombre.trim() !== '') {
        const encodedNombre = encodeURIComponent(nombre.trim());
        url = `http://localhost:3000/libros/nombre/${encodedNombre}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404) {
          setLibros([]);
          setLoading(false);
          return;
        }
        throw new Error('Error al cargar libros');
      }
      const data = await response.json();
      setLibros(Array.isArray(data) ? data : [data]);
    } catch (err) {
      setError(err.message);
      setLibros([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLibros(searchTerm);
  }, [searchTerm]);

  const handleEditar = (codlibro) => {
    navigate(`/editar/${codlibro}`); // ✅ Navegación usando React Router
  };

  const handleToggleActivo = async (libro) => {
    const nuevoEstado = libro.activo === 'SI' ? 'NO' : 'SI';
    try {
      const response = await fetch(`http://localhost:3000/libros/${libro.codlibro}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomlibro: libro.nomlibro,
          genero: libro.genero,
          autor: libro.autor,
          url: libro.url,
          activo: nuevoEstado,
        }),
      });
      if (!response.ok) throw new Error('Error al actualizar el libro');
      fetchLibros(searchTerm);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCrear = () => {
    navigate('/create'); // ✅ Navegación a crear libro
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        <Aside />
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <div className="container-fluid px-4">
              <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="input-group rounded-pill border overflow-hidden w-50">
                  <span className="input-group-text bg-white border-0 pe-1">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="search"
                    className="form-control hide-focus border-0"
                    placeholder="Buscar Libro"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>

                <button className="btn btn-primary" onClick={handleCrear}>
                  + Crear Libro
                </button>
              </div>

              <div className="card shadow mb-4">
                <div className="card-body">
                  {loading && <p>Cargando libros...</p>}
                  {error && <p className="text-danger">{error}</p>}

                  <table className="table table-hover align-middle mb-0 bg-white">
                    <thead className="bg-light">
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Género</th>
                        <th>Autor</th>
                        <th>Imagen</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {libros.length === 0 && !loading && (
                        <tr>
                          <td colSpan="7" className="text-center">
                            No hay libros para mostrar
                          </td>
                        </tr>
                      )}

                      {libros.map((libro, index) => (
                        <tr
                          key={libro.codlibro}
                          style={{ opacity: libro.activo === 'NO' ? 0.6 : 1 }}
                        >
                          <td>{index + 1}</td>
                          <td>{libro.nomlibro}</td>
                          <td>{libro.genero}</td>
                          <td>{libro.autor}</td>
                          <td>
                            {libro.url ? (
                              <img
                                src={libro.url}
                                alt={libro.nomlibro}
                                style={{
                                  width: '60px',
                                  height: '80px',
                                  objectFit: 'cover',
                                  borderRadius: '4px',
                                }}
                                onError={(e) => {
                                  e.target.src = 'https://via.placeholder.com/60x80?text=No+Imagen';
                                }}
                              />
                            ) : (
                              <span>No disponible</span>
                            )}
                          </td>
                          <td>
                            <span
                              className={`badge ${
                                libro.activo === 'SI' ? 'bg-success' : 'bg-secondary'
                              }`}
                            >
                              {libro.activo === 'SI' ? 'Activo' : 'Inactivo'}
                            </span>
                          </td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-warning me-2"
                              onClick={() => handleEditar(libro.codlibro)}
                              title="Editar"
                            >
                              <i className="bi bi-pencil-fill"></i>
                            </button>
                            <button
                              className={`btn btn-sm ${
                                libro.activo === 'SI'
                                  ? 'btn-outline-danger'
                                  : 'btn-outline-success'
                              }`}
                              onClick={() => handleToggleActivo(libro)}
                              title={libro.activo === 'SI' ? 'Desactivar' : 'Activar'}
                            >
                              <i
                                className={`bi ${
                                  libro.activo === 'SI' ? 'bi-eye-slash' : 'bi-eye'
                                }`}
                              ></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <Content /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
