import React from 'react'

import { Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const RecipeItem = ({ id, title, description, img }) => {
    const url = 'sabor-del-angel';
    return (
        <Col md={6} lg={4} className="mt-3 mb-3">
            <Card className="sombra">
                <Card.Img variant="top" src={`./assets/recetas/${img}`} />
                <Card.Body>
                    <Card.Title className="font-weight-bold"> { title }</Card.Title>
                    <Card.Text>
                        { description }
                    </Card.Text>
                    <NavLink
                                className="btn btn-success d-block"
                                exact
                                to={`../${url}/receta/${id}`}
                    >Ver receta completa</NavLink>
                </Card.Body>
            </Card>
        </Col>
    )
}
