import SectionTitle from './../SectionTitle'
import ProjectCard from './../ProjectCard'

import './style.css'

function Projects() {

    const projects = [
        {
            alt: "Super Trunfo Logo",
            description: "Um emocionante jogo de cartas em Java, no qual os jogadores podem selecionar temas para o baralho e competir estrategicamente contra o computador.",
            img: "https://svgshare.com/i/vxd.svg",
            imgWidth: "120px",
            key: "64c6665d686be0565b06bdb0",
            repo: "https://github.com/Gusta-snt/projeto-final-poo",
            title: "Super Trunfo",
            titleFontSize: "2.6rem"
        },
        {
            alt: "Logo do Github Profiles",
            description: "Escreva o seu usuário do Github e veja suas informações com um ranking de seus repositórios.",
            img: "https://i.ibb.co/Qkzh9sw/github-Profiles-Logo.png",
            imgWidth: "70px",
            key: "64cd8e12b48108ce90676b0e",
            repo: "https://github.com/Gusta-snt/Github-Profiles",
            title: "Github Profiles",
            titleFontSize: "2.5rem"
        },
        {
            alt: "Logo do Gold Price",
            description: "Aplicativo Node.js que usa Axios e Cheerio para obter o valor atual do ouro por meio de web scraping.",
            img: "https://svgshare.com/i/w8P.svg",
            imgWidth: "120px",
            key: "64cd942bb48108ce90676b0f",
            repo: "https://github.com/Gusta-snt/node-webscraper-gold-price-backend",
            title: "Gold Price",
            titleFontSize: "2.6rem"
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
