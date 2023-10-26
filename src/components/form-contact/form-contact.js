import './form-contact.scss';

function formContact() {
    return (
        <>
            <div className="container">
                <div className="form-contact">
                    <form id="contact-form" method="post" role="form">
                        <h1>Contact</h1>

                        <p>Faites nous parvenir vos idées de projets ou vos questions en remplissant ce formulaire</p>

                        <div className="controls d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="form-floating">
                                        <input id="name" type="text" name="name" className="form-control" autoComplete="given-name" placeholder="name"  required="required" data-error="Firstname is required." />
                                        <label htmlFor="name">Prénom</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="form-floating">
                                        <input id="surname" type="text" name="surname" className="form-control" autoComplete="family-name" placeholder="Lastname" required="required" data-error="Lastname is required."/>
                                        <label htmlFor="surname">Nom</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-sm-3">
                                    <div className="form-floating">
                                        <input id="email" type="email" name="email" className="form-control" autoComplete="on" placeholder="Email" required="required" data-error="Valid email is required."/>
                                        <label htmlFor="email">Email</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="form-floating">
                                        <select id="need" name="need" className="form-select" required="required" data-error="Please specify your need.">
                                            <option>Projets</option>
                                            <option>Questions</option>
                                            <option>Autres demandes</option>
                                        </select>
                                        <label htmlFor="need">Votre demande</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <textarea id="floatingInput" name="message" className="form-control" placeholder="Message for me" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                        <label htmlFor="floatingInput">Précisez votre demande</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <input type="submit" className="btn btn-primary btn-send" value="Envoyer"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>    
            </div>
        </>
    );
}

export default formContact;