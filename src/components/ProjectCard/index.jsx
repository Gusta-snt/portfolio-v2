import './style.css'

function ProjectCard(props) {
    return (
        <article className="project-card">
            <img src={props.logo} alt={props.alt} />
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.description}</p>
        </article>
    )
}

export default ProjectCard
