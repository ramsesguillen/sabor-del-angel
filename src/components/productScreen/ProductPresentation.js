import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col  } from 'react-bootstrap';
import { ProductPrice } from './ProductPrice';

export const ProductPresentation = ({ precio }) => {
    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-center align-items-center">
                <Col lg={5} className="pescado-ahumado">
                    <h2 className="mb-3">P<span className="texto-primario">e</span>scado Ahum<span className="texto-primario">a</span>do</h2>
                    <img src="./assets/producto/producto.JPG" className="d-lg-none img-fluid rounded animate__animated animate__fadeInRight" alt="PRODUCTO"/>
                    <p className="mt-2">El pescado ahumado es un pescado que ha sido curado mediante un proceso aproximado de 8 horas hasta llegar al producto final, y que es ahumado a través de casacara de coco.</p>
                    { ( precio ) && <ProductPrice />}
                </Col>
                <Col lg={6} className="imagen-pescado-ahumado">
                    <img src="./assets/producto/producto.JPG" className="d-none d-lg-block img-fluid rounded animate__animated animate__fadeInRight" alt="PRODUCTO"/>
                </Col>
            </Row>
        </Container>
    )
}
