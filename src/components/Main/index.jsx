import './style.css'

import Home from './../Home'
import Projects from './../Projects'
import Skills from './../Skills'
import Contacts from './../Contacts'

function Main() {
    return (
        <main>
            <Home />
	       <hr />
	       <Projects />
	       <Skills />
           <Contacts />
        </main>
    )
}

export default Main
