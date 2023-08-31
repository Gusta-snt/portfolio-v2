import React, {useState, useEffect} from "react"

import './style.css'

import SectionTitle from './../SectionTitle'
import SkillCard from './../SkillCard'

function Skills() {

	const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch(import.meta.env.VITE_API_BACKEND_LINK + "/skills")
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <section className="skills">
            <SectionTitle lang="en">Skills</SectionTitle>
		    <div>
		    	{
		    		skills.map(skill => {
		    			return (
		    				<SkillCard 
							key={skill.key} 
							logo={skill.img} 
							title={skill.title} 
							description={skill.description} 
						/>
		    			)
		    		})
		    	}
		    </div>
        </section>
    )
}

export default Skills
