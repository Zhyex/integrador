import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
        <div className="container py-5">
            <div className="text-center mb-4">
            <h2 className="fw-bold">Regístrate</h2>
            <p>¿Ya tienes una cuenta? <Link to="/Login">Inicia sesión</Link></p>
            </div>

            <div className="row justify-content-center">
            <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" required/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" required/>
                    </div>
                    <div className="mb-3">
                        <label for="direccion" className="form-label">Dirección de residencia</label>
                        <input type="text" className="form-control" id="direccion" required/>
                    </div>
                    <div className="mb-4">
                        <label for="celular" className="form-label">Celular</label>
                        <input type="tel" className="form-control" id="celular" required/>
                    </div>
                    <div className="mb-4">
                        <label for="usuarioTipo" className="form-label">Tipo de usuario</label>
                        <input type="tel" className="form-control" id="usuarioTipo" required/>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-outline-primary">Registrarme</button>
                    </div>
                </form>
            </div>
            </div>

            <div className="text-center mt-5 small text-muted">
            * Al registrarte, aceptas nuestros <a href="#">Términos de Uso</a> y reconoces haber leído nuestra <a href="#">Política de Privacidad</a>.<br/>
            Este sitio está protegido por reCAPTCHA Enterprise. Se aplican la <a href="#">Política de Privacidad</a> y las <a href="#">Condiciones de Servicio de Google</a>.
            </div>
        </div>
    </>
  )
}
