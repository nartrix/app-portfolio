import { Link ,NavLink  } from 'react-router-dom';
import '../navbar/navbar.scss';


function Navbar () {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">D.D</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link" to="/presentation">Nous-connaître</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/projects">Projets</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="btn btn-outline-primary" to="/contact">Contact</NavLink>
                            </li>
                        </ul>                           
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;