import './style.css'

import SectionTitle from './../SectionTitle'
import SkillCard from './../SkillCard'

function Skills() {
    return (
        <section className="skills">
            <SectionTitle>Skills</SectionTitle>
	    <div>
	    	<SkillCard />
	        <SkillCard />
	        <SkillCard />
	        <SkillCard />
	    </div>
        </section>
    )
}

export default Skills
