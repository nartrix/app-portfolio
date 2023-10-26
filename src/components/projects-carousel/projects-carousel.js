import Image1 from '../../assets/Portfolio XD/bg-masthead.jpg';


function CardProjects() {
    return(
        <>
            <div className="projects-section" id="projects">
                <div className="container">
                    {/* <!-- Featured Project Row--> */}
                    <div className="row align-items-center">
                        <div className="col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={Image1} alt="..." /></div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="text-center">
                                <h1>Projets</h1>
                                <p className="text-black-50">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardProjects;