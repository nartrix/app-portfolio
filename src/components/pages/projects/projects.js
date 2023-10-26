import ProjectCarousel from "../../projects-carousel/projects-carousel";
import ProjectArticle from "../../projects-article/projects-article";
import DataProjects from "../../../data/data.json"

function Projects() {
    
    /* const articles = [
        {
            "_id" : "1",
            "name": "Reservia",
            "description": "Création d'un site vitrine de réservation d'hôtels"
        },

        {
            "_id" : "2",
            "name": "Ohmyfood",
            "description": "Création d'un site vitrine de réservation de restaurant"
        },

        {
            "_id" : "3",
            "name": "la choutte agence",
            "description": "Optimisation d'un site existant, afin d'améliorer son référencement sur google et sa visibilité"
        },

        {
            "_id" : "4",
            "name": "orinoco",
            "description": "Création d'un site e-commerce d'ours en peluche"
        },

        {
            "_id" : "5",
            "name": "so pekocko",
            "description": "Création d'un site de sauce piquante"
        },

        {
            "_id" : "6",
            "name": "groupomania",
            "description": "Création d'un application d'un réseaux social d'entreprise"
        },
    ] */

    return (
        <>
        <div className="Projects">
            <ProjectCarousel/>
            { DataProjects ? (DataProjects.map(DataProject => {
                    return <ProjectArticle key={DataProject.id} name={DataProject.name} description={DataProject.description} image={DataProject.image} />
            })) : [] }
        </div>
        </>
    );
}

export default Projects;