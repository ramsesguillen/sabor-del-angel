import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row } from 'react-bootstrap';
import { RecipeItem } from './RecipeItem';

export const RecipeList = ({recipes}) => {

    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-center animate__animated animate__fadeIn">
                {
                    recipes.map( ({ id, title, description, img }) => (
                        <RecipeItem
                            key={ id }
                            title={ title}
                            description={ description }
                            img={ img }
                            id={ id }
                        />
                    ))
                }
            </Row>
        </Container>
    )
}
