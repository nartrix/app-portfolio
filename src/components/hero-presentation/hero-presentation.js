import './hero-presentation.scss';
import portrait from '../../assets/Portfolio XD/portraittest.png';

function heroPresentation() {
    return(
        <>
            <div className="hero-presentation">
                <div className="container">
                        <div className="row justify-content-center text-center">
                            <h1 className="">Qui je suis ?</h1>
                            <div className="hero-img d-flex align-items-center">
                                <img src={portrait} className="img-fluid"></img>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default heroPresentation;