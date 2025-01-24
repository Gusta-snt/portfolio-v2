import './style.css'

import SectionTitle from './../SectionTitle'
import SkillCard from './../SkillCard'

function Skills() {
    const skills = [
	    {
	    	description: "Python é uma linguagem de programação de alto nível, simples, versátil e amplamente usada para automação, análise de dados, desenvolvimento web, inteligência artificial e muito mais.",
	    	img: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/03/Python_logo_icon-300x300.png",
	    	key: "64c677517ded852a32d76332",
	    	title: "Python"
	    },
	    {
	    	description: "Excel é um software de planilhas eletrônicas da Microsoft usado para organizar, calcular, analisar e visualizar dados com fórmulas, tabelas e gráficos.",
	    	img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
	    	key: "64c677627ded852a32d76333",
	    	title: "Excel"
	    },
	    {
	    	description: "JavaScript é uma linguagem de programação leve e versátil, usada principalmente para adicionar interatividade e dinamismo a páginas web.",
	    	img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
	    	key: "64c677a67ded852a32d76334",
	    	title: "JavaScript"
	    },
	    {
	    	description: "Power Automate é uma ferramenta da Microsoft que permite criar fluxos de trabalho automatizados, conectando aplicativos, serviços e tarefas de forma integrada e simplificada.",
	    	img: "https://img.icons8.com/?size=512&id=kTTt25v6Drpd&format=png",
	    	key: "64c678087ded852a32d76335",
	    	title: "Power Automate"
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
