import { Link } from "react-router-dom"

import './style.css'
import Logo from './../../assets/logo.svg'

function Header(){
    return (
        <header>
        	<div>
			<img src={Logo} alt="Logo"/>
			<nav>
			    <ul className="menu-list">
				<li><Link to="/" className="header-link" lang="en">Home</Link></li>
			        <li><Link to="/about" className="header-link">Sobre</Link></li>
			    	<li><button lang="en">Download CV</button></li>
			    </ul>
			</nav>
		</div>
	</header>
    )
}

export default Header
