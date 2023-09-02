import './style.css'

function ProjectCard(props) {
    const imgStyle = {
	   width: props.logoWidth
    }

    const titleStyle = {
	   fontSize: props.titleFontSize
    }
    return (
    	<a href={props.repo} target="_blank" className="project-card-link">
            <article className="project-card">
                <img src={props.logo} style={imgStyle} alt={props.alt} />
                <h3 className="card-title" style={titleStyle}>{props.title}</h3>
                <p className="card-description">{props.description}</p>
            </article>
    	</a>
    )
}

export default ProjectCard
