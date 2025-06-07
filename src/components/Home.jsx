import React, { useState, useEffect } from 'react'

export default function Home() {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener libros aleatorios
  const getRandomBooks = (books, count = 2) => {
    const shuffled = [...books].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Función para obtener los libros desde la API
  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await fetch('http://localhost:3000/libros'); // Obtener todos los libros
        const data = await response.json();
        
        // Seleccionar 2 libros aleatorios
        const librosAleatorios = getRandomBooks(data, 2);
        setLibros(librosAleatorios);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los libros:', error);
        setLoading(false);
      }
    };

    fetchLibros();
  }, []);

  // Función para refrescar los libros aleatorios
  const refreshRandomBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/libros');
      const data = await response.json();
      const librosAleatorios = getRandomBooks(data, 2);
      setLibros(librosAleatorios);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar los libros:', error);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Sección de Libros Destacados */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="flex-grow-1 text-center">
            <h2 className="fw-bold mb-4">Libros y más libros</h2>
            <div className="text-muted">
              <em>- Descubre nuestras recomendaciones aleatorias -</em>
            </div>
        </div> 
          <button 
            className="btn btn-outline-secondary btn-sm ms-3"
            onClick={refreshRandomBooks}
            disabled={loading}
            title="Mostrar otros libros aleatorios"
          >
            🔄
          </button>
        </div>
        
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-3">Cargando libros...</p>
          </div>
        ) : (
          <div className="row justify-content-center">
            {libros.map((libro) => (
              <div key={libro.codlibro} className="col-12 col-md-6 mb-4">
                <div className="card shadow border h-100" style={{borderColor: '#dee2e6', borderWidth: '2px'}}>
                  <img 
                    src={libro.url || 'https://via.placeholder.com/200x300?text=Sin+Imagen'} 
                    alt={libro.nomlibro}
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
                  <div className="card-body text-center p-4 d-flex flex-column">
                    <h3 className="fs-5 mt-2 mb-3 text-dark">{libro.nomlibro}</h3>
                    <p className="text-muted mb-2" style={{fontSize: '0.9rem'}}>
                      <strong>Autor:</strong> {libro.autor}
                    </p>
                    <p className="text-muted mb-4" style={{fontSize: '0.9rem'}}>
                      <strong>Género:</strong> {libro.genero}
                    </p>
                    <div className="mt-auto">
                      <p className="text-muted mb-2" style={{fontSize: '0.8rem'}}>Disponible para préstamo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Sección de Frases Célebres */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4">Frases Célebres de la Literatura</h2>
        <div className="text-center text-muted mb-5">
          <em>- Palabras que inspiran el alma lectora -</em>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4" style={{"backgroundColor": "#f8f9fa"}}>
              <div className="card-body text-center p-4">
                <blockquote className="blockquote mb-3">
                  <p className="mb-0 fs-5 fst-italic">"Un lector vive mil vidas antes de morir. El hombre que nunca lee vive sólo una."</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <cite title="George R.R. Martin">George R.R. Martin</cite>
                </figcaption>
              </div>
            </div>
            
            <div className="card shadow-sm mb-4" style={{"backgroundColor": "#fff3cd"}}>
              <div className="card-body text-center p-4">
                <blockquote className="blockquote mb-3">
                  <p className="mb-0 fs-5 fst-italic">"Los libros son una droga de la que no quiero curarme."</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <cite title="Virginia Woolf">Virginia Woolf</cite>
                </figcaption>
              </div>
            </div>
            
            <div className="card shadow-sm mb-4" style={{"backgroundColor": "#d1ecf1"}}>
              <div className="card-body text-center p-4">
                <blockquote className="blockquote mb-3">
                  <p className="mb-0 fs-5 fst-italic">"Hay más tesoros en los libros que en todo el botín de los piratas de la Isla del Tesoro."</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <cite title="Walt Disney">Walt Disney</cite>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección sobre el Amor a la Lectura */}
      <section className="container py-5" style={{"backgroundColor": "#fddbd2"}}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center fw-bold mb-4">El Amor Eterno por la Lectura</h2>
            <div className="text-center mb-4">
              <em>- Un viaje sin fin hacia el conocimiento -</em>
            </div>
            
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="card-title text-primary mb-3">📚 Mundos Infinitos</h5>
                    <p className="card-text">
                      Cada libro es una puerta hacia universos inexplorados. En sus páginas encontramos 
                      aventuras épicas, romances inolvidables, misterios por resolver y sabiduría ancestral. 
                      La lectura nos permite viajar sin movernos, conocer sin salir de casa.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="card-title text-success mb-3">🌱 Crecimiento Personal</h5>
                    <p className="card-text">
                      Leer es alimentar el alma y expandir la mente. Cada página nos transforma, 
                      cada historia nos enseña sobre la condición humana. Los libros son maestros 
                      silenciosos que nos acompañan en nuestro crecimiento personal y espiritual.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="card-title text-warning mb-3">✨ Magia de las Palabras</h5>
                    <p className="card-text">
                      Las palabras tienen un poder mágico: pueden hacernos reír, llorar, soñar y reflexionar. 
                      Un buen libro es como un amigo fiel que siempre está ahí cuando lo necesitamos, 
                      ofreciéndonos consuelo, inspiración y compañía.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="card-title text-danger mb-3">❤️ Pasión Eterna</h5>
                    <p className="card-text">
                      El amor por la lectura es una pasión que trasciende el tiempo. Una vez que 
                      descubres la magia de los libros, se convierte en una adicción hermosa y 
                      enriquecedora que te acompañará toda la vida, llenando cada día de nuevas emociones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <div className="card border-0" style={{"backgroundColor": "rgba(255,255,255,0.8)"}}>
                <div className="card-body p-4">
                  <h4 className="text-primary mb-3">💫 Invitación a Leer</h4>
                  <p className="fs-5 mb-0">
                    Te invitamos a sumergirte en nuestro catálogo de libros y descubrir historias 
                    que cambiarán tu perspectiva del mundo. Cada libro es una nueva aventura esperando 
                    a ser vivida. <strong>¡El próximo gran descubrimiento literario te está esperando!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Final con Cita Inspiradora */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-14 text-center">
            <div className="card shadow-lg border-0" style={{"background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}>
              <div className="card-body p-5 text-white">
                <h3 className="mb-4">📖 Reflexión Final</h3>
                <blockquote className="blockquote mb-4">
                  <p className="fs-4 fst-italic mb-0">
                    "La lectura es a la mente lo que el ejercicio es al cuerpo"
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer text-light">
                  <cite title="Joseph Addison">Joseph Addison</cite>
                </figcaption>
                <div className="mt-9">
                  <p className="lead mb-0">
                    Ejercita tu mente, alimenta tu alma, expande tus horizontes. 
                    <br/>
                    <strong>¡Comienza tu próxima aventura literaria hoy!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}