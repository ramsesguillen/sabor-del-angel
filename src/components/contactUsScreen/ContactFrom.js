import React from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

// import './ContactUs.css';

export default function ContactUs() {

    const [emailStatus, setEmailStatus] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_00jmtoe', 'template_9j7vfj4', e.target, 'user_QxefvSdyOc8G59rNoXDkX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        setEmailStatus( true );
        setTimeout(() => {
            setEmailStatus( false );
        }, 4000);
    }

  return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12 cool-md-8 col-lg-6">
                    <h3 className="mb-3 text-center">Evianos un C<span className="texto-primario">o</span>rreo</h3>
                    {
                        emailStatus &&
                        <div className="alert alert-success my-3 text-center p-3">
                            <p>&#128515; &#128588; &#128588; &#128588; &#128588;</p>
                            <p>!Tu correo ha sido enviado exitosamente!</p>
                        </div>
                    }
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="hidden" name="contact_number"/>
                            <label><span className="texto-primario">*</span> Nombre:</label>
                            <input className="form-control" type="text" name="from_name" required/>
                        </div>
                        <div className="form-group">
                            <label><span className="texto-primario">*</span> Email:</label>
                            <input className="form-control" type="email" name="email_user" required/>
                        </div>
                        <div className="form-group">
                            <label><span className="texto-primario">*</span> Asunto:</label>
                            <textarea className="form-control" name="message" required/>
                        </div>
                        <div className="form-group">
                            <label>Telefono</label>
                            <small> (Opcional):</small>
                            <input type="number" className="form-control" name="phone" />
                        </div>
                        <input type="submit" value="Enviar" className="btn btn-success btn-block" />
                    </form>
                </div>
            </div>
        </div>
    );
}