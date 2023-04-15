import profile from './../../assets/profile.jpg'
import profileBlob from './../../assets/profile-blob.svg'

import './style.css'

function Home() {
    return (
        <section>
	    <div id="texts">
		<h1>Gustavo<br/>Ferreira</h1>
	        <p><span>Fu</span>ll-stack developer</p>
	    </div>
	    <div id="image">
	        <img src={profile} alt="Profile image." id="profile"/>
	        <img src={profileBlob} id="blob" />
	    </div>
        </section>
    )
}

export default Home
