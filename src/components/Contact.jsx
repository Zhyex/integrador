import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="container-fluid contacto">
      <div className="row g-3 align-items-center my-3">
        <div className="col-auto">
          <h3>Únete a nuestra comunidad de noticias</h3>
        </div>
        <div className="col-auto">
          <input type="password" id="inputPassword6" className="form-control" placeholder="Ingresa tu email aquí"/>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Suscribirse ahora</button>
        </div>
      </div>
      <div className="row">
        <h3>Contacto </h3>
        <p>Si tienes alguna duda, no dudes en ponerte en contacto con nosotros</p>
      </div>
      <div className="row">
        <i className="bi bi-geo-alt-fill" style={{"width":"30px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
        </i>Medellín (Ant)
      </div>
      <div className="row">
        <i className="bi bi-telephone-fill" style={{"width":"30px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
        </i>+57 3012336586
      </div>
      <div className="row">
        <i className="bi bi-envelope-fill" style={{"width":"30px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
          </svg>
        </i>Email: mail@mail.com
      </div>
      <div className="row my-3">
        <form>
          <div className="mb-2">
            <label for="exampleInputEmail1" className="form-label">Nombre</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-2">
            <label for="exampleInputEmail1" className="form-label">Correo</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-2">
            <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
    </>
  )
}
