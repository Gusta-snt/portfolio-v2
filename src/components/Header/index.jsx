import './style.css'
import Logo from './../../assets/logo.svg'

function Header(){
    return (
        <header>
        	<div>
			    <img src={Logo} alt="Logo"/>
			    <nav>
			        <ul className="menu-list">
				    	<li><a href="#" className="header-link">Home</a></li>
			            <li><a href="#" className="header-link">About</a></li>
			    	    <li><button>Download CV</button></li>
			        </ul>
			    </nav>
		    </div>
		</header>
    )
}

export default Header
