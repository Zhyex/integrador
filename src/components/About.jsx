import React from 'react'

export default function About() {
  return (
    <>
        <section className="container-fluid py-5">
            <div className="container" >
                <h1 className="text-center fw-bold mb-5" style={{"color": "#0a3042"}}>Acerca de</h1>
                
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="position-relative">
                            <img src="https://www.w3schools.com/w3images/map.jpg" className="w3-image w3-greyscale" style={{"width":"100%"}} />
                        </div>
                        
                        <div className="text-center my-4">
                            <h2 className="text-primary fw-normal">- Libros Mágicos -</h2>
                        </div>
                        
                        <div className="text-center px-4">
                            <p>
                                Fundada en 2015, Libros Mágicos nació con la misión de fomentar el amor por la lectura en niños y jóvenes a través de historias cautivadoras e ilustraciones de calidad. Nos especializamos en la publicación y distribución de libros infantiles y juveniles que estimulan la imaginación, promueven valores positivos y crean experiencias de lectura memorables para toda la familia.
                                Nuestro catálogo incluye colecciones como "La aventura de Zuri", cuentos clásicos reinventados, libros ilustrados y novelas para primeros lectores. Cada título es cuidadosamente seleccionado y diseñado para inspirar un amor duradero por los libros y convertir la lectura en una aventura fascinante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
