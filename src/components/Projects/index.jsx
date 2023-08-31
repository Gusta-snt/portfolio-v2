import React, {useState, useEffect} from "react"

import SectionTitle from './../SectionTitle'
import ProjectCard from './../ProjectCard'

import './style.css'

function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(import.meta.env.VITE_API_BACKEND_LINK + "/projects")
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error(err))
    }, [])
    
    return (
        <section className="projects">
            <SectionTitle>
	            Projetos
	    </SectionTitle>
            <div>
                {
                    projects.map(project => {
			console.log(project.repo)
                        return (
                            <ProjectCard 
				key={project.key}
                                logo={project.img} 
				logoWidth={project.imgWidth}
                                alt={project.alt} 
                                title={project.title} 
				titleFontSize={project.titleFontSize}
                                description={project.description}
				repo={project.repo}
                            />
                        )
                    })
                }
            </div>
            
        </section>
    )
}

export default Projects
