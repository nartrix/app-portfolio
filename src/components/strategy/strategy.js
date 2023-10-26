import './strategy.scss';
import tracé1 from '../../assets/Portfolio XD/tracé1.png';
import tracé2 from '../../assets/Portfolio XD/tracé2.png';
import tracé3 from '../../assets/Portfolio XD/tracé cerclé.png';
import dotted1 from '../../assets/Portfolio XD/dotted1.png';
import dotted2 from '../../assets/Portfolio XD/dotted2.png';
import gear from '../../assets/Portfolio XD/gear.png'
import mobile from '../../assets/Portfolio XD/téléphone.png';
import desktop from '../../assets/Portfolio XD/ordinateur.png';
import portrait from '../../assets/Portfolio XD/portraittest.png';

function Strategy() {
    return(
        <>
            <div className="strategy">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center">Notre stratégie</h2>
                        <div className="d-sm-flex flex-nowrap align-items-center strategy-item">
                            <div className="col-sm-6 order-2 strategy-content">
                                <p className="h3 strategy-title">Qui je suis ?</p>
                                <p>
                                    Je suis un développeur web spécialisé dans la création d'applications web réactives.
                                </p>
                            </div>
                            <div className="col-sm-6 order-1 strategy-img">
                                <img className="img-fluid" src={tracé1}></img>
                                <img className="img-fluid portrait" src={portrait}></img>
                            </div>
                        </div>

                        <div className="d-md-flex justify-content-center">
                            <img className="col-md-8 img-fluid strategy-dotted" src={dotted1}></img>
                        </div>
                        

                        <div className="d-sm-flex align-items-center strategy-item">
                            <div className="col-sm-6 strategy-content">
                                <p className="h3 strategy-title">Objectifs</p>
                                <p>
                                    Mon objectif est de vous aider à concrétiser vos idées et à créer des expériences web.
                                </p>
                            </div>
                            <div className="col-sm-6 d-sm-flex justify-content-end strategy-img">
                                <img className="img-fluid" src={tracé2}></img>
                                <div className="strategy-gear">
                                    <img className="img-fluid gear1" src={gear}></img>
                                    <img className="img-fluid gear2" src={gear}></img>
                                    <img className="img-fluid gear3" src={gear}></img>
                                </div>   
                            </div>
                        </div>

                        <div className="d-md-flex justify-content-center">
                            <img className="col-md-8 img-fluid strategy-dotted" src={dotted2}></img>
                        </div>

                        <div className="d-sm-flex flex-nowrap align-items-center strategy-item">
                            <div className="col-sm-6 order-2 strategy-content">
                                <p className="h3 strategy-title">Stratégie</p>
                                <p>
                                    Que vous ayez besoin d'un site web d'entreprise, d'une application web interactive ou d'une refonte complète, 
                                    je suis là pour vous accompagner à chaque étape du processus
                                </p>
                            </div>
                            <div className="col-sm-6 order-1 strategy-img">
                                <div className="strategy-icons">
                                    <img className="img-fluid mobile-icon" src={mobile}></img>
                                    <img className="img-fluid desktop-icon" src={desktop}></img>
                                </div>
                                <img className="img-fluid" src={tracé3}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Strategy;