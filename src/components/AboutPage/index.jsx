import Header from "./../Header"
import Footer from "./../Footer"
import avatar from "./../../assets/gusta-avatar.png"

import "./style.css"

function About() {
	return (
		<>
		<Header/>
		<main className="about">
			<aside className="aside-left">
				<h1><span className="underline">Sob</span>re mim</h1>
				<p>Hoje, estudante de programação, inicio a carreira como dev Fullstack. Conheci a programação por meio do curso de técnico integrado ao ensino médio de Automação Industrial, onde aprendi lógica de programação e linguagem C. Com o tempo, fui me aprimorando até que conheci HTML, CSS e JS, que são tecnologias importantes para minha carreira. Meu objetivo é me tornar um grande programador no futuro, com a finalidade de fazer com que a vida das pessoas se torne mais fácil, por meio da tecnologia.</p>
			</aside>
			<aside className="aside-right">
				<img src={avatar} alt="Meu avatar."/>
			</aside>
		</main>
		<hr/>
		<Footer/>
		</>
	)
}

export default About;
