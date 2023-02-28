import logo from '../assets/footer-logo.png';
import '../assets/Footer.css';
import { Link } from 'react-router-dom';

const styles = {
    footer: {
        display: 'grid',
        // gridTemplateColumns: '1fr 2fr 2fr 2fr',
        padding: '3rem 20%',
        backgroundColor: '#333',
        color: '#FFF'
    },
    h4: {
        marginTop: 0,
        marginBottom: '1rem',
        fontSize: '1.25rem'
    },
    list: {
        listStyleType: 'none',
        paddingLeft: 0,
        margin: 0
    },
    item: {
        lineHeight: '1.5rem'
    },
    link: {
        textDecoration: 'none',
        color: '#FFF'
    }
}

function Footer() {
    return ( 
        <footer style={styles.footer}>
            <div>
                <Link to="/">
                    <img src={logo} alt="Little Lemon Logo" />
                </Link>
            </div>
            <div>
                <h4 style={styles.h4}>Navigation</h4>
                <ul style={styles.list}>
                    <li style={styles.item}><Link style={styles.link} to="/">Home</Link></li>
                    <li style={styles.item}><Link style={styles.link} to="/about">About</Link></li>
                    <li style={styles.item}><Link style={styles.link} to="/menu">Menu</Link></li>
                    <li style={styles.item}><Link style={styles.link} to="/reservation">Reservations</Link></li>
                    <li style={styles.item}><Link style={styles.link} to="/order">Order Online</Link></li>
                    <li style={styles.item}><Link style={styles.link} to="/login">Login</Link></li>
                </ul>
            </div>
            <div>
                <h4 style={styles.h4}>Contact</h4>
                <address style={{fontStyle: 'normal', lineHeight: '1.5'}}>
                    <div>111 Little Lemon Street,</div>
                    <div>Chicago, IL 60007</div>
                    <div><a style={{color:'#FFF'}} href="tel:5555555555">(555) 555-5555</a></div>
                    <div><a style={{color:'#FFF'}} href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></div>
                </address>
            </div>
            <div>
                <h4 style={styles.h4}>Social Media</h4>
                <ul style={styles.list}>
                    <li style={styles.item}><a style={styles.link} href="#">Facebook</a></li>
                    <li style={styles.item}><a style={styles.link} href="#">Instagram</a></li>
                    <li style={styles.item}><a style={styles.link} href="#">Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;