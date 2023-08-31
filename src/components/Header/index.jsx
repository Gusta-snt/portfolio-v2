import React, {useState, useEffect} from "react"

import { Link } from "react-router-dom"

import './style.css'
import './responsivity.css'
import Logo from './../../assets/logo.svg'
import MenuIcon from './../../assets/menu-icon.svg'
import CloseIcon from './../../assets/close-icon.svg'
import Curriculo from './../../assets/curriculo.pdf'

function Header(){
	let [classNav, setNav] = useState("off") 

	function check(e) {
		if(e.target.checked) {
			setNav("on")
		}else{
			setNav("off")
		}
	}

    return (
        <header className={classNav}>
        	<div>
				<img src={Logo} alt="Logo"/>
				<nav className={classNav}>
				    <ul className="menu-list">
						<li><Link to="/" className="header-link" lang="en">Home</Link></li>
				        <li><Link to="/about" className="header-link">Sobre</Link></li>
				    	<li><a className="download-btn" lang="en" href={Curriculo} download="curriculo">Download CV</a></li>
				    </ul>
				    <label htmlFor="active" className="close-btn">
				    	<img src={CloseIcon} alt="Fechar menu"/>
				    </label>
				</nav>
			</div>
			<input type="checkbox" id="active" onChange={e => check(e)}/>
			<label htmlFor="active" className="menu-btn">
				<img src={MenuIcon} alt="Abrir menu"/>
			</label>
		</header>
    )
}

export default Header
