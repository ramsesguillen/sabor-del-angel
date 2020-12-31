import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Card  } from 'react-bootstrap';

import { AcordionValores } from './AcordionValores';

export const Empresa = () => {
    return (
        <Container className="mt-3 mb-3">
            <Row>
                <Col md={6} lg={4} className="mb-2 m-md-0">
                    <Card className="sombra">
                        <Card.Img variant="top" src="./assets/empresa/mision.jpeg" />
                        <Card.Body>
                            <Card.Title>Mi<span className="texto-primario">s</span>ión</Card.Title>
                            <Card.Text>
                                Somos una empresa productora y comercializadora de pescado ahumado y derivados, comprometida a difundir productos alimenticios con alto valor nutricional y una óptima calidad en nuestros productos unificando la innovación, esfuerzo y profesionalismo.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-2 m-md-0">
                    <Card className="sombra" >
                        <Card.Img variant="top" src="./assets/empresa/vision.JPG" />
                        <Card.Body>
                            <Card.Title>Visió<span className="texto-primario">n</span></Card.Title>
                            <Card.Text>
                                Ser la empresa líder en la elaboración de productos procesados de origen marino 100% saludables a nivel mundial.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4} className="mb-2 m-md-0">
                    <Card className="sombra">
                        <Card.Img variant="top" src="./assets/empresa/valores.jpeg" />
                        <Card.Body>
                            <Card.Title>V<span className="texto-primario">a</span>lores</Card.Title>
                            {/* <Card.Text> */}
                                <AcordionValores />
                            {/* </Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
