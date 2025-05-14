import React from 'react'

export default function Login() {
  return (
    <>
          <div className="container py-5">
            <div className="text-center mb-4">
            <h2 className="fw-bold">Inicia sesión</h2>
            <p>¿Aún no tienes una cuenta? <a href="./registerUser.html">Regístrate</a></p>
            </div>

            <div className="row justify-content-center">
            <div className="col-md-6">
                <form>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" required/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="Contraseña" required/>
                </div>
                <div className="d-flex justify-content-end">
                    <a type="button" className="btnSubmit btn btn-outline-primary" href="./maquetaIntegrador.html">
                    Iniciar sesión
                    </a>
                </div>
                </form>
            </div>
            </div>

            {/* <!-- Pie de página --> */}
            <div className="text-center mt-5 small text-muted">
            <a href="#">Términos de Uso</a> · 
            <a href="#">Política de Privacidad</a><br />
            Este sitio está protegido por reCAPTCHA Enterprise. Se aplican la 
            <a href="#">Política de Privacidad</a> y las 
            <a href="#">Condiciones de Servicio de Google</a>.
            </div>
        </div>
    </>
  )
}
