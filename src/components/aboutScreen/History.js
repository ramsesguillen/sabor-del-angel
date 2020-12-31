import React, { useState }  from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col  } from 'react-bootstrap';

import '../../index.css';

import { ModalHistory } from './ModalHistory';

export const History = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-center">
                <Col lg={5} className="rounded d-lg-flex flex-lg-column justify-content-lg-center historia mt-3 mt-lg-0">
                    <h3 className="mb-3">H<span className="texto-primario">i</span>storia</h3>
                    <img src="./assets/historia.JPG" className="d-lg-none img-fluid rounded animate__animated animate__fadeInRight" alt="historia"/>
                    <p className="mt-2">En 1982 se funda la Sociedad Cooperativa de Producción Pesquera Bahía la tijera,
                        formando un grupo con 18 socios certificándose con buenas prácticas, logrando constituirse como una cooperativa reconocida y así aprovechar el apoyo federal de CONAPESCA en la bahía de Puerto Ángel, Oaxaca, México. <span> </span>
                        <span className="link-modal" onClick={() => setModalShow(true)}>
                            Leer más...
                        </span>
                    </p>

                    <ModalHistory
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
                <Col lg={6} className="p-md-0 rounded">
                    <img src="./assets/historia.JPG" className="d-none d-lg-block img-fluid rounded animate__animated animate__fadeInRight" alt="historia"/>
                </Col>
            </Row>
        </Container>
    )
}
