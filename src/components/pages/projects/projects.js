import CardProjects from "../../card-projects/card-projects";

function Projects() {
    
    const project = [
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
    ]

    return (
        <>
        <CardProjects/>
        </>
    );
}

export default Projects;