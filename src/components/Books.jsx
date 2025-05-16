import React from 'react'
import Book from './Book';


let books = [
    {
        "codlibro":1,
        "nomlibro": "The imaginary orchestra",
        "genero": "Fantasy",
        "autor" : "Jamie Olsen",
        "url": "https://static.wixstatic.com/media/84770f_48ec2015a53d4179b24873f33cf430d1~mv2_d_2005_2621_s_2.jpg/v1/fill/w_275,h_367,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_48ec2015a53d4179b24873f33cf430d1~mv2_d_2005_2621_s_2.jpg",
        "activo": "SI",
    },
    {
        "codlibro":2,
        "nomlibro": "Little House Big House",
        "genero": "Fantasy",
        "autor" : "Jamie Olsen",
        "url": "https://static.wixstatic.com/media/84770f_8567019db8124aeaba9804c88de1311d~mv2_d_2005_2621_s_2.jpg/v1/fill/w_275,h_367,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_8567019db8124aeaba9804c88de1311d~mv2_d_2005_2621_s_2.jpg",
        "activo": "SI",
    },
    {
        "codlibro":3,
        "nomlibro": "Fish Tales",
        "genero": "Fantasy",
        "autor" : "Jamie Olsen",
        "url": "https://static.wixstatic.com/media/ea26fd_d52240743f114a90930b289be3fc3116~mv2_d_2005_2621_s_2.jpg/v1/fill/w_275,h_367,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea26fd_d52240743f114a90930b289be3fc3116~mv2_d_2005_2621_s_2.jpg",
        "activo": "SI",
    },{
        "codlibro":4,
        "nomlibro": "The Way to Magic Land",
        "genero": "Fantasy",
        "autor" : "Jamie Olsen",
        "url": "https://static.wixstatic.com/media/84770f_9cb6abe2c4b4461d9e756ec51dfa06dd~mv2_d_2005_2621_s_2.jpg/v1/fill/w_275,h_367,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_9cb6abe2c4b4461d9e756ec51dfa06dd~mv2_d_2005_2621_s_2.jpg",
        "activo": "SI",
    },
    {
        "codlibro":5,
        "nomlibro": "The missing snowman",
        "genero": "Fantasy",
        "autor" : "Jamie Olsen",
        "url": "https://static.wixstatic.com/media/84770f_abfde58fdf154278bb926af1cd8d0d10~mv2_d_2005_2621_s_2.jpg/v1/fill/w_275,h_367,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_abfde58fdf154278bb926af1cd8d0d10~mv2_d_2005_2621_s_2.jpg",
        "activo": "SI",
    },
    {
        "codlibro":6,
        "nomlibro": "My ocean tree",
        "genero": "Fantasy",
        "autor" : "Jamie Olsen",
        "url": "https://static.wixstatic.com/media/84770f_0166a659f6884377b83c2920dc8b0b56~mv2_d_2005_2621_s_2.jpg/v1/fill/w_275,h_367,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_0166a659f6884377b83c2920dc8b0b56~mv2_d_2005_2621_s_2.jpg",
        "activo": "SI",
    },
];

export default function Books() {
  return (
    <>
        <div className="container my-5">
            <h2 className="text-center mb-5 fw-bold">
                <span>Más libros de la aventura de Zoomie</span>
            </h2>
            
            <div className="row">
                {
                    books.map((data)=> <Book key={data.codlibro}  dataBook={data} /> )
                }
            </div>
        </div>        
    </>
  )
}
