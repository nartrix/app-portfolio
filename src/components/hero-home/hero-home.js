import './hero-home.scss';
import cercle1 from '../../assets/Portfolio XD/cercle étoilés 1.png';
import cloud1 from '../../assets/Portfolio XD/cloud1.png';
import cercle2 from '../../assets/Portfolio XD/cercle étoilés 2.png';
import cercle3 from '../../assets/Portfolio XD/cercle étoilés 3.png';
import { Link } from 'react-router-dom';

function HeroHome() {
    return(
        <>
            <div className="hero-home">
                <div className="hero-img">
                    <img src={cercle1} className="cercle1" alt="cercle à fond étoilé"></img>
                    <img src={cloud1} className="cloud1" alt="nuages"></img>
                    <img src={cercle2} className="cercle2" alt="cercle à fond étoilé"></img>
                    <img src={cloud1} className="cloud2" alt="nuages"></img>
                    <img src={cercle3} className="cercle3" alt="cercle à fond étoilé"></img>
                </div>
                <div className="container-fluid">
                    <div className="row d-sm-flex justify-content-center">
                        <h1 className="title text-center">Agence Web</h1>
                        <p className="col-sm-6 text-center">
                            Transformez vos idées en applications web réactives de qualité
                        </p>
                        <div className="d-flex gx-4 justify-content-center align-items-center section-btn">
                            <div className="col-md-2 d-flex justify-content-center">
                                <Link type="button" className="btn" to="/contact">Lancer vous</Link>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <Link to="/presentation">Nous connaitre</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroHome;