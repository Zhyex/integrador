import React from 'react'

export default function Register() {
  return (
    <>
        <div className="container py-5">
            <div className="text-center mb-4">
            <h2 className="fw-bold">Regístrate</h2>
            <p>¿Ya tienes una cuenta? <a href="./loginUser.html">Inicia sesión</a></p>
            </div>

            <div className="row justify-content-center">
            <div className="col-md-6">
                <form>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" required/>
                </div>
                <div className="mb-3">
                    <label for="confirmEmail" className="form-label">Confirma tu email</label>
                    <input type="email" className="form-control" id="confirmEmail" placeholder="Confirma tu email" required/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Elige una contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="Contraseña" required/>
                </div>
                <div className="mb-4">
                    <label for="confirmPassword" className="form-label">Confirma la contraseña</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirma la contraseña" required/>
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
