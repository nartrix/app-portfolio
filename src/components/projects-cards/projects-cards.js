import './projects-cards.scss';
import project4 from '../../assets/Portfolio XD/project4.png';
import { Link } from 'react-router-dom';

function ProjectsCards() {
    return (
        <>
            <div className="projects-cards">
                <div className="container">
                    <h3 className="text-center">Projets récents</h3>
                    <div className="row gy-3 d-flex justify-content-center">
                        <div className="col-md-4">
                            <img src={project4} className="img-fluid"></img>
                        </div>

                        <div className="col-md-4">
                            <img src={project4} className="img-fluid"></img>
                        </div>

                        <div className="w-100"></div>

                        <div className="col-md-4">
                            <img src={project4} className="img-fluid"></img>
                        </div>

                        <div className="col-md-4">
                            <img src={project4} className="img-fluid"></img>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                            <Link className="btn" to="/projects">Voir plus</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsCards;