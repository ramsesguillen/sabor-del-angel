import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export const Schedule = () => {
    return (
        <Container className="horario my-4 p-4">
            <Row className="justify-content-center">
                <Col xs={12} className="d-flex flex-column align-items-center">
                    <h2 className="text-uppercase">Abrimos los días</h2>
                    <ul className="list-group list-group-horizontal-xl text-center">
                        <li className="list-group-item"><h4> Lunes</h4></li>
                        <li className="list-group-item"><h4> Miercoles</h4></li>
                        <li className="list-group-item"><h4> Viernes</h4></li>
                    </ul>
                </Col>
                <Col>
                    <Container>
                        <Row className="justify-content-center ">
                            <Col md={5} className="mt-4">
                                <div className="horario-pochutla rounded p-4">
                                    <h3 className="texto-secundario text-center mb-4">Pochutla</h3>
                                    <ul className="list-unstyled texto-secundario">
                                        <li className="p-2">
                                            <h3>1:20 - 3:30</h3>
                                        </li>
                                        <li className="p-2">
                                            <h3>1:20 - 3:30</h3>
                                        </li>
                                        <li className="p-2">
                                            <h3>1:20 - 3:30</h3>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={5} className="mt-4">
                                <div className="horario-pt-angel rounded p-4">
                                    <h3 className="texto-secundario text-center mb-4">Puerto Ángel</h3>
                                    <ul className="list-unstyled texto-secundario">
                                        <li className="p-2">
                                            <h3>12:45 - 3:00</h3>
                                        </li>
                                        <li className="p-2">
                                            <h3>12:45 - 3:00</h3>
                                        </li>
                                        <li className="p-2">
                                            <h3>12:45 - 3:00</h3>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
