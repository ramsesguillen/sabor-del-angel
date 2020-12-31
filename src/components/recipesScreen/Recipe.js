import React from 'react'
import { Footer } from '../ui/Footer'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import getRecipeById from '../../selectors/getRecipeById';

export const Recipe = ({ history}) => {

    const url = 'sabor-del-angel';

    const back = () => {
        if ( history.length <=2 ) {
            return <Redirect to={`/${url}`} />;
        } else {
            history.goBack();
        }
    }

    const { recetaId } = useParams();

    const recetas = getRecipeById( recetaId );

    if ( !recetas ) return back();

    const { title, img, ingredients, steps } = recetas;

    const handleClick = () => {
        back();
    }
    return (
        <main>
            <Container className="mt-3 mb-3">
                <h2 className=" mb-4">{ title }</h2>
                <Row className="justify-content-center align-items-center">
                    <Col lg={7} >
                        <img className="img-fluid rounded animate__animated animate__fadeInLeft"  src={`../assets/recetas/${img}`} alt={title} />
                    </Col>
                    <Col lg={5} >
                        <h4 className="mt-2 mt-lg-0">Ingredientes</h4>
                        <ul className="list-group list-group-flush">
                        {
                            ingredients.map( (ingrediente, index) => (
                                    <li key={index} className="list-group-item list-group-item-light">
                                        <span className="badge badge-primary badge-pill mr-2"> + </span>
                                        { ingrediente }
                                    </li>
                            ))
                        }
                        </ul>
                        <Button className="btn-secondario" onClick={ () => handleClick() }>
                            Regresar
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col lg={12} >
                        <h4 className="mt-2 mt-lg-0">Preparación</h4>
                        <ul className="list-group-flush">
                        {
                            steps.map( (step, index) => (
                                    <li key={index} className="list-group-item">
                                        <span className="badge badge-primary badge-pill mr-3">{ index + 1 }</span>
                                        { step}
                                    </li>
                            ))
                        }
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </main>
    )
}
