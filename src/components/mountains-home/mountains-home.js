import './mountains-home.scss';
import cloud1 from '../../assets/Portfolio XD/cloud1.png';
import mountain1 from '../../assets/Portfolio XD/mountain1.png';
import mountain2 from '../../assets/Portfolio XD/mountain2.png';
import mountain3 from '../../assets/Portfolio XD/mountain3.png';
import mountain4 from '../../assets/Portfolio XD/mountain4.png';
import { Link } from 'react-router-dom';

function MountainsHome() {
    return (
        <>
            <div className="mountains-section">
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-primary" to="/contact">Contacter-nous</Link>
                </div>
                <img src={cloud1} className="cloud3 img-fluid"></img>
                <div className="mountains-home">
                    <img src={mountain1} className="img-fluid mountain1"></img>
                    <img src={mountain2} className="img-fluid mountain2"></img>
                    <img src={mountain3} className="img-fluid mountain3"></img>
                    <img src={mountain4} className="img-fluid mountain4"></img>
                </div>
            </div>
        </>
    );
}

export default MountainsHome;