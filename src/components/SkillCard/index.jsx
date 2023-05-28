import './style.css'

function SkillCard(props) {
    return (
        <article className="skill-card">
            <img src={props.logo}/>
    	    <h3>{props.title}</h3>
    	    <p>{props.description}</p>
        </article>
    )
}

export default SkillCard
