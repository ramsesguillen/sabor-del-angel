import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';

import '../../index.css';

export const CarouselUI = () => {
    return (
        <div className="carousel-home mb-3">
            <Carousel>
                <Carousel.Item interval={3500}>
                    <img
                        className="d-block w-100 animate__animated animate__fadeInDown"
                        src="./assets/inicio/2.JPG"
                        alt="First slide"
                    />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <h1 className="text-uppercase texto-primario mb-2">Sociedad Cooperativa Bahía la Tijera</h1>
                                <div className="col-6"></div>
                                <div className="col-6 mb-3 d-none d-md-block">
                                    <p>Líder en el sector pesquero y uno de los principales productores en alimentos procesados del mar, así́ como la empresa de mayor crecimiento en la comercialización de pescado ahumado en México.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="./assets/inicio/3.jpeg"
                        alt="Third slide"
                    />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <h2 className="text-uppercase texto-primario font-weight-bold mb-3">ven y conoce nuestras instalaciones</h2>
                                    <div className="col-7 mb-3 bg-menu rounded d-none d-md-block">
                                        <p className="m-0 p-4">Carretera Puerto Ángel Pochutla km 246.5 SN San Martin Puerto Ángel a 20 mts de la cruz de San Martin, San Pedro Pochutla, Oaxaca C.P. 70902.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="./assets/inicio/1.JPG"
                        alt="Third slide"
                    />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <h2 className="text-uppercase texto-primario font-weight-bold mb-3">!Cuidado del medio ambiente!</h2>
                                    <div className="col-7 mb-3 d-none d-md-block">
                                        <p>Sabor del ángel es una empresa responsable con el mar, tomando de ella lo que crea necesario para su producción, así como la calidad de captura de peces de manera artesanal, mano a mano con cuerda para que estos ejemplares no sean lastimados y así ofrecer una carne de calidad.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
