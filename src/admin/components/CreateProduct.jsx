import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Aside from './Aside';

function CreateProduct() {
  const { codlibro } = useParams(); // Si existe, estamos en modo edición
  const isEditMode = Boolean(codlibro);
  const navigate = useNavigate();

  const [nomlibro, setNomlibro] = useState('');
  const [genero, setGenero] = useState('');
  const [autor, setAutor] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  // Cargar libro si estamos en modo edición
  useEffect(() => {
    const cargarLibro = async () => {
      if (!isEditMode) return;

      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/libros/id/${codlibro}`);
        if (!response.ok) throw new Error('Error al cargar el libro');
        const data = await response.json();
        setNomlibro(data.nomlibro || '');
        setGenero(data.genero || '');
        setAutor(data.autor || '');
        setUrl(data.url || '');
      } catch (error) {
        setMensaje(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    cargarLibro();
  }, [codlibro, isEditMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nomlibro || !genero || !autor || !url) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);
    setMensaje(null);

    try {
      const method = isEditMode ? 'PUT' : 'POST';
      const endpoint = isEditMode
        ? `http://localhost:3000/libros/${codlibro}`
        : 'http://localhost:3000/libros';

      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nomlibro,
          genero,
          autor,
          url,
          activo: 'SI',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al guardar el libro');
      }

      setMensaje(isEditMode ? 'Libro actualizado con éxito.' : 'Libro guardado con éxito.');

      if (isEditMode) {
        // Redirigir al dashboard tras editar
        setTimeout(() => navigate('/List'), 1000);
      } else {
        // Limpiar formulario si es nuevo
        setNomlibro('');
        setGenero('');
        setAutor('');
        setUrl('');
      }
    } catch (error) {
      setMensaje(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        <Aside />

        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <div className="container-fluid px-4">
              <h1 className="h3 mb-4 text-gray-800">
                {isEditMode ? 'Editar Libro' : 'Registrar Libro'}
              </h1>

              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="row">
                    {/* Formulario */}
                    <div className="col-md-7">
                      <form onSubmit={handleSubmit}>
                        {/* Nombre del libro */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="nombre-libro">
                            Nombre del libro
                          </label>
                          <input
                            type="text"
                            id="nombre-libro"
                            className="form-control"
                            value={nomlibro}
                            onChange={(e) => setNomlibro(e.target.value)}
                            placeholder="Escribe el nombre del libro"
                            required
                          />
                        </div>

                        {/* Género */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="genero-libro">
                            Género
                          </label>
                          <input
                            type="text"
                            id="genero-libro"
                            className="form-control"
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                            placeholder="Ejemplo: Ciencia ficción, Fantasía"
                            required
                          />
                        </div>

                        {/* Autor */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="autor-libro">
                            Autor
                          </label>
                          <input
                            type="text"
                            id="autor-libro"
                            className="form-control"
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                            placeholder="Nombre del autor"
                            required
                          />
                        </div>

                        {/* URL Imagen */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="url-libro">
                            URL de la imagen
                          </label>
                          <input
                            type="url"
                            id="url-libro"
                            className="form-control"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://ejemplo.com/imagen.jpg"
                            required
                          />
                        </div>

                        {mensaje && (
                          <div
                            className={`alert ${
                              mensaje.startsWith('Error')
                                ? 'alert-danger'
                                : 'alert-success'
                            }`}
                            role="alert"
                          >
                            {mensaje}
                          </div>
                        )}

                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={loading}
                        >
                          {loading
                            ? 'Guardando...'
                            : isEditMode
                            ? 'Actualizar libro'
                            : 'Guardar libro'}
                        </button>
                      </form>
                    </div>

                    {/* Imagen preview */}
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                      {url ? (
                        <img
                          id="imagen-pro"
                          src={url}
                          className="img-fluid rounded shadow-sm"
                          alt="Vista previa del libro"
                          style={{ maxHeight: '300px' }}
                          onError={(e) => {
                            e.target.src =
                              'https://via.placeholder.com/300x400?text=Imagen+no+disponible';
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: '300px',
                            height: '400px',
                            backgroundColor: '#eee',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#aaa',
                            borderRadius: '8px',
                          }}
                        >
                          Vista previa de la imagen
                        </div>
                      )}
                    </div>
                  </div>
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

export default CreateProduct;
