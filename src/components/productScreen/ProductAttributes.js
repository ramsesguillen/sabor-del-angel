import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import { ProductPrice } from './ProductPrice';

export const ProductAttributes = () => {
    return (
        <Container className="mt-3 mb-3">
            <Row className="align-items-center justify-content-center">
                <Col lg={5} className="mb-2 m-lg-0">
                    <h3 className="mb-3">Presentaci<span className="texto-primario">ó</span>n</h3>
                    <img src="./assets/producto/alto-vacio.JPG" className="img-fluid rounded animate__animated animate__fadeInLeft" alt="alto-vacio"/>
                </Col>
                <Col lg={6} className="mb-2 m-lg-0">
                    <p><span className="font-weight-bold">Envasado al vacío: </span>consiste en retirar el aire del interior del envoltorio con el objetivo de extender el periodo de caducidad de un alimento al vacío, así mismo conservar sus propiedades organolépticas. </p>
                    <ProductPrice />
                </Col>
            </Row>
        </Container>
    )
}
