import React from 'react'

export default function Home() {
  return (
    <>
        <section className="container py-5">
            <h2 className="text-center fw-bold mb-4">Nuestras últimas aventuras</h2>
            <div className="text-center text-muted mb-5">
            <em>- Última publicación -</em>
            </div>
            <div className="row justify-content-center">
            {/* <!-- Tarjeta 1 --> */}
            <div className="col-md-5 col-lg-4 mb-4">
                <div className="card shadow-sm h-100">
                <img src="https://static.wixstatic.com/media/ea26fd_d52240743f114a90930b289be3fc3116~mv2_d_2005_2621_s_2.jpg/v1/fill/w_275,h_367,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea26fd_d52240743f114a90930b289be3fc3116~mv2_d_2005_2621_s_2.jpg" className="card-img-top" alt="Historias de peces"/>
                <div className="card-body text-center" style={{"backgroundColor": "#fddbd2"}}>
                    <h5 className="card-title"><em>Historias de peces</em></h5>
                    <p className="card-text">Préstalo ya</p>
                    <a href="#" className="btn btn-light">Ver detalles</a>
                </div>
                </div>
            </div>
            {/* <!-- Tarjeta 2 --> */}
            <div className="col-md-5 col-lg-4 mb-4">
                <div className="card shadow-sm h-100">
                <img src="https://static.wixstatic.com/media/84770f_9cb6abe2c4b4461d9e756ec51dfa06dd~mv2_d_2005_2621_s_2.jpg/v1/fill/w_275,h_367,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_9cb6abe2c4b4461d9e756ec51dfa06dd~mv2_d_2005_2621_s_2.jpg" className="card-img-top" alt="El camino al país mágico"/>
                <div className="card-body text-center" style={{"backgroundColor": "#fddbd2"}}>
                    <h5 className="card-title"><em>El camino al país mágico</em></h5>
                    <p className="card-text">Préstalo ya</p>
                    <a href="#" className="btn btn-light">Ver detalles</a>
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}
