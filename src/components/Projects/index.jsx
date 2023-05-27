import React, {useState, useEffect} from "react"

import SectionTitle from './../SectionTitle'
import ProjectCard from './../ProjectCard'
import logo from './../../assets/logo.svg'

import './style.css'

function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/projects")
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error(err))
    }, [])
    
    return (
        <section className="projects">
            <SectionTitle>
	            Projects
	        </SectionTitle>
            {
                projects.map(project => {
                    return (
                        <ProjectCard 
                            logo={project.img} 
                            alt={project.alt} 
                            title={project.title} 
                            description={project.description}
                            techs={project.techs}
                        />
                    )
                })
            }
            
        </section>
    )
}

export default Projects
