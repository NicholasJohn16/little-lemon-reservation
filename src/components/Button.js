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
        <a href={href} style={{...styles, ...style}} {...props}>
            {children}
        </a>
    )
}

export default Button;