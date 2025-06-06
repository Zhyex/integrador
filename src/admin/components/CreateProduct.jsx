import React from 'react';
import Aside from './Aside'; // Asegúrate de importar tu componente Aside
import Content from './Content'; // Si lo usas al final del layout

function CreateProduct() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Aside />

        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <div className="container-fluid px-4">
              <h1 className="h3 mb-4 text-gray-800">Registrar Libro</h1>

              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="row">
                    {/* Formulario */}
                    <div className="col-md-7">
                      <form>
                        {/* Select de libros */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="productos-select">
                            Libros
                          </label>
                          <select id="productos-select" className="form-select">
                            <option defaultValue>Seleccionar un libro</option>
                            <option value="Hamburguesa">Seguimos, seguimos no paramos</option>
                            <option value="Picada">Picantes y amorosos</option>
                            <option value="Pasta">Empedernidos en un mundo loco</option>
                            <option value="Perro">Perros rabiosos por la sociedad</option>
                            <option value="Sanchipapa">Santos y más santos</option>
                            <option value="Chuzo">Chuzo pa Jossy con tanta tarea</option>
                            <option value="Pizza">Puños y revueltas por el Jossy cansón</option>
                            <option value="Pollo">Lord Jossy</option>
                            <option value="Tacos">Aprende con Jossy el eficiente</option>
                            <option value="Burrito">Burros los que prefieren Python y Java</option>
                          </select>
                        </div>

                        {/* Precio input */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="precio-pro">Precio</label>
                          <input type="number" id="precio-pro" className="form-control" />
                        </div>

                        {/* Stock input */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form6Example6">Stock</label>
                          <input type="number" id="form6Example6" className="form-control" />
                        </div>

                        {/* Descripción textarea */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form6Example7">Descripción</label>
                          <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                        </div>

                        {/* Botón */}
                        <button type="button" className="btn btn-primary btn-block">
                          Guardar libro
                        </button>
                      </form>
                    </div>

                    {/* Imagen */}
                    <div className="col-md-5 d-flex align-items-center">
                      <img
                        id="imagen-pro"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGS0gRXSA0JUkZ6PtRkLkw9L5YPxEqQ21bw&s"
                        className="img-fluid rounded shadow-sm"
                        alt="Vista previa del libro"
                      />
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
