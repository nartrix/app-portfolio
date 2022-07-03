import './mountains-contact.scss';
import cloud1 from '../../assets/Portfolio XD/cloud1.png';
import mountain1 from '../../assets/Portfolio XD/mountain1.png';
import mountain2 from '../../assets/Portfolio XD/mountain2.png';
import mountain3 from '../../assets/Portfolio XD/mountain3.png';
import mountain4 from '../../assets/Portfolio XD/mountain4.png';

function MountainsContact() {
    return (
        <>
            <div className="mountains-contact">
                <img src={cloud1} className="img-fluid cloud1"></img>
                <div className="mountains-content">
                    <img src={mountain1} className="img-fluid mountain1"></img>
                    <img src={mountain2} className="img-fluid mountain2"></img>
                    <img src={mountain3} className="img-fluid mountain3"></img>
                    <img src={mountain4} className="img-fluid mountain4"></img>
                </div>
            </div>
        </>
    );
}

export default MountainsContact;