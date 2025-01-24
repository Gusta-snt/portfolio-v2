import Header from "./../Header"
import Footer from "./../Footer"
import avatar from "./../../assets/gusta-avatar.png"

import "./style.css"
import "./responsivity.css"

function About() {
	return (
		<div className="about-page">
			<Header/>
			<main className="about">
				<aside className="aside-left">
					<h1><span className="underline">Sob</span>re mim</h1>
					<p>
						Sou profissional com experiência em automação de processos e análise de dados,
						focado em tornar operações mais eficientes e apoiar decisões estratégicas. 
						Atualmente, atuo como assistente administrativo no planejamento da expansão da rede de energia
						elétrica no estado de Goiás, contribuindo para o crescimento sustentável do setor energético.
						Tenho especialidade em Python, Excel, JavaScript (ES6), Power Query e Power Automate, ferramentas
						que utilizo para criar soluções inovadoras e agregar valor aos projetos em que participo.
					</p>
				</aside>
				<aside className="aside-right">
					<img src={avatar} alt="Meu avatar."/>
				</aside>
			</main>
			<div className="footer-container">
				<hr/>
				<Footer/>
			</div>
		</div>
	)
}

export default About;
