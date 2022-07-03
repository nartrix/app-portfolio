import './home.scss';
import HeroHome from '../../hero-home/hero-home';
import Strategy from '../../strategy/strategy';
import ProjectsCards from '../../projects-cards/projects-cards';
import MountainsHome from '../../mountains-home/mountains-home';

function Home () {
    return (
        <>
            <div className="home">
                <HeroHome/>
                <Strategy/>
                <ProjectsCards/>
                <MountainsHome/>
            </div>
        </>
    );
}

export default Home;