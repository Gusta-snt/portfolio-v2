import './style.css'

import contactsLogo from './../../assets/contacts-logo.svg'
import githubLogo from './../../assets/github-logo.png'
import instagramLogo from './../../assets/instagram-logo.svg'
import linkedinLogo from './../../assets/linkedin-logo.svg'

import SectionTitle from './../SectionTitle'
import ContactsButton from './../ContactsButton'

function Contacts() {
    return (
        <section className="contacts">
            <SectionTitle>Contacts</SectionTitle>
            <p>snt.gustavoferreira@gmail.com</p>
            <div className="contacts-body">
                <img src={contactsLogo} className="contacts-logo"/>
                <div className="contacts-buttons">
                    <ContactsButton link="#" name="Github" image={githubLogo} />
                    <ContactsButton link="#" name="Instagram" image={instagramLogo} />
                    <ContactsButton link="#" name="Linkedin" image={linkedinLogo} />
                </div>
            </div>
        </section>
    )
}

export default Contacts