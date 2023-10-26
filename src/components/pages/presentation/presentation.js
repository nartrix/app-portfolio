import HeroPresentation from '../../hero-presentation/hero-presentation';
import Carousel  from '../../Carousel/carousel';

function Presentation () {
    return (
        <>
            <div className="presentation">
                <HeroPresentation/>
                <Carousel />
            </div>
        </>
    );
}

export default Presentation;