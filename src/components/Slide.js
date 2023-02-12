
const Dir = '/images';
const PLink = '#';

const Slide = (props) => {

    const {
        title = '', 
        text = '', 
        src = '', 
        lbl = '', 
        color = '', 
        cls = '', 
    } = props;

    return (
        <div className={`box brd ${cls}`}>
            <img width="960" height="615" src={`${Dir}/${src}`} alt="" />
            <a className="link" href={PLink}> </a>
            <div className="text">
                <span className={`lbl ${color}`}>{lbl}</span>
                <h4 className="bold"><a href={PLink}>{title}</a></h4>
                {text !== '' && <p>{text}</p>}
            </div>
        </div>
    )
}

export default Slide