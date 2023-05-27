

import './style.css'

function ProjectCard(props) {
    return (
        <div className="card">
            <img src={props.logo} alt={props.alt} className="card-logo"/>
            <h3 className="card-title">{props.title}</h3>
            <div className="card-texts">
                <p className="card-description">{props.description}</p>
                <div>
                    <p className="card-techs-text">Technologies:</p>
                    <ul className="card-techs-list">
                        {
                            props.techs.map(tech => {
                                return <li>{tech}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
