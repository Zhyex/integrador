// components/Books.jsx
import React, { useState, useEffect } from 'react';
import Book from './Book';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3000/libros');
        if (!response.ok) throw new Error('Error al cargar los libros');

        const data = await response.json();
        setBooks(data);
        setError(null);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Cargando libros...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold">Catálogo de Libros</h2>
      <div className="row">
        {books.map((data) => (
          <Book key={data.codlibro} dataBook={data} />
        ))}
      </div>
    </div>
  );
}
