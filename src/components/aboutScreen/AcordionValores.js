import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Accordion } from 'react-bootstrap';

export const AcordionValores = () => {
    return (
        <Accordion defaultActiveKey="0">
            <div>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="font-weight-bold">
                    Responsabilidad
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <p>Con el cliente y la región, para entregar y hacer bien las cosas, cumplir con los consumidores de manera que se sientan satisfechos y se genere en la región el desarrollo y empleo para su gente.</p>
                </Accordion.Collapse>
            </div>
            <div>
                <Accordion.Toggle as={Button} variant="link" eventKey="1" className="font-weight-bold">
                    Compromiso
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <p>Un compromiso de entregar a todos los clientes un producto de calidad y diferenciado, de manera que todos los días los empleados sientan el compromiso de cumplir a tiempo, con dedicación y entregándolo todo en cada unidad de producto que se produce.</p>
                </Accordion.Collapse>
            </div>
            <div>
                <Accordion.Toggle as={Button} variant="link" eventKey="2" className="font-weight-bold">
                    Respeto por el cliente
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <p>Mantener siempre el respeto por el cliente con productos de excelente calidad, donde el cliente lo requiera y en el momento que lo pida.</p>
                </Accordion.Collapse>
            </div>
            <div>
                <Accordion.Toggle as={Button} variant="link" eventKey="3" className="font-weight-bold">
                    Honestidad
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <p>En todos los procesos financieros, administrativos y operativos la honestidad será el pilar fundamental, siendo así una empresa integra en todos y cada uno de sus procesos.</p>
                </Accordion.Collapse>
            </div>
        </Accordion>
    )
}
