import './style.css'
import './responsivity.css'

import contactsLogo from './../../assets/contacts-logo.svg'
import githubLogo from './../../assets/github-logo.png'
import linkedinLogo from './../../assets/linkedin-logo.svg'

import SectionTitle from './../SectionTitle'
import ContactsButton from './../ContactsButton'

function Contacts() {
    return (
        <section className="contacts">
            <SectionTitle>Contatos</SectionTitle>
            <p>snt.gustavoferreira@gmail.com</p>
            <div className="contacts-body">
                <img src={contactsLogo} className="contacts-logo"/>
                <div className="contacts-buttons">
                    <ContactsButton link="https://github.com/Gusta-snt" name="Github" image={githubLogo} />
                    <ContactsButton link="https://www.linkedin.com/in/gustavo-ferreira-dos-santos-a3b6b1231/" name="Linkedin" image={linkedinLogo} />
                </div>
            </div>
        </section>
    )
}

export default Contacts
