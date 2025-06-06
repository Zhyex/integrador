import React from 'react'
import { Link } from 'react-router-dom';

export default function Book({dataBook}) {
    // destructuring
    let {codlibro,nomlibro,genero,autor,url,activo} = dataBook;
  return (
    <>
        {/* <!-- Tarjeta --> */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-0">
                <Link to={`/Books/${codlibro}`}>
                    <img src={url} alt="La orquesta imaginaria" className="img-fluid rounded"/>
                </Link>
                <div className="card-body text-center p-2">
                    <Link to={`/Books/${codlibro}`}>
                        <h3 className="fs-6 mt-2">{nomlibro}</h3>
                        <p className="text-primary fw-bold mb-0">Ver más</p>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
