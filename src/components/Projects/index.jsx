import SectionTitle from './../SectionTitle'
import ProjectCard from './../ProjectCard'

import './style.css'

function Projects() {

    const projects = [
        {
            alt: "Logo do Gerador de KML",
            description: "Um aplicativo que elabora um mapa das linhas de transmissão de certa subestação escolhida pelo usuário.",
            img: "https://cdn-icons-png.flaticon.com/512/5105/5105746.png",
            imgWidth: "70px",
            key: "64cd942bb48108ce90676b0f",
            repo: "https://docs.google.com/document/d/1ln-TTPXE6vHTBA_m6UHDx5PvxuK9AsWTbPT2FiVM1IY/edit?usp=sharing",
            title: "Gerador de KML",
            titleFontSize: "2.3rem"
        },
        {
            alt: "Análise da turbina eólica",
            description: "Utilizando variáveis medidas ao longo do tempo, é possível se fazer uma análise para basear uma decisão de manutenção nessa turbina eólica.",
            img: "https://cdn-icons-png.flaticon.com/512/1783/1783849.png",
            imgWidth: "60px",
            key: "64c6665d686be0565b06bdb0",
            repo: "https://github.com/Gusta-snt/Analise-eficiencia-turbina-eolica/tree/main",
            title: "Eficiência da turbina eólica",
            titleFontSize: "2.3rem"
        },
        {
            alt: "Logo do Github Profiles",
            description: "Escreva o seu usuário do Github e veja suas informações com um ranking de seus repositórios.",
            img: "https://i.ibb.co/Qkzh9sw/github-Profiles-Logo.png",
            imgWidth: "70px",
            key: "64cd8e12b48108ce90676b0e",
            repo: "https://github-profiles-gustasnt.vercel.app/",
            title: "Github Profiles",
            titleFontSize: "2.5rem"
        }
    ]
    
    return (
        <section className="projects">
            <SectionTitle>
	            Projetos
	        </SectionTitle>
            <div>
                {
                    projects.map(project => {
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
