import './home.scss';
import HeroHome from '../../hero-home/hero-home';
import Strategy from '../../strategy/strategy';
import ProjectsHome from '../../projects-home/projects-home';
import MountainsHome from '../../mountains-home/mountains-home';

function Home () {
    return (
        <>
            <div className="home">
                <HeroHome/>
                <Strategy/>
                <ProjectsHome/>
                <MountainsHome/>
            </div>
        </>
    );
}

export default Home;