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
                <li style={styles.item}><a style={styles.link} href="/home">Home</a></li>
                <li style={styles.item}><a style={styles.link} href="/about">About</a></li>
                <li style={styles.item}><a style={styles.link} href="/menu">Menu</a></li>
                <li style={styles.item}><a style={styles.link} href="/reservation">Reservations</a></li>
                <li style={styles.item}><a style={styles.link} href="/order">Order Online</a></li>
                <li style={styles.item}><a style={styles.link} href="/login">Login</a></li>
            </menu>
        </nav>
    )
}

export default Nav;