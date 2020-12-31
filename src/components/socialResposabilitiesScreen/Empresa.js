import React from 'react'
import image from './responsabilidad-social.JPG'

export const Empresa = () => {
    return (
        <div className="rounded-bottom"
            style={ {
                backgroundImage: `url("${image}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width:'100%',
                height:'90vh',
                color:'white'
            }}>

            <div className="row h-100 w-100 m-0">
                <div className="col-md-6 mt-md-5 d-flex d-md-block">
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-8 d-flex flex-column justify-content-center d-md-block con-mar py-3 px-5 text-md-left ml-md-4">
                            <h3 className="mb-3"><span className="texto-primario">C</span>on el Mar</h3>
                            <p className="m-0">Sabor del ángel es una empresa responsable con el mar, tomando de ella lo que crea necesario para su producción, así como la calidad de captura de peces de manera artesanal, mano a mano con cuerda para que estos ejemplares no sean lastimados y así ofrecer una carne de calidad.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-flex flex-md-column justify-content-md-end mb-5">
                    <div className="row justify-content-md-end">
                        <div className="col-12 col-md-10 col-lg-8 con-sociedad py-3 px-5 text-md-right mr-md-4">
                            <h3 className="mb-3">Con la socieda<span className="texto-primario">d</span></h3>
                            <p className="m-0">Sabor del Ángel es una empresa comprometida con la sociedad y preocupada por apoyar a la comunidad de los pescadores más desprotegidos de la costa oaxaqueña. Año con año participan en el programa playas limpias, así como también toman acciones para el medio ambiente, calidad de vida en el trabajo, vinculación con la comunidad y ética empresarial.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
