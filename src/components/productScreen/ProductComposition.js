import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col  } from 'react-bootstrap';

export const ProductComposition = () => {
    return (
        <Container className="mt-3 mb-3">
            <Row className="align-items-center">
                <Col lg={5} className="mb-2 m-md-0">
                    <h3 className="mb-3">Atributos<span className="texto-primario"> y </span>composición</h3>
                    <img src="./assets/producto/atributos-composicion.JPG" className="img-fluid rounded animate__animated animate__fadeInLeft" alt="alto-vacio"/>
                </Col>
                <Col lg={6} className="mb-2 m-md-0">
                    <p>El pescado ahumado constituye una fuente de alto valor nutricional aportando los siguientes nutrientes:</p>
                    <ul>
                        <li>Hierro</li>
                        <li>Proteínas</li>
                        <li>Calcio</li>
                        <li>Fibra</li>
                        <li>Potasio</li>
                        <li>Omega-3</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
