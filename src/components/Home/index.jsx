import profile from './../../assets/profile.jpg'
import profileBlob from './../../assets/profile-blob.svg'

import './style.css'
import './responsivity.css'

function Home() {
	return (
		<section className="home">
			<div id="texts">
				<h1>Gustavo<br/>Ferreira</h1>
				<p><span className="subtitle-underline">En</span>genharia de computação</p>
			</div>
			<div id="images">
				<div id="image-profile">
					<img src={profile} alt="Imagem do perfil." id="profile"/>
				</div>
				<div id="image-blob">
					<img src={profileBlob} id="blob" />
				</div>
			</div>
		</section>
	)
}

export default Home
