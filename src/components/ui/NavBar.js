import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav} from 'react-bootstrap';
import '../../index.css';

// import '../';

export const NavBar = () => {
    const url = 'sabor-del-angel';
    return (
        <div className="barra bg-menu d-flex justify-content-center justify-content-lg-between align-align-items-start align-items-lg-center">
            <div className="col-3 col-md-2 my-1 ml-4">
                <Link to={`/${url}`} >
                    <img className="logotipo"
                        src="./assets/logo.png"
                        alt="Salmon del alngel"
                    />
                </Link>
            </div>
            <div className="col d-flex justify-content-end mr-5">
                <Navbar expand="lg" className="d-flex bg-transparent my-2 justify-content-center navbar-dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="text-center mt-2">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={`/${url}`}
                            >
                                Inicio
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={`/${url}/sobre-nosotros`}
                            >
                                Sobre Nosotros
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={`/${url}/producto`}
                            >
                                Producto
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={`/${url}/recetas`}
                            >
                                Recetas
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={`/${url}/responsabilidad-social`}
                            >
                                Responsabilidad Social
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={`/${url}/contacto`}
                            >
                                Contacto
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}
