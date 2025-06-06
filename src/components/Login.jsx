import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Login({onLogin}) {
  let{register,handleSubmit, formState: {errors}} = useForm();
  let navigate = useNavigate();
  let onSubmited = async (data) => {
    console.log(data)
    try {
      let response = await axios.post('http://localhost:3000/login',data);
      console.log(response)
      const usuario = response.data.usuario;
      localStorage.setItem('auth', 'true');
      localStorage.setItem('tipousuario', usuario.tipousuario);
      localStorage.setItem('nomusuario',usuario.nomusuario);
      alert(`Bienvenido ${response.data.usuario.nomusuario}`)
      onLogin();
      // navigate('/Dashboard')
      if(response.data.usuario.tipousuario == "admin"){
        navigate("/Dashboard")
      }else{
        navigate("/")
      }
    } catch (error) {
      console.error(error)
    }
  }



  return (
    <>
          <div className="container py-5">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Inicia sesión</h2>
              <p>¿Aún no tienes una cuenta? <Link to="/Register">Regístrate</Link></p>
            </div>

            <div className="row justify-content-center">
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmited)}>
                  <div className="mb-3">
                      <label for="email" className="form-label">Email</label>
                      <input type="email" {...register("emailusuario",{required:true})} className="form-control" id="email"/>
                      {errors.emailusuario && <p className='text-danger'>Debes escribir un correo</p>}
                  </div>
                  <div className="mb-3">
                      <label for="password" className="form-label">Contraseña</label>
                      <input type="password" {...register("password",{required:true})} className="form-control" id="password"/>
                      {errors.password && <p  className='text-danger'>La contraseña es obligatoria</p>}
                  </div>
                  <div className="d-flex justify-content-end">
                      <button type="submit" className="btnSubmit btn btn-outline-primary">
                      Iniciar sesión
                      </button>
                  </div>
                </form>
            </div>
            </div>

            {/* <!-- Pie de página --> */}
            <div className="text-center mt-5 small text-muted">
            <Link to="#">Términos de Uso</Link> · 
            <Link to="#">Política de Privacidad</Link><br />
            Este sitio está protegido por reCAPTCHA Enterprise. Se aplican la 
            <Link to="#">Política de Privacidad</Link> y las 
            <Link to="#">Condiciones de Servicio de Google</Link>.
            </div>
        </div>
    </>
  )
}
