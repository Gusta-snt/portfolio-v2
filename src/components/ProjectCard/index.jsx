import logo from './../../assets/logo.svg'

import './style.css'

function ProjectCard() {
    return (
        <div className="card">
            <img src={logo} alt="Portfolio Logo" className="card-logo"/>
            <h3 className="card-title">Portfolio</h3>
            <div className="card-texts">
                <p className="card-description">My principal site were you can know me better or have a first contact with my projects.</p>
                <div>
                    <p className="card-techs-text">Technologies:</p>
                    <ul className="card-techs-list">
                        <li>- React JS</li>
                        <li>- Vite JS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard