import React from 'react';
import Aside from '../components/Aside'
import Content from '../components/Content'

function ProductList() {
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                type="search"
                className="form-control hide-focus border-0"
                placeholder="Buscar Producto"
              />
            </div>

            <button className="btn btn-primary">+ Crear Producto</button>
          </div>

          <div className="card shadow mb-4">
            <div className="card-body">
              <table className="table table-hover align-middle mb-0 bg-white">
                <thead className="bg-light">
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Aquí se insertarán las filas de productos */}
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
