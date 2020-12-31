import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, OverlayTrigger, Tooltip  } from 'react-bootstrap';

import '../../index.css';

export const Footer = () => {

    const date = new Date().getFullYear();
    return (
        <footer className="site-footer mt-4">
            <Container>
                <Row className="align-items-center pt-5">
                    <Col className="">
                        <ul className="list-group list-group-flush font-weight-bold">
                            <li className="list-group-item texto-primario"><i className="fas fa-phone-square"></i>958-106-58-44</li>
                            <li className="list-group-item texto-primario"><i className="fas fa-envelope-square"></i>pescadoahumado246@gmail.com</li>
                            <li className="list-group-item texto-primario"><i className="fas fa-map-marked-alt"></i>Carretera Puerto Ángel Pochutla km 246.5 SN San Martin Puerto Ángel a 20 mts de la cruz de San Martin, San Pedro Pochutla, Oaxaca C.P. 70902.</li>
                        </ul>
                    </Col>
                    <Col className="p-2 justify-content-center align-items-center text-center redes-sociales">
                        <a href="https://m.facebook.com/Sabor-del-%C3%80ngel-100398554902922/" target="_blank"  rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                        <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip>958-187-02-32</Tooltip>}
                        >
                                <i className="fab fa-whatsapp-square"></i>
                        </OverlayTrigger>
                        <i className="fab fa-instagram-square"></i>
                    </Col>
                </Row>
                <Col className="mt-5">
                    <p className="text-center m-0 texto-secundario pb-3">Sabor del Ángel - Todos los derechos reservados { date } &copy;</p>
                </Col>
            </Container>
        </footer>
    )
}
