import './style.css'

import htmlLogo from './../../assets/html-logo.svg'

function SkillCard() {
    return (
        <article className="skill-card">
            <img src={htmlLogo}/>
	    <h3>HTML</h3>
	    <p>HTML is a markup language used to create web pages and other information that can be displayed in a web browser.</p>
        </article>
    )
}

export default SkillCard
