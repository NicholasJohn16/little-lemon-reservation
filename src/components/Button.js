import { Link } from "react-router-dom";

const styles = {
    borderRadius: '.5rem',
    backgroundColor: '#F4CE14',
    padding: '1rem 2rem',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
    display: 'block'
}

function Button({type = 'default', children, href="#", style, ...props}) {

    return (
        <Link to={href} style={{...styles, ...style}} {...props}>
            {children}
        </Link>
    )
}

export default Button;