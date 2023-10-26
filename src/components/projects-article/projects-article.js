import Image2 from '../../assets/Portfolio XD/demo-image-01.jpg';


function ProjectArticle(props) {
    return(
        <>
            <div className='project-article mb-5 '>
                <div className='container'>
                    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid" src={props.image} alt="..." /></div>
                        <div className="col-lg-6 col-sm-4">
                            <div className="bg-primary text-center h-100 p-4 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white">{props.name}</h4>
                                        <p className="mb-0 text-white-50">{props.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectArticle;