import { Link } from 'react-router-dom';

const styles = {
    list: {
        listStyleType: 'none',
        paddingLeft: 0
    },
    item: {
        // display: 'inline',
        fontSize: '20px',
        // padding: '1rem'
    },
    link: {
        textDecoration: 'none',
    }
}

function Nav({showMenu}) {

    const display = {
        display: showMenu ? 'block' : 'none'
    }

    return ( 
        <nav style={{...{textAlign: 'right'}, ...display}}>
            <menu style={styles.list}>
                <li style={styles.item}><Link style={styles.link} to="/">Home</Link></li>
                <li style={styles.item}><Link style={styles.link} to="/about">About</Link></li>
                <li style={styles.item}><Link style={styles.link} to="/menu">Menu</Link></li>
                <li style={styles.item}><Link style={styles.link} to="/reservations">Reservations</Link></li>
                <li style={styles.item}><Link style={styles.link} to="/order">Order Online</Link></li>
                <li style={styles.item}><Link style={styles.link} to="/login">Login</Link></li>
            </menu>
        </nav>
    )
}

export default Nav;