import React from 'react'

import { Modal,Button } from 'react-bootstrap';

export const ModalHistory = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    H<span className="texto-primario">I</span>STORIA
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>En 1982 se funda la Sociedad Cooperativa de Producción Pesquera Bahía la tijera, formando un grupo con 18 socios certificándose con buenas prácticas, logrando constituirse como una cooperativa reconocida y así aprovechar el apoyo federal de CONAPESCA en la bahía de Puerto Ángel, Oaxaca, México.</p>
                <p>En 2015 surge la idea de crear un proyecto que innove el uso del pescado barrilete, evitando posteriormente los intermediarios de marcas reconocidas, y que además estaban seguro que traería consigo una derrama económica. </p>
                <p>En 2018 el joven Mario de Jesús Cervantes Martínez, con tan sólo 25 años, funda la marca en colaboración de todos los socios: Bonito del Ángel. Sin mucha experiencia en el ámbito empresarial, pero con una habilidad nata para los asuntos comerciales, su interés por el proyecto se destacó por las actividades de producción, así como su iniciativa de emprender el proyecto.</p>
                <p>En 2019 la cooperativa Bahía la Tijera pide colaboración técnica al instituto tecnológico de salina cruz para poder desarrollar la estructura del proyecto. Definiendo así su instalación y proceso de ahumado.</p>
                <p>En 2020 se realiza un convenio con el instituto tecnológico de Pochutla, solicitando residentes para encaminar el proyecto con una visión de negocios. Logrando definir en este mismo año el proceso de ahumado, así como comercializar de manera local el producto, teniendo una buena aceptación por parte de los consumidores. </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="bg-menu">Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}
