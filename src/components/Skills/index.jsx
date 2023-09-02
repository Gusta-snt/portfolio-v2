import './style.css'

import SectionTitle from './../SectionTitle'
import SkillCard from './../SkillCard'

function Skills() {
    const skills = [
	    {
	    	description: "HTML é uma linguagem fundamental para a criação de páginas web, estruturando o conteúdo por meio de elementos e tags.",
	    	img: "https://svgshare.com/i/xBW.svg",
	    	key: "64c677517ded852a32d76332",
	    	title: "HTML"
	    },
	    {
	    	description: "CSS é uma linguagem de estilo que complementa o HTML, permitindo a formatação e o design das páginas web.",
	    	img: "https://svgshare.com/i/x9n.svg",
	    	key: "64c677627ded852a32d76333",
	    	title: "CSS"
	    },
	    {
	    	description: "JS  é uma poderosa linguagem de programação, amplamente usada para criar interatividade em páginas web.",
	    	img: "https://svgshare.com/i/x9o.svg",
	    	key: "64c677a67ded852a32d76334",
	    	title: "JS"
	    },
	    {
	    	description: "React é uma biblioteca JavaScript de código aberto, utilizada para o desenvolvimento de interfaces de usuário interativas e reativas.",
	    	img: "https://svgshare.com/i/xAS.svg",
	    	key: "64c678087ded852a32d76335",
	    	title: "React JS"
	    }
    ]

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
