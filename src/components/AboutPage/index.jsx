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
						Atualmente, atuo como Assistente Administrativo na Equatorial Energia Goiás, 
						onde desenvolvo e implemento projetos de automação e análise de dados para 
						a área do meio ambiente. Minha experiência inclui o uso de tecnologias como 
						Excel, Python e Pandas, com interesse crescente em machine learning e banco de dados, 
						o que me permite aplicar técnicas avançadas de ciência de dados em meus projetos. 
						Além disso, sou responsável pela organização e gerenciamento de informações relativas a 
						licenças ambientais e pela emissão de licenças de porte e uso de motosserras em conformidade 
						com as normas do IBAMA. Complementando minha atuação profissional, também ofereço 
						aulas particulares em disciplinas como Cálculo e Álgebra Linear, o que contribui para 
						o aprimoramento constante do meu conhecimento matemático e didático.
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
