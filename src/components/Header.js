import logo from '../assets/logo.svg';
import Nav from './Nav';
import '../assets/Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const styles = {
    header: {
        // display: 'grid',
        // gridTemplateColumns: '1fr 7fr 1fr',
        // gap: '2rem',
        // margin: '0 20%',
        // alignItems: 'center'
    },
    logo: {
        display: 'block'
        // "position":"relative",
        // "top":"50%",
        // "transform":"translateY(-50%)"
    },
    button: {
        height: '2rem',
        backgroundColor: '#FFF',
        border: 'none',
        cursor: 'pointer'
    }
}

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((showMenu) => !showMenu);
    }

    return (
        <header className="header" style={styles.header}>
            <a href="/">
                <img style={styles.logo} src={logo} alt="Little Lemon Logo" />
            </a>

            <Nav showMenu={showMenu} />

            <button onClick={toggleMenu} style={styles.button}><FontAwesomeIcon icon={faBars} size="2x" /></button>
        </header>
    )
}

export default Header;