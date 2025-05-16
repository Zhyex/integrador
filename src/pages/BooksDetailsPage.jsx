import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function BooksDetailsPage() {
  let {codlibro} = useParams();
  return (
    <>
      <Menu/>
        <div className="container py-4">
            {/* <!-- Navegación --> */}
            <nav className="mb-3">
            <a href="#" className="text-decoration-none text-muted">Inicio</a> /
            <a href="#" className="text-decoration-none text-muted">Libros</a> /
            <span className="text-dark">asdasdas</span>
            </nav>

            {/* <!-- Detalle del producto --> */}
            <div className="row g-5">
            {/* <!-- Imagen del producto --> */}
            <div className="col-md-6">
                <img src="https://static.wixstatic.com/media/84770f_48ec2015a53d4179b24873f33cf430d1~mv2_d_2005_2621_s_2.jpg/v1/fill/w_275,h_367,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_48ec2015a53d4179b24873f33cf430d1~mv2_d_2005_2621_s_2.jpg" alt="La orquesta imaginaria" className="img-fluid rounded"/>
                <p className="mt-3 text-muted">Descripción del producto. Lugar ideal para agregar más detalles sobre tu producto como su tamaño, materiales, instrucciones de uso y mantenimiento.</p>
            </div>

            {/* <!-- Información del producto --> */}
            <div className="col-md-6">
                <h2 className="fw-bold">asdasdasdas</h2>
                <p className="text-muted mb-1">SKU: 0001</p>
                {/* <!-- Control de cantidad --> */}
                <div className="mb-3">
                <label for="cantidad" className="form-label">Cantidad *</label>
                <div className="input-group" style={{"width": "150px"}}>
                    <button className="btn btn-outline-secondary" type="button">−</button>
                    <input type="number" className="form-control text-center" id="cantidad" value="1" min="1" max="1"/>
                    <button className="btn btn-outline-secondary" type="button">+</button>
                </div>
                </div>

                {/* <!-- Botón de añadir al carrito --> */}
                <div className="d-grid mb-4" style={{"max-width": "200px"}}>
                <button className="btn btn-outline-danger">Agregar para préstamo</button>
                </div>

                {/* <!-- Acordeón para más detalles --> */}
                <div className="accordion" id="accordionDetalles">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingInfo">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#infoProducto" aria-expanded="true">
                        Información
                    </button>
                    </h2>
                    <div id="infoProducto" className="accordion-collapse collapse show" data-bs-parent="#accordionDetalles">
                    <div className="accordion-body">
                        Se entrega en buen estado, con tarjeta de historial del libro
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingPolitica">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#politicaReembolso">
                        Política de garantía
                    </button>
                    </h2>
                    <div id="politicaReembolso" className="accordion-collapse collapse" data-bs-parent="#accordionDetalles">
                    <div className="accordion-body">
                        <ul>
                        <li>Se presta por un máximo de 15 días calendario.</li>
                        <li>Se cobra una multa acumulable por cada día de demora posterior a la fecha de fin de préstamo.</li>
                        </ul>            
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEnvio">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#infoEnvio">
                        Recolección de libro
                    </button>
                    </h2>
                    <div id="infoEnvio" className="accordion-collapse collapse" data-bs-parent="#accordionDetalles">
                    <div className="accordion-body">
                        Se debe retornar el libro únicamente por la persona que solicitó el préstamo.
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      <Footer/>
    </>
  )
}
