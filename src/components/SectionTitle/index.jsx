import './style.css'

function SectionTitle(props) {
    const firstLetter = props.children[0]
    const wordRest = props.children.slice(1)
    return (
        <h2>
	    <span className="underline">{firstLetter}</span>
	    {wordRest}
        </h2>
    )
}

export default SectionTitle
