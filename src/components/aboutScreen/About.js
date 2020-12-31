import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col  } from 'react-bootstrap';

export const About = () => {
    return (
        <Container className="mt-3 mb-3">
            <Row className="align-items-center justify-content-center">
                <Col lg={5}>
                    <img src="./assets/inicio/3.jpeg" className="d-none d-lg-block img-fluid rounded animate__animated animate__fadeInLeft" alt="infraestructura"/>
                </Col>
                <Col lg={6} className="mt-3 mt-lg-0">
                    <h3 className="mb-3">¿Quiénes s<span className="texto-primario">o</span>mos?</h3>
                    <img src="./assets/inicio/3.jpeg" className="d-lg-none img-fluid rounded animate__animated animate__fadeInLeft" alt="infraestructura"/>
                    <p className="m-0 my-2">La Cooperativa SCPP Bahía La Tijera S.C.DE R.L. DE C.V. ES líder en el sector pesquero y uno de los principales productores en alimentos procesados del mar, así́ como la empresa de mayor crecimiento en la comercialización de pescado ahumado en México.</p>
                    <p className="m-0">La infraestructura de la cooperativa Bahía la Tijera se conforma de 1 planta de producción, 2 centros de distribución, 6 puntos de venta; en Puerto Ángel, Chachalaca, Tonameca, Puerto Escondido, Colotepec y Pochutla, así como una plantilla laboral de 15 colaboradores. La cooperativa fue fundada en 1914 y está procesando y comercializando desde febrero de 2020. </p>
                </Col>
            </Row>
        </Container>
    )
}
