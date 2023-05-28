import './style.css'

function ContactsButton(props) {
    return (
        <a href={props.link} className="contacts-button" target="_blank">
            {props.name}
            <img src={props.image} />
        </a>
    )
}

export default ContactsButton